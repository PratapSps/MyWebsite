(function validateForm(){

	("mailform").submit(function(event) {

		event.preventDefault();

		validateForm.ajax({
			url:"https://formspree.io/singh.survya@gmail.com",
			method:"POST",
	    data: {
	    	name: validateForm("#name").val(),
	    	email: validateForm("#email").val(),
	    	subject: validateForm("#subject").val(),
	    	message: validateForm("#message").val()
	    },
	    dataType: "json"
			
		});
	});

}) ;