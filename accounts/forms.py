from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class  SignUpForm(UserCreationForm):
    first_name = forms.CharField(
        max_length=30,
        label="名前"
    )
    last_name = forms.CharField(
        max_length=30,
        help_text= "you must input Last name",
        label="苗字"
    )
    email = forms.EmailField(
        max_length=254,
        help_text= "Please enter a valid email address.",
        label="Email"
    )

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "email", "password1", "password2", )