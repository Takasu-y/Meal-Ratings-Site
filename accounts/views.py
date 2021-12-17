from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView

from django.urls import reverse_lazy


class UserCreateView(CreateView):
    form_class = UserCreationForm
    template_name = "accounts/signup.html"

    def form_valid(self, form):
        user =form.save()
        login(self.request, user)
        self.object = user
        self.success_url = reverse_lazy('meal:index')

        return super().form_valid(form)

