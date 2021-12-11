from django.db import models
from django.db.models.fields import DateTimeField

# Create your models here.

class Meal(models.Model):
    """Model definition for Meal."""

    name = models.CharField("料理名", max_length=120)
    description = models.TextField("説明")
    imageUrl = models.URLField("URL", max_length=200)
    countryOfOrigin = models.CharField("国名", max_length=120)
    typicalMealTime = models.IntegerField(choices=[
        (1, "morning"),
        (2, "afternoon"),
        (3, "evening"),
    ])
    dateAdded = models.DateTimeField("投稿日時", auto_now_add=True)

    class Meta:
        """Meta definition for Meal."""

        verbose_name = 'Meal'
        verbose_name_plural = 'Meals'

    def __str__(self):
        """Unicode representation of Meal."""
        return self.name


class MealRating(models.Model):
    """Model definition for MealRating."""

    meal = models.ForeignKey(Meal, verbose_name="食事", on_delete=models.CASCADE)
    rating = models.FloatField("評価")
    dateOfRating =models.DateTimeField("評価日時", auto_now_add=True)

    class Meta:
        """Meta definition for MealRating."""

        verbose_name = 'MealRating'
        verbose_name_plural = 'MealRatings'

    def __str__(self):
        """Unicode representation of MealRating."""
        return self.rating
