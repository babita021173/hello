
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


function finalSave(){
	$('#genreport').attr('method', "GET");
	$('#genreport').attr('action',
			"saveReportForDcs");
	$('#genreport').attr('target', "_blank");
	$('#genreport').submit();
	$('#complModal').modal('hide');
	
}
function refreshDraftsheetList(){
	try{
		//alert("hello");
	var eprocListid = $('#eprocListTableid')
	.DataTable(
			{
				"ajax" : {
					"url" : "getDraftsheetList",
				},
				"destroy" : true,
				"columns" : [ {
					"data" : "eprocid"
				}, {
					"data" : "psDesc"
				}, {
					"data" : "firno"
				}, {
					"data" : "firDate"
				}, {
					"data" : "actSection"
				}, {
					"data" : "dftChrgshtReqdate"
				}, {
					"data" : "remarks"
				},{
					"data" : "briefFacts"
				}

				]

			});
	//alert("hsadjkfbsd");
	}catch(e){
		alert(e);
	}
}

function fetchpolicest()
{
	 var distCode=$("#districtCd").val();
	$.ajax({
	
		url : "allPolicestations?distCode="+distCode,
		async : false,
		dataType : 'json',
		encode : true,
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Accept",
					"application/json");
			xhr.setRequestHeader(
					"Content-Type",
					"application/json");
		},
  success : function(data, textStatus,
			jqXHR) {
	  var html = '<option value="">---Select---</option>';
      var len = data.length;
      for (var i = 0; i < len; i++) {
        
          //  alert("k ;;;; "+data[i].psCode);
           
          html += '<option value="' +
              data[i].psCode +
              '">' +
              data[i].psDesc +
              '</option>';
      }
      html += '</option>';
      $('#policeCd').html("");
      $('#policeCd').html(html);

		} 

	,
	error : function(jqXHR, textStatus,
			errorThrown) {
		//alert(textStatus, errorThrown);
	}
	
	});
	
}

function viewCaseHearing(eprocid) {
	//  alert("case pro "+eprocid);
	 
	  $.ajax({
			
			url : "listeprocforCaseHear?eprocid=" + eprocid,
			async : false,
			dataType : 'json',
			encode : true,
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Accept",
						"application/json");
				xhr.setRequestHeader(
						"Content-Type",
						"application/json");
			},
	  success : function(data, textStatus,
				jqXHR) {
			if (data) {
			
				//alert(data.length + "dfgdfg");
				$("#caseProlist").empty();
				$("#caseProlist").append("<thead><tr><th>Eproc Id</th><th>Date of Draft Chargesheet</th><th>Type of Draft Chargesheet</th><th>Remarks</th>" +
						"<th>Brief Facts</th></thead>");
				if(data.length>0){
					for (var i = 0; i < data.length; i++) {

						$("#caseProlist")
								.append(
										"<tr><td>"
												+ data[i].eprocid
												+ "</td><td>"
												+ data[i].dftChrgshtReqdate
												+ "</td><td>"
												+ data[i].typeDesc
												+ "</td>"
												+ "<td>"
												+ data[i].remarks
												+ "</td>"
												+ "<td>"
												+ data[i].briefFacts
												+ "</td>");
				}	}
				else{
					
					$("#caseProlist")
					.append("<tr><td colspan='5' >No data </td>");
				}
					
					$("#v_CompDtlFrmList4casepro").show();
					smoothScroll(document.getElementById('v_CompDtlFrmList4casepro'));
			} else {
				$("#caseProlist").empty();
				$("#caseProlist").append("<thead><tr><th>Eproc Id</th><th>Date of Draft Chargesheet</th><th>Type of Draft Chargesheet</th><th>Remarks</th>" +
				"<th>Brief Facts</th></thead>");
		
				
				$("#caseProlist")
				.append("<thead><tr><td colspan='5' >No data </td>");
			}

		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			alert(textStatus, errorThrown);
		}
	});
	  $("#v_CompDtlFrmList4casepro").show();
		smoothScroll(document.getElementById('v_CompDtlFrmList4casepro')); 
}


function viewCaseHearing1() {
	//  alert("case pro "+eprocid);
	 
	  $.ajax({
			
			url : "listeprocforCaseHear1",					
			async : false,
			dataType : 'json',
			encode : true,
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Accept",
						"application/json");
				xhr.setRequestHeader(
						"Content-Type",
						"application/json");
			},
	  success : function(data, textStatus,
				jqXHR) {
			if (data) {
			
				//alert(data.length + "dfgdfg");
				$("#caseProlist").empty();
				$("#caseProlist").append("<thead><tr><th>Eproc Id</th><th>Date of Draft Chargesheet</th><th>Type of Draft Chargesheet</th><th>Remarks</th>" +
						"<th>Brief Facts</th></thead>");
				if(data.length>0){
					for (var i = 0; i < data.length; i++) {

						$("#caseProlist")
								.append(
										"<tr><td>"
												+ data[i].eprocid
												+ "</td><td>"
												+ data[i].dftChrgshtReqdate
												+ "</td><td>"
												+ data[i].typeDesc
												+ "</td>"
												+ "<td>"
												+ data[i].remarks
												+ "</td>"
												+ "<td>"
												+ data[i].briefFacts
												+ "</td>");
				}	}
				else{
					
					$("#caseProlist")
					.append("<tr><td colspan='5' >No data </td>");
				}
					
					$("#v_CompDtlFrmList4casepro").show();
					smoothScroll(document.getElementById('v_CompDtlFrmList4casepro'));
			} else {
				$("#caseProlist").empty();
				$("#caseProlist").append("<thead><tr><th>Eproc Id</th><th>Date of Draft Chargesheet</th><th>Type of Draft Chargesheet</th><th>Remarks</th>" +
				"<th>Brief Facts</th></thead>");
		
				
				$("#caseProlist")
				.append("<thead><tr><td colspan='5' >No data </td>");
			}

		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			alert(textStatus, errorThrown);
		}
	});
	
}


function addChargesheet(){
	$("#addDraftid").show();
	smoothScroll(document.getElementById('addDraftid'));
}



jQuery(function() {
	jQuery('#savedrftchrgpreqUploadDoc').click(function() {
		
		  var DraftChrgshtReqs = $("#DraftChrgshtReqid");
	    	var entityJsonStr = JSON.stringify(DraftChrgshtReqs);
	        var file_data = $('#file11').prop( 'files')[0];
	        var reqdate_Id = $( '#dftChrgshtReqdateid').val();
	        var actsection = $('#actSectionId').val();
	        var remarks_Id = $('#remarksId').val();
	        var reqquerycd_Id = $('#reqquerycdId').val();
	        var eprocID = $('#eProcId').val();
	        var briefFactsId = $('#briefFactsid').val();
	        
	        var dist = $('#districtCd').val();
	        var ps = $('#policeCd').val();
	        var firno = $('#firno').val();
	        var firdate = $('#firDate').val();
	       // reorder_act_section(totalrec)
	        var form_data = new FormData();
	        form_data.append('file', file_data);
	        form_data.append('eprocid', eprocID);
	        form_data.append('dftChrgshtReqdate', reqdate_Id);
	        form_data.append('actSection', actsection);
	        form_data.append('remarks', remarks_Id);
	        form_data.append('reqquerycd', reqquerycd_Id);
	        form_data.append('briefFacts', briefFactsId);
	        form_data.append('firDate', firdate);
	        form_data.append('distcode', dist);
	        form_data.append('pscode', ps);
	        form_data.append('firno', firno);
	        form_data.append("data", new Blob([entityJsonStr], {
	                        type : "application/json"  // ** specify that this is JSON**
	                    })); 
		  var token = GetNewToken();
          $("#secureToken").val(token);
		
		 $
         .ajax({
             url: 'savedftChrgshtReqdetails',
             data: form_data,
             cache: false,
             dataType: 'text',
             processData: false,
             contentType: false,
             type: 'POST',
             beforeSend: function(xhr) {
                 xhr.setRequestHeader("Accept", "application/json");
              xhr .setRequestHeader(  'X-CSRF-Token',   $( '#secureToken') .val());
             },
             success: function(data, textStatus, jqXHR) {

             	 var obj = $.parseJSON(data);
             	 if(obj.status == "success"){
                 //alert("Record Saved Succesfully.");
                 /*	$( '#draftChrgshtReqid12' ).each(function(){
                 	    this.reset();
                 	});*/
             		 
             		 
                 	showpooup_d(
                            "Record Saved Succesfully.",
                            "alert-success",
                            "alert-danger",
                            "alert-info");
                 	                 	
                 $('#file11').val('');
        	       $( '#dftChrgshtReqdateid').val('');
        	         $('#actSectionId').val('');
        	         $('#remarksId').val('');
        	         $('#reqquerycdId').val('');
        	        $('#eProcId').val('');
        	         $('#briefFactsid').val('');
        	         $('#districtCd').val(0);
        	        $('#policeCd').val(0);
        	         $('#firno').val('');
        	         $('#firDate').val('');
                 	
                 	        	refreshDraftsheetList();
                 	smoothScroll(document.getElementById('drftcgrgshtdiv'));	
                 	
                 
                 	

                 } else {
                 	//alert("Record could not be Saved.");
                	 showpooup_d(
                         "File could not be Uploaded",
                         "alert-success",
                         "alert-danger",
                         "alert-info");
                 }
             },
             error: function(jqXHR,
                 textStatus,
                 errorThrown) {
                 alert(textStatus,
                     errorThrown);
             }
         });
    
		 var token = GetNewToken();
	        $("#secureToken").val(token);
		
	});
});


function GetNewToken() {
//alert("sandmadf");
    var token;

    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (POST for
        // our form)
        url: 'GenerateNewToken', // the url where we want to POST
        // data: search,
        // dataType : 'json', // what type of data do we expect back from the
        // server
        encode: true,
        async: false,
        beforeSend: function(xhr) {
            // xhr.setRequestHeader("Accept", "application/json");
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.setRequestHeader('X-CSRF-Token', $('#secureToken').val());

        },
        success: function(data, textStatus, jqXHR) {

            token = data;
            // alert("token Method "+token);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }

    });

    return token;

}
$(document)
.ready(
		function() {

$('#dftChrgshtReqdateid,#firDate').datepicker({
    format: 'dd-mm-yyyy',
    todayHighlight: true, 
    todayBtn: 'linked',
    autoclose: true

})

$('#eprocListTableid').DataTable();
		
$(document).on("change","#actds",
  		 function() {
   	var act = $("#actds").val();
		//alert('dfdf'+act);
						     
								$.ajax({
									type : 'POST', // define the type of HTTP verb we want to use (POST for our form)
									url : 'getsectionbyactDS', // the url where we want to POST  url call after edit
									data : act, // our data object
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
	

$(document).on("click","#actandsectionInfosave1",
		 function() {

	 alert("hello");
	 var act=$('#actds').val();
	 var section=$('#section').val();
	 var form_data = new FormData();
     form_data.append('actcd', act);
     form_data.append('sectioncd', section);
     
	 alert("hello--"+act+section);
	 $.ajax({
		 url: 'actandsectionInfosave4DS',
         data: form_data,
         cache: false,
         dataType: 'text',
         processData: false,
         contentType: false,
         type: 'POST',
         beforeSend: function(xhr) {
             xhr.setRequestHeader("Accept", "application/json");
          
         },
	 	
		 success: function(data,textStatus, jqXHR) {
			    
			 var obj = $.parseJSON(data);
			
			    // showpooup_d("Save successfully","alert-success","alert-danger", "alert-info");
			   
			var i=0;
	 $('#actSectionDt1').html("");
			var table='';
			var thead='';
			
			 table='<thead><tr class="w3-light-grey"><th>Act</th><th>Section</th></tr></thead><tbody>';
			for(i=0;i<obj.length;i++){
				table+='<tr><td>'+obj[i].act+'</td><td>'+obj[i].section+'</td></tr>'
			}
			table+="</tbody>"
			
		       $('#actSectionDt1').append(table);
		    $('#ActAndSectionID').show();
			    /*}else{
			    	alert("fail");
			     //showpooup_d("Not saved","alert-danger","alert-success", "alert-info");
			    }*/
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

function resetForm($form) {
    $form.find('input:text, inputassword, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected');
}

/*$("#DraftChrgshtReqid")
.validate({
    debug: true,
    ignore: ".ignore,*:not([name])",
    rules: {
    	dftChrgshtReqdate: {
    		required: true,
    		anyDate: true
        },
        reqtypecd: {
        	required: true,
        },
       
        docContent: {
        	
        	accept: "application/pdf"
        },
        remarks: {
        	maxlength: 100,
        	lettersnNumberwithbasicpunc: true
        }

    },
    messages: {
        
    	dftChrgshtReqdate: {
    		required: "Please enter Date"
        },
        
        reqtypecd: {
        	required: "Please select ",
        },
      
        docContent: {

            accept: "Please select valid File i.e pdf only"
        },
        remarks: {
        	maxlength: "Remarks must not exceed 100 characters",
        	lettersnNumberwithbasicpunc: "Please specify valid Remarks "
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
        if ($(element).parent().hasClass('has-error')) {
            $(element).parent().addClass(
                "has-success").removeClass(
                "has-error");
            $(element).next('.FeRror').css(
                'display', 'none');
        }
    },
    submitHandler: function(form) {
    //	alert("sdnksnd");
    	  var DraftChrgshtReqs = $("#DraftChrgshtReqid");
    	var entityJsonStr = JSON.stringify(DraftChrgshtReqs);
        var file_data = $('#file11').prop( 'files')[0];
        var reqdate_Id = $( '#dftChrgshtReqdateid').val();
        var reqType_Id = $('#reqTypeId').val();
        var remarks_Id = $('#remarksId').val();
        var reqquerycd_Id = $('#reqquerycdId').val();
        var eprocID = $('#eProcId').val();
        var briefFactsId = $('#briefFactsid').val();
       // reorder_act_section(totalrec)
        var form_data = new FormData();
        form_data.append('file', file_data);
        form_data.append('eprocid', eprocID);
        form_data.append('dftChrgshtReqdate', reqdate_Id);
        form_data.append('reqtypecd', reqType_Id);
        form_data.append('remarks', remarks_Id);
        form_data.append('reqquerycd', reqquerycd_Id);
        form_data.append('briefFacts', briefFactsId);
        form_data.append("data", new Blob([entityJsonStr], {
                        type : "application/json"  // ** specify that this is JSON**
                    })); 
            var token = GetNewToken();
            $("#secureToken").val(token);

        console.log(form_data);

        $
            .ajax({
                url: 'savedftChrgshtReqdetails',
                data: form_data,
                cache: false,
                dataType: 'text',
                processData: false,
                contentType: false,
                type: 'POST',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Accept", "application/json");
                 xhr .setRequestHeader(  'X-CSRF-Token',   $( '#secureToken') .val());
                },
                success: function(data, textStatus, jqXHR) {

                	 var obj = $.parseJSON(data);
                	 if(obj.status == "success"){
                    	alert("Record Saved Succesfully.");
                    	viewlegopen(45);

                        showpooup(
                            "File Uploaded Succesfully.",
                            "alert-success",
                            "alert-danger",
                            "alert-info");
                      

                    } else {
                    	//alert("Record could not be Saved.");
                        showpooup(
                            "File could not be Uploaded",
                            "alert-success",
                            "alert-danger",
                            "alert-info");
                    }
                },
                error: function(jqXHR,
                    textStatus,
                    errorThrown) {
                    alert(textStatus,
                        errorThrown);
                }
            });
       
        var token = GetNewToken();
        $("#secureToken").val(token);
    }

});

*/
