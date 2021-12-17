from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from .views import UserCreateView

app_name='accounts'

urlpatterns = [
    path('login/', LoginView.as_view(
        template_name= 'accounts/login.html',
        redirect_authenticated_user=True
    ), name="login"),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('signup/', UserCreateView.as_view(), name='signup')

]
