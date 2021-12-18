from django.contrib import admin
from .models import Meal, MealRating, Tag

# Register your models here.

admin.site.register(Meal)
admin.site.register(MealRating)
admin.site.register(Tag)