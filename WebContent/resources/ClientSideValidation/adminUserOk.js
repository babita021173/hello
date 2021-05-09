(function($) {
    $.fn.serializeFormJSON = function() {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery)


function showpoopup(msg, addclass, removeclass1,
                removeclass2) {

                $("#messg").addClass(addclass);
                $("#messg").removeClass(removeclass1);
                $("#messg").removeClass(removeclass2);
                $(".alert-Msg").empty();
                $(".alert-Msg").append(msg);

               $("#basicModal").modal("show");

            }
	
$(document).ready(
			function() {
				
				

				$("input").on("keypress", function(e) {
				    if (e.which === 32 && !this.value.length)
				        e.preventDefault();
				});
				
				 $("#masterFormDetails")
		            .validate(

		                {
		                    debug: true,
		                    ignore: ".ignore,*:not([name])",
		                    rules : {
								name : {
									required : true
				 

								},
								designation: {
									
									required : true
								},
								emailid: {
									required : true,
									email   : true,
									maxlength:40
									
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
									required : "Please Enter Name"/*,
				                    lettersnNumberwithbasicpunc: "Don't Enter any Special Character in name"*/
								},
								
								designation: {
									
									required : "Please Enter Designation"
								},
								emailid :{
									required : "Please Enter Email",
									email   :  "Please Enter Valid Email",
									maxlength: "Email must not exceed 40 characters"	
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
		                    	var saveMasterDetails = $("#masterFormDetails");
		                    	
		                        var jsonData = JSON.stringify($(saveMasterDetails).serializeJSON());
		                        
		                        
		                        console.log("JSON DATA"+jsonData);
		                        
		                        	$.ajax({
		                            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
		                            url: 'empregSubmit', // the url where we want to POST
		                            data: jsonData,
		                            async: true,
		                            encode: true,
		                         //   ajax:false,
		                            beforeSend: function(xhr) {
		                                xhr.setRequestHeader("Accept", "application/json");
		                                xhr.setRequestHeader("Content-Type", "application/json");
		                            },
		                            success: function(data, textStatus, jqXHR)  {
		                            	if (data.status == "success"){
		                            		alert("we are here on success patr")
		                            		showpoopup("Your information is saved successfully.",
		                            				"alert-success",
		                                            "alert-danger",
		                                            "alert-info");
		                            		//alert("Your information is saved successfully.");
		                            		
		                            		$('#masterFormDetails')[0].reset();
		                            	}
		                            
		                            else
		                       {
                                            //alert("There is somthing wrong Happen");
		                             //  alert("Error Arising!!!!  ");
										showpoopup(
	                                            "Your information is not saved successfully.",
	                                            "alert-danger", "alert-success", "alert-info");
										   console.log("obj" +data.errors);
			                               $("#errortablebody").empty();
			                               $.each(data.errors,function(index,value) {
			                                           var srno = index + 1;
			                                        //   alert("index"+srno);
			                                           $("#errortablebody").append(
			                                                   "<tr><td>" +srno +
			                                                   "</td><td>" +data.errors[index].field +
			                                                   "</td><td>" +data.errors[index].defaultMessage +
			                                                   "</td></tr>");
			                                       });
			                               $("#errormodal").modal("show");
										
		                               }
		                            },
		                            	 error: function(jqXHR, textStatus, errorThrown) {
				                               alert(textStatus, errorThrown);
			                            }
		                        });
		                     }
		                    
		                    
		                    
		                    /*submitHandler : function(form) {

						           var userformid = $("#masterFormDetails");
				                   var jsonData = JSON.stringify($(userformid).serializeJSON());
				                   console.log(jsonData);
				                   //var token = GetNewToken();
				                   //$("#secureToken").val(token);
				                   	$.ajax({
				                       type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
				                       url: 'empregSubmit', // the url where we want to POST
				                       data: jsonData,
				                       async: false,
				                       encode: true,
				                       ajax:false,
				                       beforeSend: function(xhr) {
				                           xhr.setRequestHeader("Accept", "application/json");
				                           xhr.setRequestHeader("Content-Type", "application/json");
				                           xhr.setRequestHeader('X-CSRF-Token', $('#secureToken').val());
				                       },
				                       
				                       success: function(data, textStatus, jqXHR) {
				                    	   
				                         if (data.status == "success") {
				                        	 var flagiD = $("#totalcount").val();
				                        	 showpooup(
			                                            "Foreigner visit information saved successfully.",
			                                            "alert-success",
			                                            "alert-danger",
			                                            "alert-info");
												$('#masterFormDetails')[0].reset();
										} else {
											showpooup(
		                                            "Foreigner visit information not saved successfully.",
		                                            "alert-danger", "alert-success", "alert-info");
											 
											   console.log("obj" +data.errors);
				                               $("#errortablebody").empty();
				                               $.each(data.errors,function(index,value) {
				                                           var srno = index + 1;
				                                           $("#errortablebody").append(
				                                                   "<tr><td>" +srno +
				                                                   "</td><td>" +data.errors[index].field +
				                                                   "</td><td>" +data.errors[index].defaultMessage +
				                                                   "</td></tr>");
				                                       });
				                               $("#errormodal").modal("show");
											
											   }
										},
										error : function(jqXHR,
												textStatus,
												errorThrown) {
											
											alert(textStatus,
													errorThrown);
										}
									});
							   
							   
								}*/
		                });
		            

		/*		$("#empForm1rferer").validate(
						{
							rules : {
								name : {
									required : true,
				  lettersnNumberwithbasicpunc: true

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
									required : "Please Enter Name",
				  lettersnNumberwithbasicpunc: "Don't Enter any Special Character in name"
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

								//form.submit();
								
		                        
								 var appUserId1 = $("#empForm1");
					             var jsonData = JSON.stringify($(appUserId1).serializeJSON());
								  console.log("jsonData vic:::  " + jsonData);
								   $.ajax({
											type : 'POST', // define
											url : 'empregSubmit', // the
											data: jsonData,
				                            async: false,
				                            encode: true,
											beforeSend : function(xhr) {
												xhr.setRequestHeader("Accept","application/json");
												xhr	.setRequestHeader(	"Content-Type","application/json");
												
											},
											success : function(data,
													textStatus, jqXHR) {

											if (data.status == "success") {
												showpooup(
					                                   "Foreigner visit information saved successfully.",
					                                   "alert-success",
					                                   "alert-danger",
					                                   "alert-info");
													$('#EmpForm1')[0].reset();
											} else {
												showpooup(
					                                   "Foreigner visit information not saved successfully.",
					                                   "alert-danger", "alert-success", "alert-info");
												 
												   console.log("obj" +data.errors);
					                              $("#errortablebody").empty();
					                              $.each(data.errors,function(index,value) {
					                                          var srno = index + 1;
					                                          $("#errortablebody").append(
					                                                  "<tr><td>" +srno +
					                                                  "</td><td>" +data.errors[index].field +
					                                                  "</td><td>" +data.errors[index].defaultMessage +
					                                                  "</td></tr>");
					                                      });
					                              $("#errormodal").modal("show");
												
												   }
											},
											error : function(jqXHR,
													textStatus,
													errorThrown) {
												
												alert(textStatus,
														errorThrown);
											}
										});
								
							}
								
									                  });*/
			
			});