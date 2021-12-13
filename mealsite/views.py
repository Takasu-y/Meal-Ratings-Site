from django.shortcuts import render
from django.views.generic import ListView, DetailView, FormView
from django.db.models import Avg
from django.utils.timezone import make_aware
from django.urls import reverse_lazy
import datetime

from .models import Meal
from .forms import MealFrom, MealRatingForm
# Create your views here.

class IndexView(ListView, FormView):
    model = Meal
    form_class = MealFrom
    success_url = None
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["topRate"] = Meal.objects.all().annotate(avg_rating = Avg("mealrating__rating")).order_by('-avg_rating')[0:3]
        context["recently"] = Meal.objects.all().order_by('-dateAdded')[0:3]

        return context

    def form_valid(self, form):
        self.success_url = reverse_lazy("meal:index")
        return super().form_valid(form)

class MealListView(ListView):
    model = Meal
    template_name = "mealSite/categoryList.html"
    context_object_name = "meals"

    def get_queryset(self):
        #objの取得
        if self.kwargs["category"] == "morning":
            meals = self.model.objects.filter(typicalMealTime=1)

        elif self.kwargs["category"] == "afternoon":
            meals = self.model.objects.filter(typicalMealTime=2)

        elif self.kwargs["category"] == "evening":
            meals = self.model.objects.filter(typicalMealTime=3)

        elif self.kwargs["category"] == "recently":
            now = make_aware(datetime.datetime.now())
            borderElapsedDays = now + datetime.timedelta(days=-3000) #TODO:90日に変更予定
            meals = self.model.objects.all().filter(dateAdded__gte=borderElapsedDays)

        elif self.kwargs["category"] == "topRate":
            borderRating = 3.5 #TODO:4.5へ変更予定
            meals = self.model.objects.all().annotate(avg_rating = Avg("mealrating__rating")).filter(avg_rating__gte=borderRating)

        #取得したmeals objをqでソートする
        q = self.request.GET.get('q') if self.request.GET.get('q') != None else ''

        if q == "rating":
            #popular meals
            meals = meals.annotate(avg_rating = Avg("mealrating__rating")).order_by('-avg_rating')
        elif q == "date":
            # new added
            meals = meals.order_by("-dateAdded")
        else:
            meals = meals.order_by("countryOfOrigin")

        return meals

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["category"] = self.kwargs["category"]
        return context


class MealDetailView(DetailView, FormView):
    model = Meal
    form_class = MealRatingForm
    template_name = "mealSite/mealDetail.html"
    success_url = None
    context_object_name = "meal"

    def form_valid(self, form):
        rating = form.save(commit=False)
        meal_id = self.kwargs["pk"]
        rating.meal_id = meal_id
        rating.save()

        self.success_url = reverse_lazy('meal:mealDetail', kwargs={ "pk": meal_id})
        return super().form_valid(form)

