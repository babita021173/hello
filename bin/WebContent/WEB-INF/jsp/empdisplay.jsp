<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
   
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>EMPLOYEE DETAILS</title>



<link rel="stylesheet"
	href="<c:url value='/resources/css/bootstrap.min.css'/>"> 
	 <link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
	
	<script src="<c:url value='/resources/js/jquery.min.js'/>"	type="text/javascript"></script>
	 <script src="<c:url value='/resources/js/bootstrap.min.js'/>" type="text/javascript"></script>  
   <script src="<c:url value='resources/ClientSideValidation/pdf.js'/>"></script> 
   
 <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    
 <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
 
 <!--this is used for glyphcones signs-->
 <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"> 


 
 <script>

 $(document).ready(function() {
     $('#example').DataTable();
 } );
 </script>
 
 

  <script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>


</head>
<body>

<div class="container-fluid">

<div align="left">
<b><a href="welcome"><span class="glyphicon glyphicon-home"></span> HOME</a></b>
</div>

<div align="center">
<h1><b>EMPLOYEE RECORDS</b></h1>
</div>

<h2>Filterable Table</h2>
<p>Type something in the input field to search the table for names</p> 
<div class="col-md-2">
<div class="input-group"> 
		<input id="myInput" class="form-control" type="text" placeholder="Search.."> 
		<span class="input-group-addon">
			<i class="glyphicon glyphicon-search"></i>
		</span>
	</div></div>
<br><br>

<div align="center">

<div id="myDIV">

<form:form modelAttribute="getCreatedDetails"  id="display" method="get">
<table id="example" border="2" cellpadding="2" width="70%" align="center" class="table table-striped table-inverse">
<thead class="thead-inverse">
<tr>
<th>EMPLOYEE ID:</th>
<th>EMPLOYEE NAME:</th>
<th>EMPLOYEE DESIGNATION:</th>
<th>EMPLOYEE EMAIL:</th>
<th>EMPLOYEE CONTACT:</th>
<th>EMPLOYEE GENDER:</th>
<th>EMPLOYEE COUNTRY:</th>
<th>EDIT:</th>
<th>DELETE:</th>
</tr>
</thead>



<c:forEach var="amit" items="${Emplist}">
<tbody id="myTable">
<tr>
<!-- here all the names are used are from com.crud.hello.modal page -->
<td><p>${amit.id}</p></td>
<td><p>${amit.name}</p></td>
<td><p>${amit.designation}</p></td>
<td><p>${amit.emailid}</p></td>
<td><p>${amit.contact}</p></td>
<td><p>${amit.gender}</p></td>
<td><p>${amit.country}</p></td>
<!--<td><a href="editemp">Edit</a></td> -->

<td><a class="btn btn-primary" href="editemp/${amit.id}"><span class="glyphicon glyphicon-edit"></span> Edit</a></td>
<td><a class="btn btn-danger"  href="deleteemp/${amit.id}"><span class="glyphicon glyphicon-trash"></span> Delete</a></td>
</tr>
</tbody>
</c:forEach>

<tr align="center" class="info">
<td colspan="9">

 <!-- <div class="input-prepend">
   <span class="add-on"><i class="icon-user icon-white"></i></span> -->

<!-- <input type="button" type="submit" value="EXPORT" class="btn btn-primary" onclick="generatepdf()"> -->

<a  class="btn btn-primary" onclick="generatepdf()"><span class="glyphicon glyphicon-export"></span> EXPORT</a>
 
 
   
<!-- </div> -->
  
</td>
</tr>
</table>

</form:form>
</div>

</div>
<center><h3><a href=Empreg>If you want to add more employee click here</a></h3></center>

</div>


</body>
</html>