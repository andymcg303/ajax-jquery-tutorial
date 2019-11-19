// $.get('/todos', (data) => {
//     // alert("what a plonker");
// });

$('#new-todo-form').submit(function(e){
    e.preventDefault();
    let toDoItem = $(this).serialize();
    $.post('/todos', toDoItem, function(data){
        $('#todo-list').append(
            `
            <li class="list-group-item">
                <span class="lead">
                    ${data.text}
                </span>
                <div class="pull-right">
                    <a href="/todos/${data._id}/edit" class="btn btn-sm btn-warning">Edit</a>
                    <form style="display: inline" method="POST" action="/todos/${data._id}">
                        <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                    </form>
                </div>
                <div class="clearfix"></div>
            </li>            
            `        
        );
        $('#new-todo-form').find('.form-control').val('');
    });
});

$('#new-item-button').click(function(){
    $('#new-todo-form').toggle();
});

// $('form').submit(function(e) {
//     e.preventDefault();
//     let formData = $(this).serialize();
//     let formAction =$(this).attr('action');
//     $.ajax({
//         url: formAction,
//         data: formData,
//         type: 'PUT',
//         success: (data) => {
//             console.log(data);
//         }
//     });
// });

// $('form').submit(function(e) {
//     e.preventDefault();
//     let formAction =$(this).attr('action');
//     $.ajax({
//         url: formAction,
//         type: 'DELETE',
//         success: (data) => {
//             debugger;
//         }
//     });
// });