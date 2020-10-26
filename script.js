$(document).ready(function(){

	$(".about").hide();

	$(".about-button").hover(function(){
		$(this).append("click ");
	});

	$(".about-button").click(function(){
		$(this).toggle(function(){
			$(".about").show(1600);
		});
	});

	$(".about").click(function(){
		$(this).hide(function(){
			$(".about-button").fadeIn(1200);
		});
	});

	$("#spinner").hide();

	var visible = false;

	if ($("#spinner-mobile").is(":visible")) {

		console.log("spinner-mobile is visible");

	} else {

		console.log("spinner-mobile is hidden");

		$(document).mouseenter(function(){

		if (visible == true) {
			$("#spinner").hover(function(){
				$("#spinner").fadeOut(2000);
			});
			visible = false;
			console.log("if v is "+visible);
		} else {
			$("#spinner").fadeIn(5000);
			visible = true;
			console.log("else v is "+visible);
		}

	});


	}
	
});
