function makeGrid(height, width) {
	let htmlTableCol, htmlTableRow, loc;
	htmlTableRow = '<tr id="row"></tr>';
	htmlTableCol = "<td></td>";
	
	for (let i = 0; i < height; i++){ 
		$("#pixelCanvas").append(htmlTableRow);

		for (let x = 0; x < width; x++) { 
			loc = $("#pixelCanvas").children().last();
			$(loc).append(htmlTableCol);
		}
	}
}

let submitButton, newHeight, newWidth;
submitButton = $("#sizePicker").children().last();
newHeight = $("#inputHeight").attr("min");
newWidth = $("#inputWidth").attr("min");

$(submitButton).on("click", function(evt){ //submit event sends height and width to makeGrid
	evt.preventDefault();  
	makeGrid(newHeight, newWidth);
});

$("#sizePicker").change(function(){ // monitors input text fields and assigns height and width
	newHeight = $("#inputHeight").val();
	newWidth = $("#inputWidth").val();
});

//monitor color choice
//get value
//submit button needs to refresh canvas
//monitor table for click and apply color value
let color = "#1F2DDF";
$("#colorPicker").change(function(){
	color = $(this).val();
});