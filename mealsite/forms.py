from django.db.models import fields
from django.forms.models import ModelForm
from .models import Meal, MealRating


class MealFrom(ModelForm):
    """MealFrom definition."""

    class Meta:
        model = Meal
        fields = ["name", "description", "imageUrl", "countryOfOrigin", "typicalMealTime"]


class MealRating(ModelForm):
    """MealRating definition."""

    class Meta:
        model = MealRating
        fields = ["rating"]
