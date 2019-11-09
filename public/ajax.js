$.get('/todos', (data) => {
    // alert("what a plonker");
});

$('form').submit(function(e) {
    debugger;
    e.preventDefault();
    let formData = $(this).serialize();
    $.post('/todos', formData), function(data){
        console.log(data);
    };
});