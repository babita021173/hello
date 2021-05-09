<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<spring:htmlEscape defaultHtmlEscape="true" />

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<title>Submit Page</title>
<spring:htmlEscape defaultHtmlEscape="true" />

<style>
#EmpForm table tr{margin-bottom: 20px;}
.form-control{margin: 5px 0;}
.FeRror{margin: 0px !important;}
</style>


<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- include CSS -->

<link rel="stylesheet"
	href="<c:url value='/resources/css/bootstrap.min.css'/>">
	
	 <!--this is used for glyphcones signs-->
 <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"> 

<!-- include js -->
<script src="<c:url value='/resources/js/jquery.min.js'/>" type="text/javascript"></script>
<script src="<c:url value='/resources/js/bootstrap.min.js'/>" type="text/javascript"></script>
	
<script src="<c:url value='/resources/js/jquery-validation-1.15.1/dist/jquery.validate.js'/>"></script>
 <%-- <script
	src="<c:url value='/resources/js/jquery-validation-1.15.1/dist/jquery.validate.min.js'/>"></script>  --%>

<link rel="stylesheet" href="<c:url value='/resources/css/styles.css'/>">
<!-- <script src="resources/ClientSideValidation/hide.js"
	type="text/javascript"></script> -->
	
	

<script	src="<c:url value='/resources/js/jquery.serializeJSON-master/jquery.serializejson.js'/>" type="text/javascript"></script>
<script	src="<c:url value='/resources/js/jquery-validation-1.15.1/dist/additional-methods.js'/>" type="text/javascript"></script>
<script	src="<c:url value='/resources/js/smoothScroll.js'/>"type="text/javascript"></script>
<script src="<c:url value='resources/ClientSideValidation/adminUserOk.js'/>"></script>

	<script>
/* 	$(document).ready( function(){
		
		$("#masterFormDetails").focus(function(){
	
			$(this).css("background-color","#cccccc");
		});
		
		$("#masterFormDetails").blur(function(){
			
			$(this).css("background-color","#ffffff");
		});
		
}); */ 
	
/* 	$(document).ready(function(){
	    $("#name").focus(function(){
	        $(this).css("background-color", "#cccccc");
	    });
	    $("#name").blur(function(){
	        $(this).css("background-color", "#ffffff");
	    });
	});
	 */
	
	 function isNumberKey(evt) {
		    var charCode = (evt.which) ? evt.which : event.keyCode;
		    if ((charCode < 48 || charCode > 57))
		        return false;

		    return true;
		}
	 
	</script>
	

	</head>
<body>
	
	<div class="container-fluid">
		<div align="left">
			<b><a href="welcome"><span class="glyphicon glyphicon-home"></span>HOME</a></b>
		</div>
     <center>
			<div class="page-header">
				<strong><h1><b>EMPLOYEE REGISTRATION WITH THE HELP OF AJAX</b></h1></strong>
			</div>
			<div class="jumbotron">
<div class="wrapper">
            <div class="middle_cont">
             <div class="login-wrap">
				<form:form  modelAttribute="empregpage1" id="masterFormDetails" method="post">

					<table>

                      <tbody>
						<tr class="mart">
							<td><label >NAME:</label></td>
							<td><form:input path="name" id="name" class="form-control" 
									placeholder="Enter Your Name" autocomplete="off" />
	                       <div class="FeRror"></div>
	                        
							</td>
							
							<td>
							<form:errors path="name" style="color:red;"></form:errors>
							</td>
						</tr>
						<tr class="mart">
							<td><form:label path="designation">DESIGNATION:</form:label></td>
							<td><form:input path="designation" class="form-control"
									placeholder="Enter Your Designation" id="designation" autocomplete="off" />
									<div class="FeRror" style="display: block;"></div>
							 </td>
							<td>
								<div class="FeRror"></div> <form:errors path="designation" />
							</td>

						</tr>
						<tr class="mart">
							<td><form:label path="emailid">E-MAIL:</form:label></td>
							<td><form:input path="emailid" id="email" class="form-control"
									placeholder="Enter Your email id" autocomplete="off" />
									<div class="FeRror"></div>
									
									</td>
							<td><form:errors path="emailid" /></td>

						</tr>

						<tr class="mart">
							<td><form:label path="contact">CONTACT NUMBER:</form:label></td>
							<td><form:input path="contact" id="contact" class="form-control" onkeypress="return isNumberKey(event)"
									placeholder="Enter Your contact number" maxlength="10" autocomplete="off" />
									<div class="FeRror" style="display: block;"></div>
									</td>
							<td><form:errors path="contact" /></td>
						</tr>
						<tr class="mart">

							<td><form:label path="gender">GENDER:</form:label>
							
							</td>
							<td><form:radiobutton path="gender" id="gender" value="MALE"></form:radiobutton>MALE
							<div class="FeRror"></div>
						    <form:radiobutton path="gender" id="gender" value="FEMALE"></form:radiobutton>FEMALE
							
							</td>
							<td><form:errors path="gender" /></td>

						</tr>
						<tr class="mart">
							<td><form:label path="country">COUNTRY:</form:label></td>
							<td><form:select path="country" id="country" class="form-control">
								<%-- 	<form:option value="">------Choose Country-----</form:option>
									<form:option value="India">India</form:option>
									<form:option value="China">China</form:option>
									<form:option value="Japan">Japan</form:option>
									<form:option value="Pakistan">Pakistan</form:option> --%>
									 <form:option value="" label="--Select nationality --" />
						   <form:options items="${NationalList}" itemValue="country_name" itemLabel="nationality" />
									
								</form:select>
								<div class="FeRror"></div>
								</td>
							<td><form:errors path="country" /></td>


						</tr>
						<tr align="center" class="mart">



							<td>
							
							<form:button type="submit" value="Submit" id="12" class="btn btn-primary">Submit
							
							<span class="glyphicon glyphicon-saved"></span>
							</form:button>

							</td>
							<td>
							<form:button type="reset" value="Reset" class="btn btn-primary" >Reset
							
								<span class="glyphicon glyphicon-refresh"></span>
							</form:button>
							</td>
							
						</tr>
                    </tbody>
					</table>
				</form:form>
</div></div>
    </div>
			</div>
		</center>

	</div>
	
	
	  <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">

			<div class="modal-body" style="padding: 0;">
				<div id="messg"
					class="alert alert-success alert-info alert-danger alert-dismissible"
					style="margin-bottom: 0;">
					<a href="#" class="close" data-dismiss="modal" aria-label="close">&times;</a>
					<div class="alert-Msg">
						<strong>Success!</strong> Indicates a successful or positive
						action.
					</div>
				</div>
			</div>

		 </div>
	  </div>
    </div>
	
	   <div class="modal fade " id="errormodal" tabindex="-1" role="dialog" aria-labelledby="errormodal" aria-hidden="true">
			                       <div class="modal-dialog">
				                     <div class="modal-content">
					                   <div class="modal-header">
						                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						                 <h4 class="modal-title text-center">Server Side Error</h4>
                      				   </div>
					                  <div class="modal-body no_padding">
						              <table class="table table-striped table-bordered"	style="margin-bottom: 0px;">
							           <thead>
								        <tr>
									     <th>SrNo</th>
									     <th>Field Name</th>
									     <th>Error Message</th>
								        </tr>
							           </thead>
							          <tbody id="errortablebody">
							          </tbody>
						             </table>
					                </div>
 					                <div class="modal-footer" style="padding: 7px;">
						              <button type="button" class="btn btn-default clo_button" data-dismiss="modal">Close</button>
					                </div>
				                  </div>
			                    </div>
		                       </div>
	
	</body>
	</html>
	
	
	
	
	