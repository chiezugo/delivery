from builtins import super

from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import ReadOnlyPasswordHashField

from .models import Contact, Detail

User = get_user_model()


class RegisterForm(forms.ModelForm):
    password1 = forms.CharField(label='password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = (
            'email',
            'full_name'
        )

    def clean_password(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")

        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        user = super(RegisterForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserAdminChangeForm(forms.ModelForm):
    """a form for updating users. includes all the fields on the user, but replaces the password field with admin's password hash display """
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('email', 'full_name', 'password', 'active', 'admin')

    def clean_password(self):
        return self.initial["password"]


class GuestForm(forms.Form):
    email = forms.EmailField()


class LoginForm(forms.Form):
    email = forms.EmailField(widget=forms.TextInput(attrs={
        'placeholder': 'email@',
        'class': 'form-control'

    }))
    password = forms.CharField(widget=forms.PasswordInput(attrs={
        'class': 'form-control',
        'placeholder': 'INSERT PASSWORD'
    }))


class DetailForm(forms.Form):
    tracking_number = forms.CharField(widget=forms.NumberInput(attrs={
        'placeholder': 'place your tacking number',
        'class': 'form-control'

    }))


class ContactForm(forms.ModelForm):
    message = forms.CharField(widget=forms.Textarea(attrs={
        'rows': 3,
        'placeholder': 'Tell us your problems',
        'class': 'form-control'
    }))
    email = forms.EmailField(widget=forms.TextInput(attrs={
        'label': 'name',
        'placeholder': 'email@',
        'class': 'form-control'}))
    full_name = forms.CharField(widget=forms.TextInput(attrs={
        'label': 'name',
        'placeholder': 'FULL NAME',
        'class': 'form-control'}))
    subject = forms.CharField(widget=forms.TextInput(attrs={
        'label': 'subject',
        'placeholder': 'subject',
        'class': 'form-control'}))
    phone_number = forms.CharField(widget=forms.NumberInput(attrs={
        'placeholder': 'your phone number',
        'class': 'form-control'
    }))

    class Meta:
        model = Contact
        fields = ['full_name', 'email', 'message', 'phone_number', 'subject']


class DetailCreateForm(forms.ModelForm):

    class Meta:
        model = Detail
        fields = [
            'delivery_date',
            'destination',
            'take_off_point',
            'sender_detail',
            'receiver_detail',
            'shipment_type',
            'weight',
            'content',
            'quantity',
            'sender_name',
            'receiver_name',
            'sender_country_flag',
            'receiver_country_flag',

        ]
