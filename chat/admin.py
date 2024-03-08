from django.contrib import admin
from .models import Room, Message

class MessageAdmin(admin.ModelAdmin):
    list_display = ('user', 'room', 'message', 'timestamp')
    list_filter = ('room', 'user')

admin.site.register(Message, MessageAdmin)
admin.site.register(Room)

