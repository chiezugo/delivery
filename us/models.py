import random
import string
# Create your models here.
from builtins import ValueError

from PIL import Image
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager,
)
from django.db import models


# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, full_name, password=None, is_active=True, is_staff=False, is_admin=False):
        if not email:
            raise ValueError("Users must have an email address")
        if not password:
            raise ValueError("Users must have a password")
        if not full_name:
            raise ValueError("Users must have surname and other names")
        user_obj = self.model(
            email=self.normalize_email(email),
            full_name=full_name
        )
        user_obj.set_password(password)
        user_obj.staff = is_staff
        user_obj.active = is_active
        user_obj.admin = is_admin
        user_obj.save(using=self._db)
        return user_obj

    def create_staff_user(self, full_name, email, password=None):
        user = self.create_user(
            email,
            full_name,
            password=password,

            is_staff=True
        )
        return user

    def create_superuser(self, full_name, email, password=None):
        user = self.create_user(
            email,
            full_name,
            password=password,

            is_staff=True,
            is_admin=True
        )
        return user


class User(AbstractBaseUser):
    full_name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, unique=True)
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    objects = UserManager()

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.full_name

    def get_short_name(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_active(self):
        return self.active

    @property
    def is_admin(self):
        return self.admin


def generate_activationcode(size=12, chars=string.digits):
    ref_id = ''.join(random.choice(chars) for x in range(size))
    try:
        id_exist = User.objects.get(user_ref_id=ref_id)
        if id_exist.exits():
            generate_activationcode(size=8, chars=string.digits)
    except:
        return ''.join(random.choice(chars) for x in range(size))


class Detail(models.Model):
    ship_date = models.DateTimeField(auto_now_add=True)
    tracking_number = models.CharField(max_length=255, default=generate_activationcode, editable=False)
    delivery_date = models.DateTimeField()
    destination = models.CharField(max_length=255, )
    take_off_point = models.CharField(max_length=255, )
    sender_detail = models.CharField(max_length=255, )
    receiver_detail = models.CharField(max_length=255, )
    shipment_type = models.CharField(max_length=255, default='Travel Box')
    weight = models.CharField(max_length=255, default='20.kg')
    content = models.CharField(max_length=255, default='Family Treasure')
    quantity = models.IntegerField(default=1)
    sender_name = models.CharField(max_length=255, )
    receiver_name = models.CharField(max_length=255, )
    sender_country_flag = models.ImageField(upload_to='picture', max_length=255, null=True, blank=True)
    receiver_country_flag = models.ImageField(upload_to='picture', max_length=255, null=True, blank=True)
    service_type = models.CharField(max_length=255, default=' Express Delivery')
    status = models.CharField(max_length=255, default='Dispatched')
    pending = models.BooleanField(default=True)
    processed = models.BooleanField(default=False)

    def __str__(self):
        return self.tracking_number

    def save(self, *args, **kwargs):
        super(Detail, self).save(*args, **kwargs)
        mag = Image.open(self.sender_country_flag.path)
        imag = Image.open(self.receiver_country_flag.path)
        if imag.width > 50 or imag.height > 50 and mag.width > 50 or mag.height > 50:
            output_size = (50, 50)
            imag.thumbnail(output_size)
            mag.thumbnail(output_size)
            imag.save(self.receiver_country_flag.path)
            mag.save(self.sender_country_flag.path)


class Contact(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    full_name = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    message = models.TextField()
    pending = models.BooleanField(default=True)
    seen = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True, null=False)

    def __str__(self):
        return self.email
