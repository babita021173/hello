<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%-- <%@include %> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>EMPLOYEE EDIT PAGE</title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
#UpdateForm table tr{margin-bottom: 20px;}
.form-control{margin: 5px 0;}
.FeRror{margin: 0px !important;}
</style>


<!-- include CSS -->
<link rel="stylesheet"
	href="<c:url value='/resources/css/bootstrap.min.css'/>">
	
	<!--this is used for glyphcones signs-->
 <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">

<!-- include js -->
<script src="<c:url value='/resources/js/jquery.min.js'/>"
	type="text/javascript"></script>
<script
	src="<c:url value='/resources/js/jquery-validation-1.15.1/dist/jquery.validate.js'/>"></script>
<script
	src="<c:url value='/resources/js/jquery-validation-1.15.1/dist/jquery.validate.min.js'/>"></script>

<link rel="stylesheet" href="<c:url value='/resources/css/styles.css'/>">



<!-- Most Important Script -->

<script
	src="<c:url value='/resources/ClientSideValidation/Update.js'/>"></script>





</head>
<body>

<div align="left">
<b><a href="../welcome"><span class="glyphicon glyphicon-home"></span> HOME</a></b>
</div>

<div align="center">
		<h1>EMPLOYEE EDIT PAGE</h1>

<br>
<br>

<!-- form Elements  -->


<form:form action="EmpupdateSub" commandName="empuppage" id="UpdateForm" method="post" >
<table>
<tbody>
<tr>

<td><form:input path ="id" type="hidden" value="${list.id}" /></td>
</tr>
<tr class="mart">
<td><form:label path="name">Name</form:label><








/td>
<td>
<form:input path="name" value="${list.name}" class="form-control" autocomplete="off" />
<div class="FeRror" ></div>

</td>
<td>  <form:errors path="name" style="color:red;"></form:errors></td>
</tr>

<tr class="mart">
<td><form:label path="designation">Designation</form:label></td>
<td><form:input path="designation" value="${list.designation}" class="form-control" autocomplete="off"/>
<div class="FeRror" ></div>
</td>
<td><form:errors path="designation" style="color:red;"></form:errors></td>

</tr>

<tr class="mart">
<td><form:label path="emailid">E-MAIL:</form:label></td>
<td><form:input path="emailid" value="${list.emailid}" class="form-control" autocomplete="off"/>
<div class="FeRror"></div>
</td>
<td><form:errors path="emailid" style="color:red;"></form:errors></td>
</tr>

<tr class="mart">
<td><form:label path="contact" >CONTACT NUMBER:</form:label></td>
<td><form:input path="contact" value="${list.contact}" class="form-control" maxlength="10" autocomplete="off"/>
<div class="FeRror"></div>
</td>
<td><form:errors path="contact" style="color:red;"></form:errors></td>
</tr>

<tr class="mart">
<td>
<form:label path="gender">GENDER:</form:label>
</td>
<td>

<%-- <%c:if("${list.gender}='MALE'") %>
<input type="radio" name="gender" value="MALE"/>MALE
<input type="radio" name="gender" value="FEMALE"/>FEMALE --%>


<%--  <% if("${list.gender}".equals("FEMALE")){ %>

 <input type="radio" name="gender" value="MALE" checked="checked"> MALE 
 <input type="radio" name="gender" value="FEMALE">FEMALE

   <%}else{ %>
          <input type="radio" name="gender" value="MALE"> MALE 
         <input type="radio" name="gender" value="FEMALE" >FEMALE

    <% } %>   --%>




 <c:choose>
   <c:when test="${(list.gender).equalsIgnoreCase('FEMALE')}">
<form:radiobutton path="gender" value="MALE" />MALE <form:radiobutton path="gender" value="FEMALE" checked="checked"/>FEMALE    
   </c:when>
   <c:otherwise >
<form:radiobutton path="gender" value="MALE" checked="checked"/>Male <form:radiobutton path="gender" value="FEMALE"  />FEMALE       
   </c:otherwise>
</c:choose> 






</td> 
</tr>

<!-- Ask from somebody how to do that -->
<tr class="mart">
<td><form:label path="country" >COUNTRY:</form:label></td>
<td>
<form:select path="country" id="country" class="form-control" >
<form:option value="${list.country}"></form:option>
<form:options items="${NationalList}" itemValue="country_name" itemLabel="nationality" />

</form:select>
</td>
<%-- <td><form:errors path="country" /></td> --%>
</tr>
<tr class="mart">
<td align="center"><form:button type="submit" value="UPDATE" class="btn btn-primary">UPDATE
</form:button>
</td>
<td align="center">
<form:button type="reset" value="Reset" class="btn btn-primary"><span class="glyphicon glyphicon-refresh"></span>RESET
</form:button>
</td>
</tr>
</tbody>
</table>

</form:form>
</div>

<br>
<br>
<center>
		<h3>
	<a href="../viewEmpdetails">To view Employee details click here</a>
		</h3>
</center>

</body>
</html>