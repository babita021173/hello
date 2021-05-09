<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<link rel="stylesheet"
	href="<c:url value='/resources/css/dataTables.bootstrap.min.css'/>">

<link rel="stylesheet"
	href="<c:url value='/resources/css/jquery.dataTables.min.css'/>">
 <!--this is used for glyphcones signs-->
 <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"> 
	
	
<script src="<c:url value='/resources/js/jquery-2.1.4.min.js'/>"></script>
<script src="<c:url value='/resources/js/jquery.dataTables.min.js'/>"></script>



<link rel="stylesheet"
	href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-1.12.4.js "></script>
<script
	src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>

<%-- <script src="<c:url value='resources/ClientSideValidation/hide.js'/>"></script> --%>

<script
	src="<c:url value='/resources/js/jquery.serializeJSON-master/jquery.serializejson.js'/>"
	type="text/javascript"></script>


<title>EMPLOYEE DETAILS</title>
<script>
  $(document).ready(function() {
	  /* alert("Hello document is going to Load....") */
	
    $('#example1').DataTable( {
        "ajax": {
        	"url" : "fetchData",
        	"type" : "GET"
        },
        "columns": [
            { "data": "name" },
            { "data": "designation" },
            { "data": "emailid" },
            { "data": "contact" },
            { "data": "gender" },
            { "data": "country" }
            //{"defaultContent": "<button>Click!</button>"}
        ]

    });
	
/* alert("now completed......."); */ //$("#usercreationtablepanel11").show();
} );

  </script>
</head>
<body>
	<div class="container-fluid">
		<div align="left">
			<b><a href="welcome"><span class="glyphicon glyphicon-home"></span> HOME</a></b>

		</div>
		<br>
		

	<div class="panel-body">
	
	<div class="jumbotron">


		<table width="100%" class="display" id="example1" cellspacing="0" align="center">
			<thead>
				<tr>
					<th>Name</th>
					<th>Designation</th>
					<th>Email</th>
					<th>Contact</th>
					<th>Gender</th>
					<th>Country</th>
				</tr>
			</thead>

			<tfoot>
				<tr>
					<th>Name</th>
					<th>Designation</th>
					<th>Email</th>
					<th>Contact</th>
					<th>Gender</th>
					<th>Country</th>
				</tr>
			</tfoot>
			<tbody>
			</tbody>
		</table>
	</div>
	</div>
	</div>
</body>
</html>
