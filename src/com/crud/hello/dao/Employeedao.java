package com.crud.hello.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

import com.crud.hello.modal.Country;
import com.crud.hello.modal.Employee;

public interface Employeedao 
{
   
   public int add(Employee emp);
	
   public List<Employee> getAllEmployee();
   
   public int delete(int id);
   
   public int update(Employee emp);

/* public Employee getAllEmployee(int id); */

   public Employee getStudentOnId(int id);
   public Map<String, String> saveUserDetail(Employee emp);
   
   
    public List<Country> getAllCountry();


}

