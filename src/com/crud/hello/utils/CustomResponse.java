package com.crud.hello.utils;

import java.util.List;
import java.util.Map;

import org.springframework.validation.FieldError;

public class CustomResponse {
	
	private String status;
	private List<FieldError> errors;
	private Object object;
	private Map<String,String> objectvaluesmap;

	public Object getObject() {
		return object;
	}


	public void setObject(Object object) {
		this.object = object;
	}


	public CustomResponse(){
		
	}
	
	
	public CustomResponse(String status, List<FieldError> errors,Object object) {
		this.status = status;
		this.errors = errors;
		this.object=object;
	}
	
	public CustomResponse(String status,List<FieldError> errors, Map<String,String> objectvaluesmap,Object object) {
		this.status = status;
		this.objectvaluesmap = objectvaluesmap;
		this.errors = errors;
		this.object=object;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<FieldError> getErrors() {
		return errors;
	}
	public void setErrors(List<FieldError> errors) {
		this.errors = errors;
	}


	public Map<String, String> getObjectvaluesmap() {
		return objectvaluesmap;
	}


	public void setObjectvaluesmap(Map<String, String> objectvaluesmap) {
		this.objectvaluesmap = objectvaluesmap;
	}
	
	

}
