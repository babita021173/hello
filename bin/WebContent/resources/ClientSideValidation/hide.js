$(document).ready(function() {
	
	try {
    $('#example1').DataTable( {
        "ajax": {
        	
        	"url" : "fetchData",
        	"destroy": true,    	
        },
        "columns": [
            { "data": "name" },
            { "data": "designation" },
            { "data": "email" },
            { "data": "contact" },
            { "data": "gender" },
            { "data": "country" }
        ]

    } );
	} catch (e) {
		alert(e);
	}
	
	 $("#usercreationtablepanel11").show();
} );





     /* 		
      		function divdata() {
      	        		 
      	        		
      	        			var example1 = $('#example1').DataTable( {
      	        	
      	        	"ajax" : {
      	        		"url":	"viewAjaxEmp",					
      	        	}
      	        ,
      	      "columns": [
                  { "data": "name" },
                  { "data": "designation" },
                  { "data": "email" },
                  { "data": "contact" },
                  { "data": "gender" },
                  { "data": "country" }
              ]

          } );
      	
      	
      	 $("#usercreationtablepanel11").show();
      		}
    */

/*
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



$(document).ready(function() {
		alert("in view data.js")
		try {
			alert("in try")
		
		  var crimereportlist111 = $('#masterTable').DataTable( {
		  	"ajax" : {
		  
		  		"url": "viewAjaxEmp",					
		  	}
		  ,
		  "destroy": true,
		  "columns" : [ 
		  {
		  "data" : "name"
		  },
		  {
		   "data" : "designation"
		   },
		  {
		   "data" : "email"
		   },
		   {
		    "data" : "contact"
		   },
		   {
			    "data" : "gender"
			   },
		   {
			    "data" : "country"
			   }
			  ],
		 
			  
		  scrollY:        200,
		  scrollCollapse: true,
		  paging:         true

		  }); 
		} catch (e) {
		alert("after data table call in js "+e)	
		}
	});
*/
		






/*var masterTable="";
      $(document).ready(
      		
      		function() {
      			
      			 
      	        	 
      	        		try{ 
      	        masterTable = $('#masterTable').DataTable( {
      	        	
      	        	"ajax" : {
      	        		"url":	"createduserlist",					
      	        	}
      	        ,
      	        "destroy": true,
      	        "columns" : [ 
      	        {
      	        "data" : "userid"
      	        }, 
      	        {
      		     "data" : "organization"
      		     },
      		     {
      			   "data" : "emailid"
      			 },
      	        {
      	        "data" : "contactno"
      	        },
      	        {
      		        "data" : "ministry"
      		    },
      		    {
      		        "data" : "enteredon"
      		    }, 
      		    
      	        ] ,
      	        
      	          
      	       
      	        }) ;
      	       
      	        	
      	*/

/*$(document).ready(
		 
		 function(){
	    $("#name").hover(function(){
	        $("#demo").text("Please Enter Name");
	        }, function(){
	        $("#demo").text("");
	    });
	});

*/