from django.db import models

# Create your models here.

class Meal(models.Model):
    """Model definition for Meal."""

    # TODO: Define fields here
    # name =
    # description =
    # imageUrl =
    # countryOfOrigin =
    # typicalMealTime =
    # dateAdded =

    class Meta:
        """Meta definition for Meal."""

        verbose_name = 'Meal'
        verbose_name_plural = 'Meals'

    def __str__(self):
        """Unicode representation of Meal."""
        return self.name


class MealRating(models.Model):
    """Model definition for MealRating."""

    # TODO: Define fields here
    # meal =
    # rating =
    # dateOfRating =

    class Meta:
        """Meta definition for MealRating."""

        verbose_name = 'MealRating'
        verbose_name_plural = 'MealRatings'

    def __str__(self):
        """Unicode representation of MealRating."""
        return self.rating
