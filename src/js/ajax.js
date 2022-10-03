/* Article FructCode.com */
$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, 
        type:     "POST", 
        dataType: "html", 
        data: $("#"+ajax_form).serialize(),  
        success: function(response) { 
        	result = $.parseJSON(response);
        	$('#result_form').html('First Name: '+result.firstname+'<br>Last Name: '+result.lastname+'<br>Phone Number: '+result.phonenumber+'<br>Email: '+result.email);
    	},
    	error: function(response) { 
            $('#result_form').html('Error. Data dind"t send');
    	}
 	});
}

console.log("Hey")

