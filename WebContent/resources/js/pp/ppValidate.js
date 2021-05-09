/**
 * Ajax Form Submission
 */
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

$( document ).ready(function() {
	
	$(document).on("click","#complainantInfoRecords",
   		 function() {
		/*$('#aadharNumber')
		.val(
				$(
						'#aadharNumber1')
						.val()
						+ $(
								'#aadharNumber2')
								.val()
						+ $(
								'#aadharNumber3')
								.val());
*/
var jsonData = JSON.stringify($("#complainantInfo").serializeFormJSON());
$.ajax({
			type : 'POST',
			url : 'savecomplainantInfo',
			data : jsonData,
			async : false,
			dataType : 'json',
			encode : true,
			beforeSend : function(
					xhr) {
				xhr
						.setRequestHeader(
								"Accept",
								"application/json");
				xhr
						.setRequestHeader(
								"Content-Type",
								"application/json");
			},
			success : function(
					data,
					textStatus,
					jqXHR) {

				$('#complainantDt').html("");
				var table = '';
				var thead = '';

				if (data.length > 0) {

					showpooup_d("Save successfully","alert-success","alert-danger","alert-info");
					$('#complainantDt1').show();
					$('#complainantDt').show();
					table = '<thead><tr class="w3-light-grey"><th>Complainant Name</th><th>PassportNo.</th><th>PanNo.</th><th>AAdharNo.</th><th>Gender.</th><th>ContactNo.</th><th>Address.</th></tr></thead><tbody>'

					$
							.each(
									data,
									function(
											index,
											item) {
										table += '<tr><td>'
												+ item.complainantName
												+ '</td><td>'
												+ item.passNumber
												+ '</td><td>'
												+ item.panNumber
												+ '</td><td>'
												+ item.aadharNumber
												+ '</td><td>'
												+ item.genderDesc
												+ '</td><td>'
												+ item.contactNumber
												+ '</td><td>'
												+ item.complainantAddr
												+ '</td></tr>'
									});
					$(
							'#complainantDt')
							.append(
									table
											+ '</tbody>');
					$("#v_CompDtlFrm").hide();

					smoothScroll(document.getElementById('v_newCompDtl'));

					
				} else {
					showpooup_d(
							"Not saved",
							"alert-danger",
							"alert-success",
							"alert-info");
				}
			},
			error : function(
					jqXHR,
					textStatus,
					errorThrown) {
				alert(
						textStatus,
						errorThrown);
			}
		});
		
	/*$("#complainantInfo111").validate(
			{debug: true,
		        ignore: ".ignore,*:not([name])",
				rules : {
					complainantName : {
						required : true,
						maxlength : 50,
						lettersnNumberwithbasicpunc : true
					},
					complainantCount : {
						required : true,
						maxlength : 4,
						number : true

					},
					passNumber : {

						maxlength : 50,
						lettersnNumberwithbasicpunc : true

					},
					panNumber : {

						maxlength : 50,
						lettersnNumberwithbasicpunc : true

					},
					aadharNumber1 : {

						maxlength : 4,
						number : true

					},
					aadharNumber2 : {

						maxlength : 4,
						number : true
					},
					aadharNumber3 : {

						maxlength : 4,
						number : true

					},
					gender : {
						required : true

					},
					nationality : {
						required : true

					},
					contactNumber : {
						required : true,
						number : true

					},
					complainantAddr : {
						required : true,
						maxlength : 100,
						lettersnNumberwithbasicpunc : true

					}
				},
				messages : {

					complainantName : {
						required : "Name  must not be blank",
						maxlength : "Name  Should be less than or equal to 50 characters",
						lettersnNumberwithbasicpunc : "Please enter valid Name"
					},
					complainantCount : {
						required : "complainantCount  must not be blank.",
						maxlength : "complainantCount must be number."

					},
					aadharNumber1 : {
						maxlength : "Maxmimum length is 12.",
						number : "Must be a number."

					},
					aadharNumber2 : {
						maxlength : "Maxmimum length is 12.",
						number : "Must be a number."
					},
					aadharNumber3 : {
						maxlength : "Maxmimum length is 12.",
						Number : "Must be a number."

					},
					gender : {
						required : "Gender must be required."
					},
					nationality : {
						required : "Nationality must be required."

					},
					contactNumber : {
						required : "Contact number must be required.",
						number : "Only number can enter."

					},
					complainantAddr : {
						required : "Address number must be required.",
						maxlength : "Address Should be less than or equal to 50 characters.",
						lettersnNumberwithbasicpunc : "Please enter valid Name"

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
				        	alert("hasfjkhs352");
				        	
            
				}
			});*/

	});
	
	
   /* $(document).on("click","#saveregistration",
   		 function() {
   	 var jsonData = JSON.stringify($("#erocregistrationinfo").serializeFormJSON())
   	 $.ajax({
   		 type: 'POST',
   		 url: 'saveerocregistration',
   		 data: jsonData,
   		 async: false,
   		 dataType: 'json',
   		 encode: true,
   		 beforeSend: function(xhr) {
   			 xhr.setRequestHeader("Accept", "application/json");
   			 xhr.setRequestHeader("Content-Type", "application/json");
   		 },
   		 success: function(data,textStatus, jqXHR) {
   			 alert(data.status);
   			 if(data.status == "success"){
   				 alert("saved Sucessfully");
   				 
   			 }else{
   				 alert("Failed to save ");
   			 }
   			 
   		 },
   		 error: function(jqXHR,
   				 textStatus,
   				 errorThrown) {
   			 alert(textStatus,
   					 errorThrown);
   		 }
   	 });
   	 
    });*/

    $(document).on("change","#act1",
   		 function() {
    	                        var act = $("#act1").val();
	                            alert('dfdf'+act);
	                            var data=new FormData();
	                            data.append("actId",act);
								$.ajax({
									type : 'POST', // define the type of HTTP verb we want to use (POST for our form)
									url : 'getsectionbyact', // the url where we want to POST  url call after edit
								data : data, // our data object
									beforeSend : function(xhr) {
										xhr.setRequestHeader("Accept", "application/json");
										xhr.setRequestHeader("Content-Type", "application/json");
								        xhr.setRequestHeader('X-CSRF-Token', $('#secureToken').val());
										
									},
									dataType : 'json', 
									encode : true,
									success : function(data, textStatus, jqXHR) {
										var html = '<option value="">---Select Section---</option>';
										var len = data.length;
									
										for (var i = 0; i < len; i++) {
											html += '<option value="' + data[i].sectionId + '">'
													+ data[i].section
													+ '</option>';
										}
										html += '</option>';

										$('#section').html(html);	
										
									},
									error : function(jqXHR, textStatus, errorThrown) {
										alert(textStatus, errorThrown);
									}
								});
					    
						});
	
	
	// save Complainant's Details 
    
 
				
	
    /* $(document).on("click","#savecomplainantInfo",
    		 function() {
    	 $('#aadharNumber').val($('#aadharNumber1').val() +$('#aadharNumber2').val() +$('#aadharNumber3').val());
     	
    	 var jsonData = JSON.stringify($("#complainantInfo").serializeFormJSON());
    	
    	 $.ajax({
    		 type: 'POST',
    		 url: 'savecomplainantInfo',
    		 data: jsonData,
    		 async: false,
    		 dataType: 'json',
    		 encode: true,
    		 beforeSend: function(xhr) {
    			 xhr.setRequestHeader("Accept", "application/json");
    			 xhr.setRequestHeader("Content-Type", "application/json");
    		 },
    		 success: function(data,textStatus, jqXHR) {
    			     			 
    			 $('#complainantDt').html("");
   				var table='';
   				var thead='';
   			
   	    		if(data.length>0)
	{
   	    			
   	    		 showpooup_d("Save successfully","alert-success","alert-danger", "alert-info");
   			$('#complainantDt1').show();
   			 $('#complainantDt').show();

   				table='<thead><tr class="w3-light-grey"><th>Complainant Name</th><th>PassportNo.</th><th>PanNo.</th><th>AAdharNo.</th><th>Gender.</th><th>ContactNo.</th><th>Address.</th></tr></thead><tbody>'
   			
   					$.each(data, function (index, item)
   				{
   	               table+='<tr><td>'+item.complainantName+'</td><td>'+item.passNumber+'</td><td>'+item.panNumber+'</td><td>'+item.aadharNumber+'</td><td>'+item.genderDesc+'</td><td>'+item.contactNumber+'</td><td>'+item.complainantAddr+'</td></tr>'
   				}); 
   			    $('#complainantDt').append(table+'</tbody>');
    		 }else{
    			 showpooup_d("Not saved","alert-danger","alert-success", "alert-info");
    		 }
    		 },
    		 error: function(jqXHR,
    				 textStatus,
    				 errorThrown) {
    			 alert(textStatus,
    					 errorThrown);
    		 }
    	 });
    	 
     });
    */
 	
     
    $(document).on("click","#saveaccusedetailsinfo",
    		 function() {
    	 var jsonData = JSON.stringify($("#accusedetailsinfo").serializeFormJSON())
    	 $.ajax({
    		 type: 'POST',
    		 url: 'saveaccusedetailsinfo',
    		 data: jsonData,
    		 async: false,
    		 dataType: 'json',
    		 encode: true,
    		 beforeSend: function(xhr) {
    			 xhr.setRequestHeader("Accept", "application/json");
    			 xhr.setRequestHeader("Content-Type", "application/json");
    		 },
    		 success: function(data,textStatus, jqXHR) {
    			 $('#accusdeDt').html("");
    				var table='';
    				var thead='';
    	    		// alert(" inside " +data.length);
    		if(data.length>0)
    			{
    			
  	    		 showpooup_d("Save successfully","alert-success","alert-danger", "alert-info");
    		 
    		 $('#accusdeDt1').show();
   			 $('#accusdeDt').show();

    			table='<thead><tr class="w3-light-grey"><th>Respondent Name</th><th>Dob/Age.</th><th>Gender</th><th>ContactNo.</th><th>PanNo.</th><th>AdharNo.</th><th>Address</th></tr></thead><tbody>'

   					$.each(data, function (index, item)
				{
					 
					 table+='<tr><td>'+item.accusedName+'</td><td>'+item.age+'/'+item.dob+'</td><td>'+item.genderDesc+'</td><td>'+item.contactNumber+'</td><td>'+item.panNumber+'</td><td>'+item.aadharNumber+'</td><td>'+item.address+'</td></tr>'
					    				}); 
				
			    $('#accusdeDt').append(table+'</tbody>');
    			}else{
    				
      	    		 showpooup_d("Not saved","alert-danger","alert-success", "alert-info");
    			}
		   		
    		 },
    		 error: function(jqXHR,
    				 textStatus,
    				 errorThrown) {
    			 alert(textStatus,
    					 errorThrown);
    		 }
    	 });
    	 
     });
   
     
     // Police Station Details 
 
    $(document).on("click","#polfirdetail",
   		 function() {
   	
/*   	 var jsonData = JSON.stringify($("#policestationinfo").serializeFormJSON())
*/   	 $.ajax({
   		 type: 'POST',
   		 url: 'getdetailsbyfir',
   		 data: jsonData,
   		 async: false,
   		 dataType: 'json',
   		 encode: true,
   		 beforeSend: function(xhr) {
   			 xhr.setRequestHeader("Accept", "application/json");
   			 xhr.setRequestHeader("Content-Type", "application/json");
   		 },
   		 success: function(data,textStatus, jqXHR) {
   			showpooup_d("Save successfully","alert-success","alert-danger", "alert-info");
   		 
   		 
   		 },
   		 error: function(jqXHR,
   				 textStatus,
   				 errorThrown) {
   			 alert(textStatus,
   					 errorThrown);
   		 }
   	 });
   	 
    });
    
   
    
    
    
    
    
    
     $(document).on("click","#policestationinfosave",
    		 function() {
    	// alert("hello");
    	 var jsonData = JSON.stringify($("#policestationinfo").serializeFormJSON())
    	 $.ajax({
    		 type: 'POST',
    		 url: 'policestationinfosave',
    		 data: jsonData,
    		 async: false,
    		 dataType: 'json',
    		 encode: true,
    		 beforeSend: function(xhr) {
    			 xhr.setRequestHeader("Accept", "application/json");
    			 xhr.setRequestHeader("Content-Type", "application/json");
    		 },
    		 success: function(data,textStatus, jqXHR) {
    			// alert(data);
    			 if(data > 0){
    				 showpooup_d("Save successfully","alert-success","alert-danger", "alert-info");
    				 
    			 }else{
    				 showpooup_d("Not saved","alert-danger","alert-success", "alert-info");
    			 }
    			 
    		 },
    		 error: function(jqXHR,
    				 textStatus,
    				 errorThrown) {
    			 alert(textStatus,
    					 errorThrown);
    		 }
    	 });
    	 
     });
     
     
     // Police Station Details 
   	
     $(document).on("click","#actandsectionInfosave",
    		 function() {
    
    	 
    	 var jsonData = JSON.stringify($("#actandsectionInfo").serializeFormJSON());
    	 $.ajax({
    		 type: 'POST',
    		 url: 'actandsectionInfosave',
    		 data: jsonData,
    		 async: false,
    		 dataType: 'json',
    		 encode: true,
    		 beforeSend: function(xhr) {
    			 xhr.setRequestHeader("Accept", "application/json");
    			 xhr.setRequestHeader("Content-Type", "application/json");
    		 },
    		 success: function(data,textStatus, jqXHR) {
   			    if(data>0){
   			     showpooup_d("Save successfully","alert-success","alert-danger", "alert-info");
   			    
    			
    			 $('#actSectionDt').html("");
 				var table='';
 				var thead='';
 				 table='<thead><tr class="w3-light-grey"><th>Act</th><th>Section</th></tr></thead><tbody>'
 				 $.each(data, function (index, item)
 				{
 					 table+='<tr><td>'+item.act+'</td><td>'+item.section+'</td></tr>'
 					    				}); 
 			    $('#actSectionDt').append(table+'</tbody>');
 			    
   			    }else{
   			     showpooup_d("Not saved","alert-danger","alert-success", "alert-info");
   			    }
 				/*$('#psId11').modal('show');*/
    			 
    		 },
    		 error: function(jqXHR,
    				 textStatus,
    				 errorThrown) {
    			 alert(textStatus,
    					 errorThrown);
    		 }
    	 });
    	 
     });

 
     $('#DatePick2 , #DatePick3 , #chDatePick1 , #chDatePick2 , #crtDatePick1 ').datepicker({
         format: 'dd-mm-yyyy',
         todayHighlight: true, 
         todayBtn: 'linked',
         autoclose: true

     });
     
     $('#DatePick1').datepicker({
         format: 'dd-mm-yyyy',
         autoclose: true,
         endDate: '-22y',
         startDate: '01-01-1750'

     }); 
    
     
 
     $(document).on("click","#cdocuploadInfoId",
       		 function() {
       //   alert("111");
         var file_data = $('#file11').prop( 'files')[0];
        
         var form_data = new FormData();
         form_data.append('file', file_data);
       
         if (file_data.size > 2097152 ) {
         	alert("File size must be less than 2MB");
            
             return false;
         }
        
         console.log(form_data);
         $
             .ajax({
                 url: 'saveDoc',
                 data: form_data,
                 async: false,
                 dataType: 'text',
                 processData: false,
                 contentType: false,
                 type: 'POST',
                 beforeSend: function(xhr) {
                   //  xhr.setRequestHeader( 'X-CSRF-Token', $(  '#secureToken') .val());
                 },
                 success: function(data,  textStatus, jqXHR) {

                     if (data == "1") {
                    	 
                    	 showpooup_d("Save successfully","alert-success","alert-danger", "alert-info");

                     } else {
                    	 showpooup_d("Save successfully","alert-danger","alert-success", "alert-info");
                     }
                 },
                 error: function(jqXHR,
                     textStatus,
                     errorThrown) {
                     alert(textStatus,
                         errorThrown);
                 }
             });
     });
 });
   
   


function showpooup_d(msg,addclass,removeclass1,removeclass2)
{
	
		$("#messgdec").addClass(addclass);
	$("#messgdec").removeClass(removeclass1);
	$("#messgdec").removeClass(removeclass2);
	$(".alert-Msg").empty(); 
	$(".alert-Msg").append(msg);

	$("#complModal").modal("show");
		
	
}
 
function editPersonalInfo(userID) {
	// alert("edit");
	 $.ajax({
       type: 'GET', // define the type of HTTP verb we want to use
       // (POST for our
       // form)
       url: 'getPersonalInfo?userID=' + userID, // the
        
       async: false,
       dataType: 'json',  
       
       encode: true,
       beforeSend: function(xhr) {
           xhr.setRequestHeader("Accept", "application/json");
           xhr.setRequestHeader("Content-Type", "application/json");
            
       },
       success: function(data, textStatus, jqXHR) {
           if (data.length > 0) {
               var trHTML = "";
               $('#personalinfotable').empty();
               $.each(data, function(i, item) {
                   if (i <= 9)
                       i = "0" + (i + 1);
                   else {
                       i = i + 1;
                   }
                   var dob_r;
                    
                   trHTML += '<tr><td>' +
                       i +
                       '</td><td>' +
                       item.name +
                       '</td><td>' +
                       item.gender +
                       '</td><td>' +
                       item.aadharNo +
                       '</td><td>' +
                       item.dob +
                       '</td><td><a href="#" class="AcCfabTn1" onclick="editPerson('+item.personID+')" ><i class="fa fa-pencil fa-lg" aria-hidden="true" ></i></a> </td></tr>';

               });
               thHTML = "<tr class='w3-light-grey'><th>Sr</th><th> Name</th><th>Gender</th><th>Aadhar No</th> <th>DOB</th><th>edit</th></tr>";
               $('#personalinfotable').append(thHTML)
               $('#personalinfotable').append(trHTML);
           } else {
               $('#personalinfotable').hide();
           }
       },
       error: function(jqXHR, textStatus, errorThrown) {
           alert(textStatus, errorThrown);
       }
   });


}

function nextTabContact() {
    $("#personalInfo").removeClass("active");
    $("#pInfo_Tab").removeClass("active");
   
    $("#personalInfo").removeClass("disabled");
    $("#contactInfo").addClass("active");
    $("#contact_tab").addClass("active");
    $("#contactInfo").removeClass("disabled");
    $("#ContInfo").show();
    $("#pInfo_Tab").hide();
    $("#courtInfo").hide();
    $("#OfficeInfo").hide();
    $("#designInfo").hide();
   
   
}
function nextTabDesig() {
	 
	$("#OfficeInfo").hide();
	$("#postingInformation").hide();
	
	 

	$("#designInfo").show();
    $("#designation").addClass("active");
    $("#Designa_Tab").addClass("active");
    $("#designation").removeClass("disabled"); 
	
}



function editPerson(personID) {
	 var uri = 'viewRecord?personID=' + personID;
	 $
    .ajax({
        type: 'GET',  
        url: uri,  
        async: false,
        encode: true,
        ajax:false,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
          
        },
        success: function(data, textStatus, jqXHR) {
        	 
        	
        	var uid=data.aadharNo;
        	var uid1=uid.toString()
            var uid2=uid1.substring(0,4);
        	var uid3=uid1.substring(4,8);
        	var uid4=uid1.substring(8,12);
        	 
        	//console.log("data"+data);
        	$('#Pinfo').show();
        	$('#title').val(data.title);
            //$("#title").attr("readonly", true);
            $("#title").attr("disabled", true); 
        	$('#name').val(data.name);
            $("#name").attr("disabled", true);
            if(data.typeOfRelative == 1){
            	  $("#typeOfRelative1").prop('checked',true);
            } else if(data.typeOfRelative == 2){
            	$("#typeOfRelative2").prop('checked',true);
            }else if(data.typeOfRelative == 3){
            	$("#typeOfRelative3").prop('checked',true);
            }else if(data.typeOfRelative == 4){
            	$("#typeOfRelative4").prop('checked',true);
            }else{
            	 $("#typeOfRelative1").prop('checked',false);
            	 $("#typeOfRelative2").prop('checked',false);
            	 $("#typeOfRelative3").prop('checked',false);
            	 $("#typeOfRelative4").prop('checked',false);
            }
            
            $('#relativeName').val(data.relativeName);
            $("#relativeName").prop("readonly", true);
            $('#personID').val(data.personID);
            $('#gender').val(data.gender);
            $("#gender").attr("disabled", true);
            
            
          //  $("#gender").prop("readonly", true);
            $('#DatePick1').val(data.dob);
            $("#DatePick1").prop("readonly", true);
            // editable field
            $('#education').val(data.education);
            $('#maritalStatus').val(data.maritalStatus);
           // end
            
            $('#aadharNo1').val(uid2);
            $('#aadharNo1').prop("readonly", true);
            $('#aadharNo2').val(uid3);
            $('#aadharNo2').prop("readonly", true);
            $('#aadharNo3').val(uid4);
            $('#aadharNo3').prop("readonly", true);
            

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus, errorThrown);
        }
    });
  
}
function d_calculateAge(birthday) { // birthday is a date
	    var ageDifMs = Date.now() - birthday.getTime();
	    var ageDate = new Date(ageDifMs); // miliseconds from epoch
	    return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

