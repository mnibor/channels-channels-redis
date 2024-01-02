window.onload = function(){
    document.querySelector('#btnMessage').addEventListener('click', sendMessage)
    document.querySelector('#inputMessage').addEventListener('keypress', function(e){
        if(e.keyCode == 13){
            sendMessage()
        }
    })

    function sendMessage(){
        var message = document.querySelector('#inputMessage')

        loadMessageHTML(message.value.trim())

        if(message.value.trim() !== ''){
            message.value = ''
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
}
