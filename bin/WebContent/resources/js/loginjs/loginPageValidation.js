$(document).ready(
        function() {
					$("#loginform")
							.validate({
										errorClass : "login_error",
										debug : true,
										ignore : ".ignore,*:not([name])",
										rules : {
											 loginId : {
												required : true,
												maxlength : 20,
												lettersnNumberwithbasicpunc : true
											},
											userPwd : {
												required : true,
												maxlength : 20,
												
											},
											captcha : {
												required : true,
												maxlength : 6,

											}, 
										},
										messages : {
											 loginId : {
												required : "User ID  must not be blank",
												maxlength : "User ID  Should be less than or equal to 20 characters",
												lettersnNumberwithbasicpunc : "Please enter valid login id"
											},
											userPwd : {
												required : "Password  must not be blank",
												maxlength : "Password  Should be less than or equal to 20 characters",
												
											},
											captcha : {
												required : "Captcha  must not be blank",
												maxlength : "Captcha  Should be  equal to 6 characters",
											}
										},

										errorPlacement : function(error,
												element) { // decides where
															// error element
															// will be placed

											// $(element).parent().next().next().html(error);

											$(element).parent().next(
													'.login_error').remove();
											$(element).parent().after(
													"<div class='login_error' style='margin-left:20px' >"
															+ error.text()
															+ "</div>");
										},
										highlight : function(element) { // called
																		// when
																		// error
																		// occurs,
																		// css
																		// styling
																		// for
																		// every
																		// error
																		// event
											$(element).parent().addClass(
													'has-error');
										},
										unhighlight : function(element) {// called
																			// when
																			// error
																			// is
																			// fixed
											$(element).parent().removeClass(
													'has-error');
											$(element).parent().next(
													'.login_error').remove();
											// $( element ).removeClass(
											// errorClass ).addClass( validClass
											// );
										},
										submitHandler : function(form) {
											
											var pass = $("#userPwd").val();
											// alert(pass);
											var actualpass = new Hashes.SHA256()
													.hex(pass);
											var SHA256 = new Hashes.SHA256()
													.hex(new Hashes.SHA256()
															.hex(pass)
															+ randomsalt);
											$("#userPwd").val(SHA256);
											$('#loginform').attr('method',
													"POST");
											$('#loginform').attr('action',
													"home");
											form.submit();
										}
									});
				});

function refresh_captcha() {
	/*$('#loginId').val("");
	$("#userPwd").val("");*/
	$('#captcha').val("");
	$('#irs_captcha_id').attr('src', 'captchaimg?' + Math.random());
}
