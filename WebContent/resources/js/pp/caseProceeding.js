
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


function viewCaseProceeding(eprocid) {
	//  alert("case pro "+eprocid);
	 
	  $.ajax({
			
			url : "listeprocforCasePro?eprocid=" + eprocid,
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
				$("#caseProlist").append("<thead><tr><th>Eproc Id</th><th>Hearing Date</th><th>Purpose of Hearing</th><th>Next Hearing Date</th>" +
						"<th>Purpose of Next Hearing</th><th>Comment</th><th>Status</th></thead>");
				if(data.length>0){
					for (var i = 0; i < data.length; i++) {

						$("#caseProlist")
								.append(
										"<tr><td>"
												+ data[i].eproc_id
												+ "</td><td>"
												+ data[i].hearing_date
												+ "</td><td>"
												+ data[i].purpose_cd
												+ "</td>"
												+ "<td>"
												+ data[i].nxt_hearing_date
												+ "</td>"
												+ "<td>"
												+ data[i].nxt_purpose_cd
												+ "</td>"
												+ "<td>"
												+ data[i].comnt_by_pp
												+ "</td>"
												+ "<td>"
												+ data[i].case_status_cdDesc
												+ "</td>");
				}	}
				else{
					
					$("#caseProlist")
					.append("<tr><td colspan='7' >No data </td>");
				}
					
					$("#v_CompDtlFrmList4casepro").show();
					smoothScroll(document.getElementById('v_CompDtlFrmList4casepro'));
			} else {
				$("#caseProlist").empty();
				$("#caseProlist")
				.append("<thead><tr><th>Eproc Id</th><th>Hearing Date</th><th>Purpose of Hearing</th><th>Next Hearing Date</th>" +
						"<th>Purpose of Next Hearing</th><th>Comment</th><th>Status</th>");
				
				$("#caseProlist")
				.append("<thead><tr><td colspan='7' >No data </td>");
			}

		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			alert(textStatus, errorThrown);
		}
	});
	  
	
}

function addNextHearing(){
	$("#caseprocFormId").show();
	smoothScroll(document.getElementById('caseprocFormId'));
}



jQuery(function() {
	jQuery('#saveCaseProid').click(function() {
		
		 var jsonData = JSON.stringify($("#saveCaseProDetailsId").serializeFormJSON())
		  var token = GetNewToken();
          $("#secureToken").val(token);
		 $
         .ajax({
             url: 'saveCaseProDetails',
             data: jsonData,
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

             	 
             	 if(data==1){
                 	alert("Record Saved Succesfully.");
                 	

                   

                 } else {
                 	
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