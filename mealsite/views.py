from django.shortcuts import render
from django.views.generic import ListView, DetailView, FormView, TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Avg
from django.urls import reverse_lazy

from .models import Meal, Tag
from .forms import MealFrom, MealRatingForm
# Create your views here.

class IndexView(ListView):
    model = Meal
    template_name = "index.html"
    context_object_name = "meals"

    def get_queryset(self):
        meals = self.model.objects.all().order_by("-dateAdded")

        #取得したmeals objをqでソートする
        q = self.request.GET.get('q') if self.request.GET.get('q') != None else ''

        if q == "rating":
            #popular meals
            meals = meals.annotate(avg_rating = Avg("mealrating__rating")).order_by('-avg_rating')
        elif q == "date":
            # new added
            meals = meals.order_by("-dateAdded")
        elif q == "country":
            meals = meals.order_by("countryOfOrigin")

        return meals

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["count"] = self.model.objects.all().count()
        context["tags"] = Tag.objects.all()

        return context

class AddMealFormView(LoginRequiredMixin, FormView):
    model = Meal
    form_class = MealFrom
    template_name = "mealSite/addMeal.html"


class HistoryListView(LoginRequiredMixin, TemplateView):
    #TODO: make history model, change TemplateView -> ListView
    # model = History
    template_name = "mealSite/seeHistory.html"


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

        if self.request.user.is_authenticated:
            rating.voted_by = self.request.user

        rating.save()

        self.success_url = reverse_lazy('meal:mealDetail', kwargs={ "pk": meal_id})
        return super().form_valid(form)

