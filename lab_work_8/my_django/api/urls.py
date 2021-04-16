from django.urls import path
from . import views
urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>', views.product_one),
    path('categories/', views.categories_list),
    path('categories/<int:id>', views.category_one),
]
