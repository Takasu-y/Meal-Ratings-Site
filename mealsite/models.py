from django.db import models

# Create your models here.

class Meal(models.Model):
    """Model definition for Meal."""

    name = models.CharField("Meal", max_length=120)
    description = models.TextField("Description")
    imageUrl = models.CharField("URL", max_length=200)
    countryOfOrigin = models.CharField("Country", max_length=120)
    typicalMealTime = models.IntegerField("Meal Time", choices=[
        (1, "morning"),
        (2, "afternoon"),
        (3, "evening"),
    ])
    dateAdded = models.DateTimeField("create", auto_now_add=True)


    def getAvgRating(self):
        mealName = self.name
        votes = MealRating.objects.filter(meal__name=mealName)

        sumRating = 0

        for vote in votes:
            sumRating += vote.rating

        if self.numberOfVotes() != 0:
            avgRating = sumRating / self.numberOfVotes()
        else:
            avgRating = 0

        return avgRating

    def numberOfVotes(self):
        mealName = self.name
        count = MealRating.objects.filter(meal__name=mealName).count()

        return count

    class Meta:
        """Meta definition for Meal."""

        verbose_name = 'Meal'
        verbose_name_plural = 'Meals'

    def __str__(self):
        """Unicode representation of Meal."""
        return self.name


class MealRating(models.Model):
    """Model definition for MealRating."""

    meal = models.ForeignKey(Meal, verbose_name="Meal", on_delete=models.CASCADE)
    rating = models.FloatField("Ratings")
    dateOfRating =models.DateTimeField("Create", auto_now_add=True)

    class Meta:
        """Meta definition for MealRating."""

        verbose_name = 'MealRating'
        verbose_name_plural = 'MealRatings'
