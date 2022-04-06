jQuery(function($){



    $('#my_form_email input, #my_form_email textarea').bind("keyup", function(event) {


			 var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
			 var mail = $('#my_form_email .email');
	

				 // if(mail.val().search(pattern) == 0){
		   //      	$('#submit_modal_err').css('display', "none");
		   //    		$('#submit_modal').css('display', "block");				 	
				 // }else{
		   //      	$('#submit_modal_err').css('display', "block");
		   //    		$('#submit_modal').css('display', "none");				 	
				 // }



        if (
        	($('#my_form_email .name').val()!='') &&
        	($('#my_form_email .company').val()!='') &&
        	($('#my_form_email .email').val()!='') &&
        	($('#my_form_email .phoneNumber').val()!='') &&
        	($('#my_form_email .message').val()!='') &&
        	(mail.val().search(pattern) == 0)
        ) {
        	$('#submit_modal_err').css('display', "none");
      		$('#submit_modal').css('display', "block");
      		$('#form_err').css('display', "none");
        }


    	if ($('#my_form_email .name').val()!='') {$('#my_form_email .name').css('border','none');}
    	if ($('#my_form_email .company').val()!='') {$('#my_form_email .company').css('border','none');}
    	if ($('#my_form_email .email').val()!='') {$('#my_form_email .email').css('border','none');}
    	if ($('#my_form_email .phoneNumber').val()!='') {$('#my_form_email .phoneNumber').css('border','none');}
    	if ($('#my_form_email .message').val()!='') {$('#my_form_email .message').css('border','none');}







    });



    $('#submit_modal_err').bind("click", function(event) {
    	$('#form_err').css('display', "block");
    	if ($('#my_form_email .name').val()=='') {$('#my_form_email .name').css('border','solid thin #f00');}
    	if ($('#my_form_email .company').val()=='') {$('#my_form_email .company').css('border','solid thin #f00');}
    	if ($('#my_form_email .email').val()=='') {$('#my_form_email .email').css('border','solid thin #f00');}
    	if ($('#my_form_email .phoneNumber').val()=='') {$('#my_form_email .phoneNumber').css('border','solid thin #f00');}
    	if ($('#my_form_email .message').val()=='') {$('#my_form_email .message').css('border','solid thin #f00');}


			 var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
			 var mail = $('#my_form_email .email');

			 if(mail.val().search(pattern) == 0){
			 	$('#form_err').css('display', "block");
			 }


    });


    $('#submit_modal').bind("click", function(event) {
    	$('.thankyou').css('display', "block");
    });






});



// name
// company
// email
// phoneNumber
// message
// $('#form_err').css('display', "block");