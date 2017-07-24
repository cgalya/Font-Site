
var modal = $("#myModal");
var input = $("#input");
var fontSize = 50;



modal.css("display", "block");
$("#return").hide();
$("input").focus();

$("input").keyup(function(){  
   if (event.keyCode == 13) {
   	 $("h2").html(this.value);
   	 modal.slideUp("fast");
   	 $("#input").val($(this).val());
   }
});


		for (var i = 0; i < fontList.items.length; i++) {
		var fontLink = fontList.items[i].files.regular
		var fontFamily = fontList.items[i].family
		$("head").prepend("<style type = text/css>" + "@font-face {" + "font-family:" + fontFamily + ";" + "src: url(" + fontLink + ");}" + "</style>");
		$("<div class='col-lg-3 col-md-4 col-xs-6 fontBox'> <div class='thumbnail'><h2>font</h2><p>" + fontFamily + "</p></div></div>").appendTo($("#first")).css("font-family", fontFamily);
		}





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
	$("#return").show();
	$(".selected").removeClass("selected");
	$("#select").hide();
});

$("#return").click(function() {	
	$(".fontBox").fadeIn();
	$("#return").hide();
	$("#select").show();
});


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
	var text = $(".fontBox .thumbnail h2");
	var textP = $(".fontBox p");
	text.css("font-size", "50px");
	textP.css("font-size", "15px");
});

$("#plus").click(function() {
	var text = $(".fontBox .thumbnail h2");
	var textP = $(".fontBox p");
	fontSize += 10;
	text.css("font-size", fontSize + "px");
});

$("#minus").click(function() {
	var text = $(".fontBox .thumbnail h2");
	var textP = $(".fontBox p");
	fontSize -= 10;
	text.css("font-size", fontSize + "px");
});
