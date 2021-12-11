from django.shortcuts import render
from django.views.generic import ListView, DetailView

from .models import Meal, MealRating
# Create your views here.


class IndexView(ListView):
    model = Meal
    template_name = "index.html"


class MealListView(ListView):
    model = Meal
    template_name = "mealSite/categoryList.html"



class MealDetailView(DetailView):
    model = Meal
    template_name = "mealSite/mealDetail.html"

