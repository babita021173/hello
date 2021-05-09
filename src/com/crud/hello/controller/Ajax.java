package com.crud.hello.controller;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.crud.hello.modal.ApplicationProcessValidationGroups.EmpDetailsEntry;
import com.crud.hello.modal.Country;
import com.crud.hello.modal.Employee;
import com.crud.hello.service.EmployeeService;
import com.crud.hello.utils.CustomResponse;

@Controller
public class Ajax {

	@Autowired
	EmployeeService empService;
	
	
	////////////////////////////////////FOR GOING TO WLECOME PAGE///////////////////////////////////////
	@RequestMapping(value = { "/", "/welcome" }, method = RequestMethod.GET)
	public String showWelcomepage(Model model) throws NoSuchAlgorithmException {

		return "showWelcomepage";

	}
	
	////////////////////////////////////FOR GOING TO REGISTRATION PAGE WITH AJAX///////////////////////////////
	
	@RequestMapping(value="/Empreg1", method=RequestMethod.GET)
	public String gettingRegistrationPage(@ModelAttribute("empregpage1")  Employee emp, Model model)
	{
		
		
		   List<Country> countries=empService.getAllCountry();
			
			 model.addAttribute("NationalList", countries);
		
		return "showEmpformpage1";
	}
	
	 
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	/////////////////////////////////////FOR GOING TO SUBMITION OF PAGE WITH AJAX/////////////////////////////
	
	/*@RequestMapping(value = "/empregSubmit", method = RequestMethod.POST, consumes="application/json")
	
	@ResponseBody
	public String showEmpregSucces(@RequestBody @Validated Employee emp,BindingResult result, Model model) throws IOException {

		if (result.hasErrors()) {
		//	  List<FieldError> errors = result.getFieldErrors();
			System.out.println("NOW WE ARE HERE WITH SOME ERROR!!!");
		//	result.rejectValue("name", "adhgshdgahdsgah");
		//	model.addAttribute("errors", errors);
		//model.addAttribute("empregpage1",emp);
		//return "showEmpformpage1";
		//	System.out.println("AA gya");
			return "showEmpformpage1";
			
		}
		else{
			
			int status = empService.add(emp);
			if (status > 0) {
				return "showEmpformpage1";
			} 
			
			else {

				return "Empreg1";
			}
			
			
		}
	// return "showEmpregSucces";
	}*/
	
	
	
	
	   @RequestMapping(value = "/empregSubmit", method = RequestMethod.POST)
	/*   @ResponseBody public CustomResponse saveUserDetails1(@Validated({ EmpDetailsEntry.class }) @RequestBody Employee emp,BindingResult result, Model model) throws IOException {*/
		 
		   @ResponseBody public CustomResponse saveUserDetails1(@Validated @RequestBody Employee emp,BindingResult result, Model model) throws IOException {
		   List<FieldError> errors = null;
		   
		   if (result.hasErrors()) {
				errors = result.getFieldErrors();
				 System.out.println("In validation");
				return new CustomResponse("errors", errors, null);   
				
				
				
			}
		   
		   else{
				
			   Map<String,String> insertresultmap = new HashMap<String,String>();
			   
		          // user.setEnteredby(user1.getUserid());
			   
			
			   
					 insertresultmap = empService.saveUserDetail(emp);
					
					 if (insertresultmap.get("result").equalsIgnoreCase("dberror")) {
							return new CustomResponse("error", null, null);
						}
					 
						return new CustomResponse("success", null, insertresultmap.get("result"));
				                         
			}
		   
		  
			 
		}
	
	
	
	
	/*@RequestMapping(value = "/empregSubmit", method = RequestMethod.POST, consumes="application/json")
	public String showEmpregSucces( @ModelAttribute("empregpage")  @Validated Employee emp,BindingResult result, Model model) throws IOException {

		if (result.hasErrors()) {
			
			System.out.println("NOW WE ARE HERE WITH SOME ERROR!!!");
			
			return "showEmpformpage1";
		
			//return "redirect:/Empreg";
			
			
		}
		else{
			
			int status = empService.add(emp);
			if (status > 0) {
				return "showEmpformpage1";
			} 
			
			else {

				return "Empreg1";
			}		
		}
	
	
	}
	*/
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	  /* @RequestMapping(value ="/EmpregSubmit1", method = RequestMethod.POST)
	   @ResponseBody
	   public String showEmpregSucces(@ModelAttribute("empregpage1") @Validated @RequestBody Employee emp, BindingResult bindingResult, HttpServletResponse response, Model model,HttpSession session) throws IOException, NoSuchAlgorithmException 
	   {
			  // User user=(User)session.getAttribute("user");
			   
			   if (bindingResult.hasErrors()) {
				 
				   return "showEmpformpage1";
				   
				   List<FieldError> errors = bindingResult.getFieldErrors();
					return new CustomResponse("error", errors, null); // validation
				}
			    else
				{
					  String appID= RandomSaltGenerator.generateVitalAppId();
					  applicationUser.setApplicationId(appID);
					  applicationUser.setEntered_by(user.getUserid());
					  Map<String, String> insertresultmap = appUserService.saveAppUserDetail(applicationUser);

					  if (insertresultmap.get("result").equalsIgnoreCase("dberror")) {
						
						  return new CustomResponse("error", null, null);// dberror
					  }
					
					return new CustomResponse("success", null, insertresultmap.get("result"));
			    	
			    	{
						
						int status = empService.add(emp);
						if (status > 0) {
							return "showEmpregSucces";
						}

				}	 
		}
	
	*/
/*	
	@RequestMapping(value = {"/EmpregSubmit1"}, method = RequestMethod.POST) 
	@ResponseBody public String showEmpregSucces( @RequestParam("name") String name,@RequestParam("password") String pass, Login login)


	{ 
	 
	System.out.println("controller>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    "+name);
	System.out.println("controller>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    "+pass);

	Login data = registerService.getLoginData(login);


	System.out.println("data :: " +data.getName());

	if(data.getName().equalsIgnoreCase(name)&& data.getPassword().equalsIgnoreCase(pass) ){
		System.out.println("in if condition.....");

		return "Logged in successfully!";
	}
	else{
		System.out.println("in else condition of loginforma");
		String status = "abc";
		return status;
	  }

	}
	*/
	
	
	
	
	
	
	
	
	   
}
	
	

