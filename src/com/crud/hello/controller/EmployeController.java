package com.crud.hello.controller;

import java.awt.Dialog.ModalExclusionType;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.crud.hello.modal.Country;
import com.crud.hello.modal.Employee;
import com.crud.hello.service.EmployeeService;
import com.crud.hello.utils.DataTable;
import com.crud.hello.utils.RegistrationModuleValidation.RegistrationValidation;
import com.crud.hello.validator.EmpDetailsEntry;

@Controller
public class EmployeController {

	@Autowired
	EmployeeService empService;

	////////////////////////////////////// FOR GOING TO WELCOME
	////////////////////////////////////// PAGE///////////////////////////////////////////////////
	/*
	 * @RequestMapping(value = { "/", "/welcome" }, method = RequestMethod.GET)
	 * public String showWelcomepage(Model model) throws
	 * NoSuchAlgorithmException {
	 * 
	 * return "showWelcomepage";
	 * 
	 * }
	 */
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/////////////////////////////////////// FOR GOING TO REGISTRATION
	/////////////////////////////////////// PAGE/////////////////////////////////////////////
	/*
	 * @RequestMapping(value = "/Empreg", method = RequestMethod.GET) public
	 * String showEmpform(@ModelAttribute("empregpage") Employee emp,Model
	 * model, HttpSession session) throws NoSuchAlgorithmException {
	 * 
	 * model.addAttribute("empregpage", emp);
	 * 
	 * return "showEmpformpage"; }
	 */

	/*
	 * @RequestMapping(value = "/Empreg", method = RequestMethod.GET) public
	 * ModelAndView student() { return new ModelAndView("Empreg", "command", new
	 * Employee()); }
	 * 
	 * @ModelAttribute("empregpage") public Employee createStudentModel() {
	 * return new Employee(); }
	 */

	/*
	 * @RequestMapping(value = "/Empreg", method = RequestMethod.GET) public
	 * String showEmpform() {
	 * 
	 * return "showEmpformpage"; }
	 */

	/*
	 * @RequestMapping(value="/Empreg", method=RequestMethod.GET) public
	 * ModelAndView
	 * gettingRegistrationPage( @Validated({RegistrationValidation.class})@
	 * ModelAttribute("empregpage") Employee emp,Model model) { return new
	 * ModelAndView("showEmpformpage", "command", emp);
	 * 
	 * }
	 */

	@RequestMapping(value = "/Empreg", method = RequestMethod.GET)
	public String gettingRegistrationPage(@ModelAttribute("empregpage") Employee emp,
			RedirectAttributes redirectAttributes, Model model) {
		Employee empGet = new Employee();

		model.addAttribute("empregpage", empGet);
		List<Country> countries = empService.getAllCountry();
		model.addAttribute("NationalList", countries);

		return "showEmpformpage";

	}

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////// FOR SUBMITION OF REGISTRATION
	//////////////////////////////////// PAGE////////////////////////////////////////////
	@RequestMapping(value = "/EmpregSubmit", method = RequestMethod.POST)
	public String showEmpregSucces(@ModelAttribute("empregpage") @Validated({EmpDetailsEntry.class}) Employee emp,
			RedirectAttributes redirectAttributes, BindingResult result, Model model) throws IOException {
		System.out.println("we are here....!!!");
		
		
		if (result.hasErrors()) {
			System.out.println("dsfsdfds ffd dsf ");

			List<Country> countries = empService.getAllCountry();
			model.addAttribute("NationalList", countries);

			return "showEmpformpage";
			// return "showEmpformpage";

		} else {

			int status = empService.add(emp);
			if (status > 0) {
				redirectAttributes.addFlashAttribute("msg", "Record save Sucessfully");
			}

			else {
				redirectAttributes.addFlashAttribute("msg", "Record not save Sucessfully");

			}

			return "redirect:Empreg";
		}
		// return "showEmpregSucces";
	}
	/*
	 * @RequestMapping(value = "/EmpregSubmit", method = RequestMethod.POST)
	 * 
	 * @ResponseBody public CustomResponse
	 * saveUserDetails1(@Validated({RegistrationValidation.class}) @RequestBody
	 * Employee user, BindingResult bindingResult,@ModelAttribute("user") User
	 * user1, Model model,RedirectAttributes
	 * redirectAttributes,HttpServletRequest req,HttpSession
	 * session,HttpServletResponse response) throws IOException {
	 * List<FieldError> errors = null;
	 * 
	 * if (bindingResult.hasErrors()) { errors = bindingResult.getFieldErrors();
	 * 
	 * return new CustomResponse("errors", errors, null);
	 * 
	 * } else{
	 * 
	 * }
	 * 
	 * Map<String,String> insertresultmap = new HashMap<String,String>();
	 * 
	 * user.setEnteredby(user1.getUserid()); insertresultmap =
	 * saveUserDetailService.saveUserDetail(user);
	 * 
	 * if (insertresultmap.get("result").equalsIgnoreCase("dberror")) { return
	 * new CustomResponse("error", null, null); }
	 * 
	 * return new CustomResponse("success", null,
	 * insertresultmap.get("result"));
	 * 
	 * }
	 */

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////// FOR VIEW EMPLOYEE DETAILS
	////////////////////////////////// PAGE////////////////////////////////////////////////////
	@RequestMapping(value = "/viewEmpdetails", method = RequestMethod.GET)

	public String viewemppage(Employee emp, Model model, HttpServletResponse response,
			RedirectAttributes redirectAttributes) throws NoSuchAlgorithmException {

		model.addAttribute("Emplist", empService.getAllEmployee());

		return "viewemppage";
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/////////////////////////////////// FOR DELETING EMPLOYEE
	/////////////////////////////////// RECORD//////////////////////////////////////////////////////
	@RequestMapping(value = "/deleteemp/{id}", method = RequestMethod.GET)
	public String delete(@PathVariable int id, RedirectAttributes redirectAttributes) throws NoSuchAlgorithmException {

		empService.delete(id);
		return "redirect:/viewEmpdetails";
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	///////////////////////////////// FOR GOING TO EMPLOYEE EDITING
	///////////////////////////////// PAGE///////////////////////////////////////////////////
	@RequestMapping(value = "/editemp/{id}", method = RequestMethod.GET)
	public String vieweditpage(@PathVariable int id, @ModelAttribute("empuppage") Employee employee, Model model)
			throws NoSuchAlgorithmException {

		List<Country> countries = empService.getAllCountry();

		model.addAttribute("NationalList", countries);

		employee = empService.getStudentOnId(id);

		// System.out.println("eMPLOYEE Id :: " + employee.getid());
		model.addAttribute("list", employee);

		return "vieweditpage";

	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/////////////////////////////////// FOR UPDATING EMPLOYEE
	/////////////////////////////////// RECORDS///////////////////////////////////////////////////////

	@RequestMapping(value = "/editemp/EmpupdateSub", method = RequestMethod.POST)
	public String empupdatepage(@ModelAttribute("empuppage") @Validated Employee emp, BindingResult result, Model model)
			throws IOException {

		System.out.println("hello----------");

		if (result.hasErrors()) {

			List<Country> countries = empService.getAllCountry();

			model.addAttribute("NationalList", countries);

			model.addAttribute("list", emp);
			System.out.println("hello");
			// return "redirect:/editemp/87";
			return "vieweditpage";

		}

		else {

			int status = empService.update(emp);

			if (status > 0) {

				return "empupdatepage";
			}

			else {

				// return "redirect:/editemp/{84}";

				return "vieweditpage";

			}
		}
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////// For Showing Ajax DataTable
	////////////////////////////////// ////////////////////////////////////////////////////////////////

	@RequestMapping(value = "/viewAjaxEmp", method = RequestMethod.GET)

	public String viewAjaxPage(Employee emp, Model model, HttpServletResponse response,
			RedirectAttributes redirectAttributes) throws NoSuchAlgorithmException {

		System.out.println("wER ARE ARE HERE.....");
		return "viewAjaxPage";

	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	///////////////////////////////// For Sending Data to
	///////////////////////////////// DataTable//////////////////////////////////////////////////////////////

	@RequestMapping(value = "/fetchData", method = RequestMethod.GET)
	public @ResponseBody DataTable getApprovedUserList(Model model, Employee emp, HttpSession session) {

		DataTable dtobj = new DataTable();
		Employee u = (Employee) session.getAttribute("emp");

		dtobj.setData(empService.getAllEmployee());
		// System.out.println("RRRA J FETCHING DATA..... " +dtobj);

		return dtobj;
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////// For generating Pdf of given
	//////////////////////////////////// Employees////////////////////////////////////////////////////////

	@RequestMapping(value = "/dynamicPdfGenerate", method = RequestMethod.GET)
	public ModelAndView pdfgenerate(@ModelAttribute("getCreatedDetails") Employee emp, HttpSession session) {

		// Employee u= (Employee)session.getAttribute("emp");

		Map<String, Object> model = new HashMap<String, Object>();

		List<Employee> applist = empService.getAllEmployee();

		System.out.println("Users Details %%%%%%%%%" + ((applist.size()) - 2));
		// System.out.println("Users Details %%%%%%%%%"+applist.size());
		model.put("getCreatedDetails", applist);

		return new ModelAndView("pdfofAdminDetailReport", model);

	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/*
	 * @RequestMapping(value="/Empreg1", method=RequestMethod.GET) public String
	 * ReegPageAjax(@ModelAttribute("empregpage1") Employee emp, Model model) {
	 * return "showEmpformpage1";
	 * 
	 * }
	 */

}
