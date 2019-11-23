const m = moment();
var todaysDate = $("#currentDay");

todaysDate.text(m.format('LL'));
console.log(m.format('LL'));

var containerDiv = $(".container");
var table = $("<table>");
table.attr("class", "table table-responsive time-block");

var hours = [
	"8am",
	"9am",
	"10am",
	"11am",
	"12am",
	"1pm",
	"2pm",
	"3pm",
	"4pm",
	"5pm"
];

function createTable() {
	table.appendTo(containerDiv);
	// tableRow.appendTo(table);
	// hourTD.appendTo(tableRow);
	// // hourTD.text(hours[i]);
	// textArea.appendTo(tableRow);
	// saveTD.appendTo(tableRow);
	// icon.appendTo(saveTD);
}

createTable();
for (i = 0; i < hours.length; i++) {
	$(".time-block").append(
		`<tr class='row'><td class='hour col-md-2'>${hours[i]}</td><td class="col-md"><textarea type="text" id=${hours[i]}></textarea></td><td class='saveBtn btn col-md-1'><i class='far fa-save fa-2x'></td></tr>`
	);
}

// function to change bg of textarea's
	// how do I set the textarea's to know what the current time is?
	// if hour is past, bg should be grayed out, or class of .past
	// if hour is current, bg should be red, or class .present
	// if hour is future, bg should be green, or class .future

// .click on save buttons to save what is written in the textarea of that row into localStorage
	// need to call id of textarea from the matching hour for each button
	// need to create different keys for each hour?
	// textarea should getItem from localStorage once it has been set




// function bg() {
// 	if ()
// };

// $("#submit").on("click", function(e) {
// 	e.preventDefault();
// 	var mytext = $("#myText").val();
// 	console.log(mytext);
//   });




// var tableRow = $("<tr>");
// tableRow.attr("class", "row");

// var hourTD = $("<td>");
// hourTD.attr("class", "hour");

// var textArea = $("<textarea>");

// var saveTD = $("<td>");
// saveTD.attr("class", "saveBtn");

// var icon = $("<i>");
// icon.attr("class", "far fa-save");