from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.views.generic import ListView, DetailView, FormView, TemplateView
from django.db.models import Avg
from django.utils.timezone import make_aware
from django.urls import reverse_lazy
import datetime

from .models import Meal
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

        return context

class AddMealFormView(FormView):
    model = Meal
    form_class = MealFrom
    template_name = "mealSite/addMeal.html"


class HistoryListView(TemplateView):
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
        rating.save()

        self.success_url = reverse_lazy('meal:mealDetail', kwargs={ "pk": meal_id})
        return super().form_valid(form)


# class MealListView(ListView):
#     model = Meal
#     template_name = "mealSite/categoryList.html"
#     context_object_name = "meals"

#     def get_queryset(self):
#         #objの取得
#         if self.kwargs["category"] == "morning":
#             meals = self.model.objects.filter(typicalMealTime=1)

#         elif self.kwargs["category"] == "afternoon":
#             meals = self.model.objects.filter(typicalMealTime=2)

#         elif self.kwargs["category"] == "evening":
#             meals = self.model.objects.filter(typicalMealTime=3)

#         elif self.kwargs["category"] == "recently":
#             now = make_aware(datetime.datetime.now())
#             borderElapsedDays = now + datetime.timedelta(days=-90) #TODO:90日に変更予定
#             meals = self.model.objects.all().filter(dateAdded__gte=borderElapsedDays)

#         elif self.kwargs["category"] == "topRate":
#             borderRating = 3.5 #TODO:4.5へ変更予定
#             meals = self.model.objects.all().annotate(avg_rating = Avg("mealrating__rating")).filter(avg_rating__gte=borderRating)

#         #取得したmeals objをqでソートする
#         q = self.request.GET.get('q') if self.request.GET.get('q') != None else ''

#         if q == "rating":
#             #popular meals
#             meals = meals.annotate(avg_rating = Avg("mealrating__rating")).order_by('-avg_rating')
#         elif q == "date":
#             # new added
#             meals = meals.order_by("-dateAdded")
#         else:
#             meals = meals.order_by("countryOfOrigin")

#         return meals

#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context["category"] = self.kwargs["category"]
#         return context