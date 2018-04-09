function makeGrid(height, width) {
	let htmlTableCol, htmlTableRowBegin, htmlTableRowEnd, newTable;
	htmlTableRowBegin = '<tr>';
	htmlTableRowEnd = '</tr>';
	htmlTableCol = "<td></td>";
	newTable = "";

	$("#pixelCanvas").empty(); //empties canvas

	for (let i = 0; i < height; i++){  // creates table and adds to new table variable
		newTable = newTable + htmlTableRowBegin;
		for (let x = 0; x < width; x++) { 
			newTable = newTable + htmlTableCol;
		}
		newTable = newTable + htmlTableRowEnd;
	}
	$("#pixelCanvas").append(newTable); //appends complete table
}

let submitButton, newHeight, newWidth;
submitButton = $("#sizePicker").children().last();
newHeight = $("#inputHeight").val();
newWidth = $("#inputWidth").val();

$(submitButton).on("click", function(evt){ //submit event sends height and width to makeGrid
	evt.preventDefault();  
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