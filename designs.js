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
	console.log("Height: " + newHeight);
	console.log("Width: " + newWidth);
});

$("#sizePicker").change(function(){ // monitors input text fields and assigns height and width
	newHeight = $("#inputHeight").val();
	newWidth = $("#inputWidth").val();
	console.log("Height or Width changed");
	console.log(newHeight + " x " + newWidth);
});

