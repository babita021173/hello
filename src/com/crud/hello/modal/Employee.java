package com.crud.hello.modal;


import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;

import org.hibernate.validator.constraints.NotEmpty;

import com.crud.hello.modal.ApplicationProcessValidationGroups.EmpDetailsEntry;
//import com.crud.hello.utils.RegistrationModuleValidation.RegistrationValidation;


public class Employee {
	private int id;

	// @Length(max = 20, message = "Given name should not be more than
	// 20",groups = { EmpDetailsEntry.class})
	@Length(max = 20, message = "Given name should not be more than 20", groups = {EmpDetailsEntry.class})
	@NotEmpty (message = "Name can not be empty", groups = {EmpDetailsEntry.class})
	@Pattern(regexp="^[a-z A-Z]*$",message="Name does Not contain anything Except Alphabets", groups = {EmpDetailsEntry.class})
	private String name;
	
	@NotEmpty (message = "Designation can not be empty", groups = {EmpDetailsEntry.class})
	@Length(max=15, message="Given Designation should not be more than 15", groups = {EmpDetailsEntry.class})
	private String designation;
	
	@Pattern(message="Please enter Email id According to Expression ",regexp="^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$", groups = {EmpDetailsEntry.class})
    @Email(message="Email ID not valid", groups = {EmpDetailsEntry.class})
	@NotEmpty (message = "Email can not be empty", groups = {EmpDetailsEntry.class})
	private String emailid;
	
	@Pattern(regexp = "^[0-9\\s]*$", message = "Please enter digit only", groups = {EmpDetailsEntry.class})
	@Size(min=10, max=10, message="Contact Must be of 10 digits", groups = {EmpDetailsEntry.class})
	@NotEmpty (message = "Contact can not be empty", groups = {EmpDetailsEntry.class})
	private String contact;
	
	@NotEmpty (message = "You Must Select Gender", groups = {EmpDetailsEntry.class})
	private String gender;
	
	@NotEmpty (message = "You Must Select Country", groups = {EmpDetailsEntry.class})
	private String country;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

}
