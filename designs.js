// Select size input
var height, width, paint;
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
    
// Function to Paint td with color and also remove color
// Adding and removing color to table data
// When table data is clicked by a user, add background color or revert change to table data
    
$('td').click(function (event){
    var paint = $('#colorPicker').val();
    if($(this).attr('style')){
      $(this).removeAttr('style');
    }
    else {
      $(this).attr('style', 'background-color:' + paint);
    };
  });
}



