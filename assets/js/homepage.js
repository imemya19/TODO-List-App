var A = document.getElementById('head')

A.style.color = "green";


//removing temporarily from screen but not removing from database
$('#del-task-btn').on('click', function() {
    $('.checkbox input:checked').parent().remove();
});