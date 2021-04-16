from django.db import models

class Product(models.Model):
    name = models.CharField('Product name', max_length=200)
    price = models.FloatField(default = 0)
    description = models.TextField('description')
    count = models.IntegerField(default = 0)
    is_active = models.BooleanField()
    def __str__(self):
        return self.name
    def json(self):
        return{
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'count': self.count,
            'is_active': self.is_active
        }
class Category(models.Model):
    category_name = models.CharField('Category name', max_length=200)
    def __str__(self):
        return self.category_name
    def json(self):
        return{
            'id': self.id,
            'name': self.category_name
        }