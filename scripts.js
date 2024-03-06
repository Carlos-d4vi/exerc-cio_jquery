$(document).ready(function(){
    
    
    $('form').submit(function(e){
        e.preventDefault()

        const TaskInput = $('#task').val()

        const newTask = $(`<li class = "taskLi">${TaskInput}</li>`)

        $('.taskLi').fadeIn('slow')
        
        $('ul').append(newTask)

        $(newTask).on('click', function(){
            $(this).toggleClass('addLine-through')
        })
    })
})