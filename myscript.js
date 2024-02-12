$(document).ready(function() {

	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});

	$("#button1").click(function() {
		$("#a1").toggle();
	});
	$("#button2").click(function() {
		$("#a2").toggle();
	});
	$("#button3").click(function() {
		$("#a3").toggle();
	});
		$("#button4").click(function() {
		$("#a4").toggle();
	});
		$("#button5").click(function() {
		$("#a5").toggle();
	});
		$("#button6").click(function() {
		$("#a6").toggle();
	});
	$("#button7").click(function() {
		$("#a7").toggle();
	});
	
	$(window).on( "resize", function(){
		$("*").toggle();
	});
	
		  

		
});
