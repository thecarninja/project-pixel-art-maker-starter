function makeGrid() {
	let htmlTableCol, htmlTableRowBegin, htmlTableRowEnd, newTable;
	htmlTableRowBegin = '<tr>';
	htmlTableRowEnd = '</tr>';
	htmlTableCol = "<td></td>";
	newTable = "";

	$("#pixelCanvas").empty(); //empties canvas

	for (let i = 0; i < newHeight; i++){  // creates table and adds to new table variable
		newTable = newTable + htmlTableRowBegin;
		for (let x = 0; x < newWidth; x++) { 
			newTable = newTable + htmlTableCol;
		}
		newTable = newTable + htmlTableRowEnd;
	}
	$("#pixelCanvas").append(newTable); //appends complete table
}

let submitButton, newHeight, newWidth, color;
submitButton = $("#sizePicker").children().last();
newHeight = $("#inputHeight").val();
newWidth = $("#inputWidth").val();

$(submitButton).on("click", function(evt){ //submit button starts makeGrid function
	evt.preventDefault();  
	makeGrid();
});

$("#sizePicker").change(function(){ // monitors input text fields and assigns height and width
	newHeight = $("#inputHeight").val();
	newWidth = $("#inputWidth").val();
});

color = "#1F2DDF";
$("#colorPicker").change(function(){ //monitors color changes and assigns to color variable
	color = $(this).val();
});

$("#pixelCanvas").on("click", "td", function(){ //assigns color to table cell
	$(this).css("background-color", color);
});