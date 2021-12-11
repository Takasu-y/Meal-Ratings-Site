from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.db.models import Avg

from .models import Meal, MealRating
from .forms import MealFrom
# Create your views here.


class IndexView(ListView):
    model = Meal
    template_name = "index.html"
    context_object_name = "meals"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["form"] = MealFrom
        context["topRate"] = Meal.objects.all().annotate(avg_rating = Avg("mealrating__rating")).order_by('-avg_rating')[0:3]
        context["recently"] = Meal.objects.all().order_by('-dateAdded')[0:3]
        return context


class MealListView(ListView):
    model = Meal
    template_name = "mealSite/categoryList.html"
    context_object_name = "meals"
    querset = None

    def get(self, request, *args, **kwargs):
        # q = request.GET.get('q') if request.GET.get('q') != None else ''
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        recentlyMeal = Meal.objects.all().annotate(avg_rating = Avg("mealrating__rating")).order_by('-avg_rating')
        #クラス名は全部小文字
        return recentlyMeal




class MealDetailView(DetailView):
    model = Meal
    template_name = "mealSite/mealDetail.html"
    context_object_name = "meal"

