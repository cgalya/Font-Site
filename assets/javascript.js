var text = "font";
var modal = $("#myModal");
var input = $("#input");

modal.css("display", "block");
$("#return").hide();
$("input").focus();

$("input").keyup(function(){  
   if (event.keyCode == 13) {
   	 $("h2").html(this.value);
   	 modal.slideUp("fast");
   }
});


$.ajax({
	url: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDe2mtTrzmBtUsVpmDTImfKCwR-bSnV2Bc",
	method: "GET"
	}).done(function(response) {
		for (var i = 0; i < response.items.length; i++) {
		var fontLink = response.items[i].files.regular
		var fontFamily = response.items[i].family
		$("head").prepend("<style type = text/css>" + "@font-face {" + "font-family:" + fontFamily + ";" + "src: url(" + fontLink + ");}" + "</style>");
		$("<div class='col-lg-3 col-md-4 col-xs-6 fontBox'> <div class='thumbnail'><h2>font</h2><p>" + fontFamily + "</p></div></div>").appendTo($("#first")).css("font-family", fontFamily);
		}
	fontClicks();
});


function fontClicks() {

$("#lowercase").click(function() {
	var text = $(".thumbnail");
	text.css("text-transform", "none");
	text.html(text.html().toLowerCase());
});

$("#uppercase").click(function() {
	var text = $(".thumbnail");
	text.html(text.html().toUpperCase());
});

$("#mixedcase").click(function() {
	var text = $(".thumbnail");
	text.css("text-transform", "capitalize");
	text.html(text.html().toLowerCase());
});

$(".fontBox").click(function() {
	$(this).toggleClass("selected");
})

$("#select").click(function() {
	$(".fontBox").fadeOut();
	$(".selected").fadeIn();
	$("#select").hide();
	$("#return").show();
	$(".selected").removeClass("selected");
});

$("#return").click(function() {	
	$(".fontBox").fadeIn();
	$("#select").show();
	$("#return").hide();
})
}

$("#colorOne").spectrum({
    color: "#f00",
    change: function(color) {
    	var colorHex = color.toHexString();
    	var text = $(".thumbnail");
    	text.css("color", colorHex);
    }
});

$("#colorTwo").spectrum({
    color: "#f00",
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
});

