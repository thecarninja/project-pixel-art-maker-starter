function makeGrid(height, width) {
	let htmlTableCol, htmlTableRow, loc, addColumns;
	htmlTableRow = '<tr id="row"></tr>';
	htmlTableCol = "<td></td>";
	
	for (let i = 0; i < height; i++){ 
		addColumns = "";
		$("#pixelCanvas").append(htmlTableRow);
		for (let x = 0; x < width; x++) { 
			addColumns = addColumns + htmlTableCol;
		}
		loc = $("#pixelCanvas").children().last();
		$(loc).append(addColumns);
	}
}

let submitButton, newHeight, newWidth;
submitButton = $("#sizePicker").children().last();
newHeight = $("#inputHeight").val();
newWidth = $("#inputWidth").val();

$(submitButton).on("click", function(evt){ //submit event sends height and width to makeGrid
	evt.preventDefault();  
	// window.location.reload();
	makeGrid(newHeight, newWidth);
});

$("#sizePicker").change(function(){ // monitors input text fields and assigns height and width
	newHeight = $("#inputHeight").val();
	newWidth = $("#inputWidth").val();
});

let color = "#1F2DDF";
$("#colorPicker").change(function(){ //monitors color changes and assigns to color variable
	color = $(this).val();
});

$("#pixelCanvas").on("click", "td", function(){ //assigns color to table cell
	$(this).css("background-color", color);
});