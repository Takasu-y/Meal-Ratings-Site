from django.urls import path
from .views import IndexView, MealDetailView, AddMealFormView, HistoryListView

app_name='meal'

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('detail/<int:pk>/', MealDetailView.as_view(), name="mealDetail"),
    path('add-meal-form/', AddMealFormView.as_view(), name="addMeal"),
    path('see-history/', HistoryListView.as_view(), name="history"),

]
