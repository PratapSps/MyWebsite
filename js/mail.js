$(function($){

	$("form").submit(function(event) {
		$('#image-loader').show()
		event.preventDefault();

		$.ajax({
	    url: "https://formspree.io/singh.survya@gmail.com",
	    method: "POST",
	    data: {
	    	name: $("#name").val(),
	    	email: $("#email").val(),
	    	subject: $("#subject").val(),
	    	message: $("#message").val()
	    },
	    dataType: "json"
		}).done(function(){
			$("#name").val("");
			$("#email").val("");
			$("#subject").val("");
			$("#message").val("");
			
			document.getElementById("success").innerHTML="Your message was sent, thank you!";
			$('#image-loader').hide();
			// alert("Message Sent!");
		}).fail(function(){
			document.getElementById("failed").innerHTML="Failed to sent email. Please try later.";
			$('#image-loader').hide();
		});
	});

}) ;