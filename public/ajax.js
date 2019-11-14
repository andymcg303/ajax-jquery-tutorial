// $.get('/todos', (data) => {
//     // alert("what a plonker");
// });

// $('form').submit(function(e) {
//     e.preventDefault();
//     let formData = $(this).serialize();
//     $.post('/todos', formData), function(data){
//         console.log(data);
//     };
// });

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

$('form').submit(function(e) {
    e.preventDefault();
    let formAction =$(this).attr('action');
    $.ajax({
        url: formAction,
        type: 'DELETE',
        success: (data) => {
            debugger;
        }
    });
});