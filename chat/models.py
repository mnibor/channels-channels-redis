from django.db import models
from django.contrib.auth.models import User

class Room(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='Nombre')
    users = models.ManyToManyField(User, related_name='rooms_joined', blank=True)

    def __str__(self):
        return self.name
