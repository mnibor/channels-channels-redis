import json
from channels.generic.websocket import WebsocketConsumer

class ChatConsumer(WebsocketConsumer):

    def connect(self):
        print('Conexión establecida')
        self.accept()

    def disconnect(self, close_code):
        print('Se ha desconectado')
        pass

    def receive(self, text_data):
        print('Mensaje recibido')

        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        self.send(text_data=json.dumps({
            'message':message
        }))
