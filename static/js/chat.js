$(function(){

    console.log(user, room_id)

    var url = 'ws://' + window.location.host + '/ws/room/' + room_id + '/'
    console.log(url)

    var chatSocket = new WebSocket(url)
    // Definimos un tiempo de desconexión de 5 minutos (en milisegundos)
    chatSocket.setMaxIdleTime(300000)
    console.log(chatSocket)

    chatSocket.onopen = function(e){
        console.log('WEBSOCKET ABIERTO')
    }

    chatSocket.onclose = function(e){
        console.log('WEBSOCKET CERRADO')
    }

    document.querySelector('#btnMessage').addEventListener('click', sendMessage)
    document.querySelector('#inputMessage').addEventListener('keypress', function(e){
        if(e.keyCode == 13){
            sendMessage()
        }
    })

    function sendMessage(){
        var message = document.querySelector('#inputMessage')

        if(message.value.trim() !== ''){
            loadMessageHTML(message.value.trim())
            message.value = ''
        } else {
            console.log('Envió un mensaje vacío')
        }
    }

    function loadMessageHTML(m){
        document.querySelector('#boxMessages').innerHTML +=
        `
        <div class="alert alert-primary" role="alert">
            ${m}
            <div>
                <small class="fst-italic fw-bold">${user}</small>
                <small class="float-end">2023-12-27 08:33</small>
            </div>
        </div>
        `
    }

})








