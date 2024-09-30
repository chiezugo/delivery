import random
import string
from builtins import super

from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url
from django.views.generic import CreateView, FormView

from .forms import RegisterForm, LoginForm, DetailForm, ContactForm, DetailCreateForm
from .models import Detail


# Create your views here.


def create_ref_code():
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=20))


class RegisterView(CreateView):
    form_class = RegisterForm
    template_name = 'register.html'
    success_url = '/us/login'


class LoginView(FormView):
    form_class = LoginForm
    template_name = '/login.html'

    def form_valid(self, form, *args, **kwargs):
        request = self.request
        next_ = request.GET.get('next')
        next_post = request.POST.get('next')
        redirect_path = next_ or next_post or None
        email = form.cleaned_data.get("email")
        password = form.cleaned_data.get("password")
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            try:
                del request.session['quest_email_id']
            except:
                pass
            if is_safe_url(redirect_path, request.get_host()):
                messages.info(self.request, 'put a valid email')
                return redirect(redirect_path)
            else:
                if request.user.is_admin or request.user.is_staff:
                    return redirect('/')
                else:
                    return redirect('/')
        return super(LoginView, self).form_invalid(form)


def logout_view(request):
    logout(request)
    return redirect('us:login')
    # Redirect to a success page.


def detail_view(request, *args, **kwargs):
    if request.method == "POST":
        searched = request.POST['tracking_number']
        tracking = Detail.objects.filter(tracking_number__iexact=searched)
        if tracking:
            context = {
                'searched': searched,
                'tracking': tracking
            }
            return render(request, "details.html", context)
        messages.warning(request, 'incorrect tracking number')
        return redirect("/")
    else:
        return redirect("/")


def home_view(request, *args, **kwargs):
    form = DetailForm()
    context = {
        'forms': form,
        'form': ContactForm
    }
    return render(request, "home.html", context)


def about_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "about.html", context)


def international_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "intfreit.html", context)


def domestic_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "domestic.html", context)


def forwarding_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "freightfarwd.html", context)


def consultaion_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "consultaion.html", context)


def household_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "household.html", context)


def commercial_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "commercial.html", context)


def air_freight_carrier_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "airfreight.html", context)


def ocean_freight_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "ocean.html", context)


def road_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "road.html", context)


def soc_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "soc.html", context)


def imp_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "imp.html", context)


def implong_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "importlong.html", context)


def logistic_view(request, *args, **kwargs):
    context = {
    }
    return render(request, "logistic.html", context)


def contact_view(request, *args, **kwargs):
    context = {
        'form': ContactForm
    }
    return render(request, "contact.html", context)


def contact_snippet_view(request, *args, **kwargs):
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST or None)
        if form.is_valid():
            form.save()
            return redirect("/")
        form = ContactForm()
    context = {
        'form': form
    }
    return render(request, "contact.html", context)


def detail_create_view(request):
    form = DetailCreateForm(request.POST or None, request.FILES or None)
    if form.is_valid():
        form.save()
        form = DetailCreateForm()
    context = {
        'form': form,
    }
    return render(request, 'detail-create.html', context)
