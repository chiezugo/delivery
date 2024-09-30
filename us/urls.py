from django.urls import path

from .views import (
    RegisterView,
    LoginView,
    logout_view,
    detail_view,
    international_view,
    domestic_view,
    forwarding_view,
    consultaion_view,
    household_view,
    commercial_view,
    air_freight_carrier_view,
    ocean_freight_view,
    road_view,
    soc_view,
    imp_view,
    implong_view,
    logistic_view,
    contact_view,
    detail_create_view,

)

app_name = 'us'
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', logout_view, name='logout'),
    path('detail-view/', detail_view, name='detail'),
    path('international-freight', international_view, name='international'),
    path('domestic-freight/', domestic_view, name='domestic'),
    path('freight-forwarding/', forwarding_view, name='forwarding'),
    path('freight-consultation/', consultaion_view, name='consultation'),
    path('household-goods/', household_view, name='household'),
    path('commercial-goods/', commercial_view, name='commercial'),
    path('air-freight-carrier/', air_freight_carrier_view, name='air-freight'),
    path('ocean-freight-forwarding/', ocean_freight_view, name='ocean-freight'),
    path('road-freight/', road_view, name='road-freight'),
    path('soc-movements/', soc_view, name='soc'),
    path('import-export/', imp_view, name='imp'),
    path('importers-logistic-reps/', implong_view, name='importers-rep'),
    path('logistic/', logistic_view, name='logistic'),
    path('contact/', contact_view, name='contact'),
    path('create/', detail_create_view, name='create'),

]
