# Register your models here.
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group

from .forms import RegisterForm, UserAdminChangeForm
from .models import Detail, Contact

User = get_user_model()


def make_approval(modeladmin, request, queryset):
    queryset.update(pending=False, seen=True)


make_approval.short_description = 'Update pending messages to seen'


class ContactAdmin(admin.ModelAdmin):
    list_display = [
        'full_name',
        'email',
        'phone_number',
        'message',
        'subject',
        'pending',
        'seen',
        'date',

    ]
    list_display_links = [
        'email',
    ]

    list_filter = [
        'date',
        'pending',

    ]
    search_fields = [
        'email',
        'date',
        'pending',
    ]
    actions = [make_approval]


def make_approval(modeladmin, request, queryset):
    queryset.update(pending=False, processed=True)


make_approval.short_description = 'Update pending shipments'


class DetailAdmin(admin.ModelAdmin):
    list_display = [
        'ship_date',
        'tracking_number',
        'delivery_date',
        'destination',
        'take_off_point',
        'sender_detail',
        'receiver_detail',
        'shipment_type',
        'weight',
        'content',
        'quantity',
        'sender_country_flag',
        'receiver_country_flag',
        'service_type',
        'status',
        'pending',
        'processed'

    ]
    list_display_links = [
        'tracking_number',
    ]

    list_filter = [
        'ship_date',
        'pending',

    ]
    search_fields = [
        'tracking_number',
        'ship_date',
        'pending',
    ]
    actions = [make_approval]


class UserAdmin(BaseUserAdmin):
    form = UserAdminChangeForm  # update view
    add_form = RegisterForm  # create view
    list_display = ('email', 'full_name', 'admin', 'active', 'staff',)
    list_filter = ('admin', 'active', 'staff')
    fieldsets = (
        (None, {'fields': ('full_name', 'email', 'password')}),
        # ('FULL NAME', {'fields': ('full_name',)}),
        ('permissions', {'fields': ('admin', 'active', 'staff')})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')
        }),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()


admin.site.register(Detail, DetailAdmin)
admin.site.unregister(Group)
# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Contact, ContactAdmin)
