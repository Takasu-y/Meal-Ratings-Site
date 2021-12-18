from django import forms
from django.forms import ModelForm, Textarea, TextInput
from .models import Meal, MealRating


class MealFrom(ModelForm):
    """MealFrom definition."""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field in self.fields.values():
            field.widget.attrs['class'] = 'form-control mb-4'
    class Meta:
        model = Meal
        fields = ["name", "description", "imageUrl", "countryOfOrigin", "tags"]
        widgets = {
            "description": Textarea(attrs={'rows':2, 'cols':15}),
        }


class MealRatingForm(ModelForm):
    """MealRating definition."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # self.fields["rating"].widget.attrs['class'] = 'p'


    class Meta:
        model = MealRating
        fields = ["rating"]
        widgets = {
            "rating": TextInput(attrs={
                "type": "range",
                "max": 5,
                "min": 0,
                "step": 0.5
            })
        }


# class TagSearchForm(forms.Form):
#     """TagSearchForm definition."""

#     tags = forms.MultipleChoiceField()
