// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

}

let submitButton, newHeight, newWidth;
submitButton = $("#sizePicker").children().last();
newHeight = $("#inputHeight").attr("min");
newWidth = $("#inputWidth").attr("min");

$(submitButton).on("click", function(evt){ //waits for submit button click
	evt.preventDefault();  
	makeGrid();
});

$("#sizePicker").change(function(){ // monitors input text fields and assigns height and width
	newHeight = $("#inputHeight").val();
	newWidth = $("#inputWidth").val();
});

