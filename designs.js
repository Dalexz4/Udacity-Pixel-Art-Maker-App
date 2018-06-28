// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (event) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);

});

// Creating table rows and table data
function makeGrid(height, width) {
// remove current grid if one exists
    $("tr").remove();
for (var i = 1; i <= height; i++) {
       $("#pixelCanvas").append("<tr></tr>");
           for (var j = 0; j < width; j++) {
             $('tr:last-child').append('<td></td>');
             $('td').attr("class", 'color');
           }
}

 // Selecting color input
// Adding color to table data
// When table data is clicked by a user, change color of table data

$('.color').click(function(event){
        var paint = $('#colorPicker').val();
        $(event.target).css('background-color', paint);
    });

}



