function addToList(message) {
    var $p = $("<p>")
    $p.append(`${message.username}: ${message.text}`)
    $("div").append($p)

}
$.get("http://tiy-orl-proxy.herokuapp.com/messages")
    .then(function(response) {
        var messages = response.messages
        messages.forEach(addToList)
    })
$("form").submit(function(event) {
    event.preventDefault()
    var theName = $('input').val()
    var theText = $('#username').val()
    $.post("http://tiy-orl-proxy.herokuapp.com/messages", {
            message: {
                username: theText,
                text: theName
            }
        })
        .then(response => {
            $('#text').val('')
            addToList2(response)
        })
})

function addToList2(message) {
    var $p = $("<p>")
    $p.append(`${message.message.username}: ${message.message.text}`)
    $("div").append($p)

}
var refresh = setInterval(function refresh() {
    $('div').text('')
    $.get("http://tiy-orl-proxy.herokuapp.com/messages")
        .then(function(response) {
            var messages = response.messages
            messages.forEach(addToList)
        })
}, 100000);


function refresh() {
    $('div').text('')
    $.get("http://tiy-orl-proxy.herokuapp.com/messages")
        .then(function(response) {
            var messages = response.messages
            messages.forEach(addToList)
        })
}


$("#username").val(getSavedValue("username"));

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue(v) {
    if (localStorage.getItem(v) === null) {
        return "";
    }
    return localStorage.getItem(v);
}
$('section').hide()
$(".fun").click(function() {
    $("section").fadeToggle(500);
});
