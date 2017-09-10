window.onload = function() { 
var modal = $("#myModal");
var input = $("#input");
var fontSize = 1.2;

$('body').flowtype({
 minimum   : 700,
 maximum   : 1200,
 minFont   : 12,
 maxFont   : 40,
 fontRatio : 30
});

modal.css("display", "block");
$("#return").hide();
$("#select").hide();
$("input").focus();
request("alpha");


$("input").keyup(function(){  
   if (event.keyCode == 13) {
   	 $("h2").html(this.value);
   	 modal.slideUp("fast");
   	 $("#input").val($(this).val());
   }
});

$("#navSubmit").click(function() {
	$("h2").html($("#input").val());
});

$("#menu").click(function() {
	$(".changeStyle").toggleClass("iconHide");
});


$(".dropdown-menu a").click(function() {
	request(this.dataset.value);
});

function request(sortWord) {
$.ajax({
	url: "https://www.googleapis.com/webfonts/v1/webfonts?sort=" + sortWord + "&key=AIzaSyDe2mtTrzmBtUsVpmDTImfKCwR-bSnV2Bc",
	method: "GET"
	}).done(function(response) {
		$("#first").empty();
		var userWord = $("input").val();
		for (var i = 0; i < response.items.length; i++) {
		var fontLink = response.items[i].files.regular
		var fontFamily = response.items[i].family
		$("head").prepend("<style type = text/css>" + "@font-face {" + "font-family:" + fontFamily + ";" + "src: url(" + fontLink + ");}" + "</style>");
		$("<div class='col-lg-3 col-md-4 col-xs-6 fontBox'> <div class='thumbnail'><h2 class='userWord'>" + userWord + "</h2><p>" + fontFamily + "</p></div></div>").appendTo($("#first")).css("font-family", fontFamily);
		}
		fontClicks();
	});
}

function fontClicks() {
$("#lowercase").click(function() {
	var text = $(".userWord");
	text.css("text-transform", "none");
	text.html(text.html().toLowerCase());
});

$("#uppercase").click(function() {
	var text = $(".userWord");
	text.html(text.html().toUpperCase());
});

$("#mixedcase").click(function() {
	var text = $(".userWord");
	text.css("text-transform", "capitalize");
	text.html(text.html().toLowerCase());
});

$(".fontBox").click(function() {
	$(this).toggleClass("selected");
	$("#select").fadeIn();
})

$("#select").click(function() {
	$(".fontBox").fadeOut();
	$(".selected").fadeIn();
	$("#return").fadeIn();
	$(".selected").removeClass("selected");
	$("#select").fadeOut();
});

$("#return").click(function() {	
	$(".fontBox").fadeIn();
	$("#return").fadeOut();
});


$("#colorOne").spectrum({
    color: "#f00",
    showAlpha: true,
    showPalette: true,
    showSelectionPalette: true,
    palette: [],
    change: function(color) {
    	var colorHex = color.toHexString();
    	var text = $(".thumbnail");
    	text.css("color", colorHex);
    }

});

$("#colorTwo").spectrum({
    color: "#f00",
    showAlpha: true,
    showPalette: true,
    showSelectionPalette: true,
    palette: [],
    change: function(color) {
    	var colorHex = color.toHexString();
    	var text = $(".thumbnail");
    	text.css("background", colorHex);
    }
});



$("#resetColor").click(function() {
	var text = $(".thumbnail");
	text.css("background", "#f8f7f7");
	text.css("color", "#000");
	var text = $(".fontBox .thumbnail h2");
	var textP = $(".fontBox p");
	text.css("font-size", "1.2em");
	textP.css("font-size", "0.5em");
});

$("#plus").click(function() {
	var text = $(".fontBox .thumbnail h2");
	var textP = $(".fontBox p");
	fontSize += 0.1;
	text.css("font-size", fontSize + "em");
});

$("#minus").click(function() {
	var text = $(".fontBox .thumbnail h2");
	var textP = $(".fontBox p");
	fontSize -= 0.1;
	text.css("font-size", fontSize + "em");
});

}
}