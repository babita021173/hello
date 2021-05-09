/*Form Validation*/

//Wait for the DOM to be ready
/*function validationForm()
 {
	alert("Hello raj");
     alert("hello" + raj);
	 $("#EmpForm").validate(
			    { 
			        debug: true,
			        ignore: ".ignore,*:not([name])",
			        rules : {

			        	'name' : {
							required : true
							
						},
						  'designation' : {
							required : true
								
						}
						
					},
					messages : {
						
						'name' : {
							required : "Please Enter Name"
						},
					
						'designation' : {
							required : "Please Enter Designation"
						
						}
					},

			        errorPlacement: function(error,
			            element) {
			            error.addClass("help-block");
			            $(element).next('.FeRror').html(
			                error.text()).css(
			                'display', 'block');

			        },
			        highlight: function(element,
			            errorClass, validClass) {
			            $(element).parent().addClass(
			                "has-error").removeClass(
			                "has-success");
			        },
			        unhighlight: function(element,
			            errorClass, validClass) {
			            if ($(element).parent().hasClass(
			                    'has-error')) {
			                $(element).parent().addClass(
			                        "has-success")
			                    .removeClass(
			                        "has-error");
			                $(element).next('.FeRror').css(
			                    'display', 'none');
			            }
			        },
			        submitHandler: function(form) {
			          		       
			        }

			    });
	
	 

 }*/
$(document).ready(
			
		
		function() {

				
			/*	jQuery.validator.addMethod("noSpace", function(value, element) { 
					  return value.indexOf(" ") < 0 && value != ""; 
					}, "No space please and don't leave it empty");*/

				
			/*This Script is used for holding the curser, so that null value is not given in Tab
			*/
				$("input").on("keypress", function(e) {
				    if (e.which === 32 && !this.value.length)
				        e.preventDefault();
				});
				
				
				
				
				
				
				
				$("#EmpForm").validate(
						{
							rules : {
								name : {
									required : true,
				  /*lettersnNumberwithbasicpunc: true*/
								/*	noSpace : true*/

								},
								designation: {
									
									required : true
								},
								emailid: {
									required : true,
									email   : true
									
								},
								contact :{
									 required: true,
									 number  : true,
									 maxlength:10,
									 minlength:10,
									 
								},
								gender :{
									required : true
								},
								country :{
									required : true
									
								},
									

							},
							messages : {
								name : {
									required : "Please Enter Name"
				 /* lettersnNumberwithbasicpunc: "Don't Enter any Special Character in name"*/
								},
								
								designation: {
									
									required : "Please Enter Designation"
								},
								emailid :{
									required : "Please Enter Email",
									email   :  "Please Enter Valid Email"
								},
								contact :{
									 required  : "Please Enter Contact",
									 number    : "Please Enter numeric digits",
								     maxlength : "Please Enter Maximum 10 digits",
								     minlength : "Number must be of 10 digits",
								     MobileNo  : "Please Enter Valid Mobile NUmber"
								},
								gender :{
									required : "Please Select Gender"
								},
								country :{
									required : "Please Select Country"
									
								},
								
							},
							errorPlacement : function(error, element) {
								error.addClass("help-block");
								$(element).next('.FeRror').html(error.text())
										.css('display', 'block');

							},
							highlight : function(element, errorClass,
									validClass) {
								$(element).parent().addClass("has-error")
										.removeClass("has-success");
							},
							unhighlight : function(element, errorClass,
									validClass) {
								if ($(element).parent().hasClass('has-error')) {
									$(element).parent().addClass("has-success")
											.removeClass("has-error");
									$(element).next('.FeRror').css('display',
											'none');
								}
							},

							submitHandler : function(form) {

								form.submit();
							}

						                                            });
			});


/*function clearform(){
	 
	  $("#name").val('');
	  $("#designation").val('');
}   
*/

