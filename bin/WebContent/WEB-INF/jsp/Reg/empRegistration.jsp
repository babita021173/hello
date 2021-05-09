<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<title>Submit Page</title>
<spring:htmlEscape defaultHtmlEscape="true" />

<style>
#EmpForm table tr{margin-bottom: 20px;}

.FeRror{margin: 0px !important;}
.input-group-addon{min-height: 34px; max-height: 34px; float: left !important; width: 8% !important;}
.input-group .form-control{float: right !important; width: 92% !important;}
</style>

<!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> -->
<meta name="viewport" content="width=device-width, initial-scale=1">

 
 <!--this is used for glyphcones signs-->
 <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"> 

<!-- include CSS -->
<link rel="stylesheet"
	href="<c:url value='/resources/css/bootstrap.min.css'/>">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- include js -->
<script src="<c:url value='/resources/js/jquery.min.js'/>" type="text/javascript"></script>
<script
	src="<c:url value='/resources/js/jquery-validation-1.15.1/dist/jquery.validate.js'/>"></script>
<script
	src="<c:url value='/resources/js/jquery-validation-1.15.1/dist/jquery.validate.min.js'/>"></script>

<link rel="stylesheet" href="<c:url value='/resources/css/styles.css'/>">
<!-- <script src="resources/ClientSideValidation/hide.js"
	type="text/javascript"></script> -->
<script
	src="<c:url value='resources/ClientSideValidation/adminUser.js'/>"></script>
	
	<script src="<c:url value='/resources/js/bootstrap.min.js'/>" type="text/javascript"></script>

<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
</script>
	
	
	
<%-- 	
 <script
	src="<c:url value='resources/ClientSideValidation/hide.js'/>"></script> --%>
	
	
	<%-- <script	src="<c:url value='/resources/js/jquery.serializeJSON-master/jquery.serializejson.js'/>" type="text/javascript"></script>
  --%>


<!-- <script type="text/javascript">
	$(document).ready(
			function() {

				$("#EmpForm").validate(
						{
							rules : {
								name : {
									required : true

								},
								designation: {
									
									required : true
								},

							},
							messages : {
								name : {
									required : "Please Enter Name"
								},
								
								designation: {
									
									required : "Please Enter Designation"
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

								form.submit();
							}

						});
			});
</script> -->
<script>
/* validation For Contact Number */
function isNumberKey(event){
	var charCode= (event.which)?event.which:event.keyCode;
	if((charCode >= 48 && charCode <= 57) || charCode == 46 || charCode== 8 || charCode== 37 || charCode== 39 )
		return true;
	
	return false;	
}

/* $(document).ready(function(){
$('#email').val($(this).val().toLowerCase());
}); */

/* For Converting Given Input In LowerCase */
           
 function myFunction() 
            {
		    var x = document.getElementById("email");
		    x.value = x.value.toLowerCase();
}	
 



/* function convertToLowerCase(){
    var name=document.getElementById("email").value;   
if(name!="")
{
 
	name=name.toLowerCase();
 
 }
document.getElementById("email").value=name;

}
 */






/* Disable Right Click */
function DisableRightClick(event)
{
//For mouse right click 
if (event.button==2)
{
alert("Right Clicking not allowed!");
}
}




</script>




</head>
<body>

	<!-- <h1>Ram Ram</h1> -->



	<div class="container-fluid content_area">
	 <div class="container">
		<div align="left">
			<b><a href="welcome"><span class="glyphicon glyphicon-home"></span>HOME</a></b>

		</div>

<!-- <iframe src="http://free.timeanddate.com/clock/i65wbune/n176/szw110/szh110/cf100/hnce1ead6" frameborder="0" width="110" height="110"></iframe> -->
  
       
       	
		<center>
			<div class="page-header">
				<strong><h1><b>EMPLOYEE REGISTRATION DETAILS<b></h1></strong>
			</div>
			
			
			
<div id="loginbox" class="mainbox col-md-9 col-md-offset-2 col-sm-9 col-sm-offset-2"> 
        
            
    <div class="panel panel-default" align="center" >
			
			
			
			
			
			<div class="jumbotron">

				<form:form action="EmpregSubmit" commandName="empregpage"
					id="EmpForm" method="post">
<div class="alert alert-success">
    <strong>${msg}</strong>
  </div>
					<table>

                      <tbody>
						<tr class="mart">
							<td><form:label path='name'>NAME:</form:label><sup>*</sup></td>
							<td> 
							<div class="form-group">
								<div class="input-group">
	    						<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i></span>
								
								<form:input path="name" id="name" class="form-control" required="true" onmousedown="DisableRightClick(event)"
								data-toggle="tooltip" title="1. Name must be filled" data-placement="right" oncopy="return false" onpaste="return false" oncut="return false" placeholder="Enter Your Name" autocomplete="off" />
		                        
		                       <div class="FeRror" style="display: block;"></div>
		                      <form:errors path="name" class="FeRror" style="color:red;"></form:errors>
								</div>
								
							</div>
							
							</td>
							<%-- <td>
							<form:errors path="name"   style="color:red;"></form:errors>
							</td> --%>
							
						</tr>
						<tr class="mart">
							<td><form:label path="designation">DESIGNATION:</form:label></td>
							<td><div class="form-group">
							<div class="input-group">
							<span class="input-group-addon">
							<i class="fa fa-users"></i>
							</span>
							
							<form:input path="designation" class="form-control"
									placeholder="Enter Your Designation" id="designation" autocomplete="off" oncopy="return false" onpaste="return false" oncut="return false" onmousedown="DisableRightClick(event)"
									/>
									<div class="FeRror" style="display: block;">
									
								<form:errors path="designation" class="FeRror" style="color:red;"/>	
									</div>
							</div>
							</div>
							 </td>
						<!-- 	 <td>
							<h1>{{designation}}</h1>
								 
							 </td> -->

						</tr>
						<tr class="mart">
						<td>
						
						
						<form:label path="emailid">E-MAIL:</form:label></td>
							
							
							<td>
							
							
							 <!-- <div class="Vtooltip"> -->
							 
						<!--   <div class="input-group">
    						<div class="input-group-addon">
      							<b>@</b>
    					   </div>
						</div> -->
						
						<div class="form-group">
						<div class="input-group">
						<span class="input-group-addon">
						<i class="glyphicon glyphicon-envelope"></i>
						</span>
							<form:input path="emailid" id="email" class="form-control" onkeyup="myFunction()" oncopy="return false" onpaste="return false" oncut="return false" onmousedown="DisableRightClick(event)"
									placeholder="Enter Your email id" autocomplete="off" />
									<div class="FeRror">
									<form:errors path="emailid" class="FeRror" style="color:red;"/>
									
									</div>
						
						
						</div>
									
									</div>
					<!-- 	<div class="Vtooltiptext_right vtooltip_content">                         
	                     <ul> 
	                      <li id="minlength3" class="pp_invalid">Atleast 8 character. </li>
	                      <li id="maxlength3" class="pp_invalid">Maximum 15 characters. </li>
	                      <li id="number3" class="pp_invalid">Atleast one numeric character. </li>
	                      <li id="specialCh3" class="pp_invalid">Atleast one special character from ! @ # $ % ^ & * ( ) _ </li>
	                      <li id="upperCs3" class="pp_invalid">Atleast one uppercase letter </li>
	                      <li id="lowerCs3" class="pp_invalid">Atleast one lowercase letter. </li>                            
	                     </ul>
                	   </div>
                	   </div> -->
									
									
									
									
									
									
									
									
									</td>
									
									
						<%-- 			
							<td><form:errors path="emailid" style="color:red;"/></td> --%>

						</tr>

						<tr class="mart">
							<td><form:label path="contact">CONTACT NUMBER:</form:label></td>
							<td>
							<div class="form-group">
							<div class="input-group">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-phone">
							</i></span>
							<form:input path="contact" id="contact" class="form-control" onkeypress="return isNumberKey(event)" onmousedown="DisableRightClick(event)"
		oncopy="return false" onpaste="return false" oncut="return false" placeholder="Enter Your contact number" maxlength="10" pattern="[0-9]{10}" title="Enter 10 Digit numeric value" autocomplete="off"/>
																	<div class="FeRror" style="display: block;">
																	<form:errors path="contact" class="FeRror" style="color:red;"/>
																	
																	</div>
								</div>
								</div>
									</td>
						<%-- 	<td><form:errors path="contact" style="color:red;" /></td> --%>
						</tr>
						<tr class="mart">

							<td><form:label path="gender">GENDER:</form:label>
							
							</td>
							<td>
							
							&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp
							
							<form:radiobutton path="gender" id="gender" value="MALE"></form:radiobutton>MALE
							<div class="FeRror">
							<form:errors path="gender" class="FeRror" style="color:red;padding-left: 284;"/>
							</div>
							&nbsp&nbsp
							&nbsp
						    <form:radiobutton path="gender" id="gender" value="FEMALE"></form:radiobutton>FEMALE
							
							
							</td>
							<%-- <td><form:errors path="gender" style="color:red;"/></td> --%>

						</tr>
						<tr class="mart">
							<td><form:label path="country">COUNTRY:</form:label></td>
							
							
							
							
							<td>
							<div class="form-group">
							<div class="input-group">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-list"></i>
							</span>
							
							<form:select path="country" id="country" class="form-control">
							
								<%-- 	<form:option value="">------Choose Country-----</form:option>
									<form:option value="India">India</form:option>
									<form:option value="China">China</form:option>
									<form:option value="Japan">Japan</form:option>
									<form:option value="Pakistan">Pakistan</form:option> --%>
									
									 <form:option value="" label="--Select nationality --" />
						   <form:options items="${NationalList}" itemValue="country_name" itemLabel="nationality" />
									
								</form:select>
								<div class="FeRror">
								<form:errors path="country" class="FeRror" style="color:red;padding-left: 294;"/>
								</div>
								</div>
								</div>
								</td>
						<%-- 	<td><form:errors path="country" style="color:red;"/></td> --%>


						</tr>
						<tr align="center" class="mart">



							<td>
							<br>
							<form:button type="submit" value="Submit" class="btn btn-primary" onclick="hello()">Submit
							
							<span class="glyphicon glyphicon-saved"></span>
							</form:button>

							</td>
							<td>
							<br>
							<form:button type="reset" value="Reset" class="btn btn-primary">Reset
							
							<span class="glyphicon glyphicon-refresh"></span>
							</form:button>
							</td>
							
						</tr>
                    </tbody>
					</table>
				</form:form>





			</div>
		</center>
</div>

</div>
</div>
</div>
</div>
</body>
	</html>



