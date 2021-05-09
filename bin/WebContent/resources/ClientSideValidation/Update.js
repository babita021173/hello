
$(document).ready(
			function() {

				$("#UpdateForm").validate(
						{
							rules : {
								name : {
									required : true

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
									 minlength:10
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
								},
								
								designation: {
									
									required : "Please Enter Designation"
								},
								emailid :{
									required : "Please Enter Email",
									email   :  "Please Enter Valid Email "
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






















