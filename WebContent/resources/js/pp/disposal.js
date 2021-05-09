
function viewCaseProceeding(eprocid) {

	$
			.ajax({

				url : "listeprocforCaseDisposal?eprocid=" + eprocid,
				async : false,
				dataType : 'json',
				encode : true,
				beforeSend : function(xhr) {
					xhr.setRequestHeader("Accept", "application/json");
					xhr.setRequestHeader("Content-Type", "application/json");
				},
				success : function(data, textStatus, jqXHR) {
					if (data) {

						// alert(data.length + "dfgdfg");
						$("#caseProlist").empty();
						$("#caseProlist")
								.append(
										"<thead><tr><th>Eproc Id</th><th>Date of Disposal</th><th>Type of Disposal</th><th>Remarks</th>"
												+ "<th>Brief Facts</th></thead>");
						if (data.length > 0) {
							for (var i = 0; i < data.length; i++) {

								$("#caseProlist").append(
										"<tr><td>" + data[i].eprocid
												+ "</td><td>"
												+ data[i].disposaldate
												+ "</td><td>"
												+ data[i].disposaltypedesc
												+ "</td>" + "<td>"
												+ data[i].remarks + "</td>"
												+ "<td>" + data[i].briefFacts
												+ "</td>");
							}
						} else {

							$("#caseProlist").append(
									"<tr><td colspan='5' >No data </td>");
						}

						$("#v_CompDtlFrmList4casepro").show();
						smoothScroll(document
								.getElementById('v_CompDtlFrmList4casepro'));
					} else {
						$("#caseProlist").empty();
						$("#caseProlist")
								.append(
										"<thead><tr><th>Eproc Id</th><th>Date of Disposal</th><th>Type of Disposal</th><th>Remarks</th>"
												+ "<th>Brief Facts</th></thead>");

						$("#caseProlist").append(
								"<thead><tr><td colspan='5' >No data </td>");
					}

				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert(textStatus, errorThrown);
				}
			});
}

function viewCaseProceeding1() {
	// alert("case pro "+eprocid);

	$
			.ajax({

				url : "listeprocforCaseDisposal1",
				async : false,
				dataType : 'json',
				encode : true,
				beforeSend : function(xhr) {
					xhr.setRequestHeader("Accept", "application/json");
					xhr.setRequestHeader("Content-Type", "application/json");
				},
				success : function(data, textStatus, jqXHR) {
					if (data) {

						// alert(data.length + "dfgdfg");
						$("#caseProlist").empty();
						$("#caseProlist")
								.append(
										"<thead><tr><th>Eproc Id</th><th>Date of Disposal</th><th>Type of Disposal</th><th>Remarks</th>"
												+ "<th>Brief Facts</th></thead>");
						if (data.length > 0) {
							for (var i = 0; i < data.length; i++) {

								$("#caseProlist").append(
										"<tr><td>" + data[i].eprocid
												+ "</td><td>"
												+ data[i].disposaldate
												+ "</td><td>"
												+ data[i].disposaltypedesc
												+ "</td>" + "<td>"
												+ data[i].remarks + "</td>"
												+ "<td>" + data[i].briefFacts
												+ "</td>");
							}
						} else {

							$("#caseProlist").append(
									"<tr><td colspan='5' >No data </td>");
						}

						$("#v_CompDtlFrmList4casepro").show();
						smoothScroll(document
								.getElementById('v_CompDtlFrmList4casepro'));
					} else {
						$("#caseProlist").empty();
						$("#caseProlist")
								.append(
										"<thead><tr><th>Eproc Id</th><th>Date of Disposal</th><th>Type of Disposal</th><th>Remarks</th>"
												+ "<th>Brief Facts</th></thead>");

						$("#caseProlist").append(
								"<thead><tr><td colspan='5' >No data </td>");
					}

				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert(textStatus, errorThrown);
				}
			});
}

function getDisposalchange(val) {

	if (val == 1) {

		$('#acqitalid').show();
		$('#convictionid').hide();
		$('#dischrgedid').hide();

	} else if (val == 2) {

		$('#acqitalid').hide();
		$('#convictionid').show();
		$('#dischrgedid').hide();

	} else if (val == 3) {

		$('#acqitalid').hide();
		$('#convictionid').hide();
		$('#dischrgedid').show();

	} else {
		$('#convictionid').hide();
		$('#dischrgedid').hide();
		$('#acqitalid').hide();
	}
}
function addDisposal() {
	$("#addDisposalid").show();
	smoothScroll(document.getElementById('addDisposalid'));
}


function reloadlist()
{
	try {
		
	
	var eprocListid123 = $('#eprocListTableid123')
	.DataTable(
		{
			"ajax" : {
				"url" : "reloadedList",
			},
			"destroy" : true,
			"columns" : [ {
				"data" : "eprocID"
			},
			{
				"data" : "cnrNo"
			},
			{
				"data" : "stateName"
			},
			{
				"data" : "distName"
			},
			{
				"data" : "caseYear"
			},
			{
				"data" : "caseregDate"
			}, {
				"data" : "recordCreatedOn"
			}, 

			],
			
			"columnDefs" : [

			{
				"render" : function(data, type, row) {
					return '<a onclick=viewCaseProceeding("'+row.eprocID+'");><i class="fa fa-eye"></i></a>';
					
				},
				"targets" : 7
			} ],

		});
 

	} catch (e) {
		alert(e);
	}
	}



function reloadlist12344() {
	alert("22222");
	
	
	
	
	
	
	
	try {

	var eprocListid = $('#eprocListTableid1')
	.DataTable(
		{
						
			"ajax" : {
				"url" : "reloadedList",
			},
			"destroy" : true,
			"columns" : [ {
				"data" : "eprocID"
			},
			{
				"data" : "cnrNo"
			}
			,
			{
				"data" : "caseYear"
			},
			{
				"data" : "caseregDate"
			}, {
				"data" : "recordCreatedOn"
			}, 

			],
			
		
		});
	} catch (e) {
		 alert(e);
		}
		
}

$(document).ready(function() {
	
	   $("#disposalid")
       .validate({
           debug: true,
           ignore: ".ignore,*:not([name])",
           rules: {
           	disposaldate: {
           		required: true,
           		anyDate: true
               },
               disposaltypecd: {
               	required: true,
               },
               
               fitforappeal: {
               	required: true,
               },
               disconn: {
               	required: true,
               },
               discharged: {
               	required:true,
               },
               docContent: {
               	required: true,
               	accept: "application/pdf"
               },
               remarks: {
               	maxlength: 100,
               	lettersnNumberwithbasicpunc: true
               }

           },
           messages: {
               
           	disposaldate: {
           		required: "Please enter disposal date"
               },
               
               disposaltypecd: {
               	required: "Please select disposal type",
               },
               fitforappeal: {
               	required: "Please select fit for appeal",
               },
               disconn: {
               	required: "Please select connection",
               },
               discharged: {
               	required: "Please select discharged",
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
           	//alert("sndsnd");
   			var file_data = $('#file11').prop( 'files')[0];
   			var disposaldate_id = $( '#disposaldateid').val();
   			var disposaltypecd_id = $('#disposaltypecdid').val();
   			var eprocID = $('#eProcId').val();
   			var briefFacts=$('#briefFactsid').val();
   			var fitforappealid;
   			var disconnid;
   			var dischargedid;
   			if($('input:radio[name=fitforappeal]:checked').val() == 'Y')
   				{
   				fitforappealid='Y';
   				}
   			else
   				{
   				fitforappealid='N';
   				}
   			if($('input:radio[name=disconn]:checked').val() == 'Y')
				{
   				disconnid='Y';
				}
			else
				{
				disconnid='N';
				}
   			
   			if($('input:radio[name=discharged]:checked').val() == 'Y')
				{
   				dischargedid='Y';
				}
			else
				{
				dischargedid='N';
				}
   			var remarks_Id = $('#remarksId').val();
   			//var repquerycd_Id = $('#fitforappealy').val();
   			
   			var form_data = new FormData();
   			form_data.append('file', file_data);
   			form_data.append('eprocid', 22);
   			form_data.append('disposaldate', disposaldate_id);
   			form_data.append('disposaltypecd', disposaltypecd_id);
   			form_data.append('fitforappeal', fitforappealid);
   			form_data.append('discharged', dischargedid);
   			form_data.append('disconn', disconnid);
   			form_data.append('remarks', remarks_Id);
   			form_data.append('briefFacts',briefFacts);
   			if (file_data!='' && file_data.size > 2097152 ) {
   				alert("File size must be less than 2MB");
   				/*showpooup(
                   "File size must be less than 2MB",
                   "alert-danger",
                   "alert-success",
                   "alert-info");*/
   				return false;
   			}
   			else
   				{
   				
   				}
   			
   			 var token = GetNewToken();
           $("#secureToken").val(token);
   			console.log("form_data  "+form_data);
   			$
   			.ajax({
   				url: 'saveDisposaldetails',
   				data: form_data,
   				async: false,
   				dataType: 'text',
   				processData: false,
   				contentType: false,
   				type: 'POST',
   				 beforeSend: function(xhr) {
	                         xhr.setRequestHeader("Accept", "application/json");
	                      xhr.setRequestHeader('X-CSRF-Token', $('#secureToken').val());
	                     },
                       success: function(data, textStatus, jqXHR) {

                       	 var obj = $.parseJSON(data);
	                    	 if(obj.status == "success"){
                           	alert("Record Saved Succesfully.");
                           	viewCaseProceeding1();
                           	$("#onloadtable").hide();
                           	$("#disposaldiv2").show();
                           	reloadlist();
                         
                           	
                           	$( '#disposalid' ).each(function(){
                           	    this.reset();
                           	});	
                           	$("#addDisposalid").hide();
                           	smoothScroll(document.getElementById('v_CompDtlFrmList4casepro'));
   						//listeprocfordspl(66);
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
	    
	
	
	$('#disposaldateid').datepicker({
		format : 'dd-mm-yyyy',
		todayHighlight : true,
		todayBtn : 'linked',
		autoclose : true

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

function showpooup_d(msg,addclass,removeclass1,removeclass2)
{
	
		$("#messgdec").addClass(addclass);
	$("#messgdec").removeClass(removeclass1);
	$("#messgdec").removeClass(removeclass2);
	$(".alert-Msg").empty(); 
	$(".alert-Msg").append(msg);

	$("#complModal").modal("show");
		
	
}

