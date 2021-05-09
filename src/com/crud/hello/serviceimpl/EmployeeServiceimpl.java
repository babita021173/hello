package com.crud.hello.serviceimpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.hello.dao.Employeedao;
import com.crud.hello.modal.Country;
import com.crud.hello.modal.Employee;
import com.crud.hello.service.EmployeeService;

@Service
public  class EmployeeServiceimpl implements EmployeeService{
	

	@Autowired
	Employeedao empdao; 
	
	@Override
	public int add(Employee emp)
	{
		return empdao.add(emp);
	}

	@Override
	public List <Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		return empdao.getAllEmployee();
	
	}
    @Override
	public int delete(int id)
	{
    	
       return empdao.delete(id);
      	
     }
  
    public int update(Employee emp)
     {
    	 return empdao.update(emp);
     }

	/*@Override
	public Employee getAllEmployee(int id) {
		// TODO Auto-generated method stub
		 return empdao.getAllEmployee(id);
	}*/

	@Override
	public Employee getStudentOnId(int id) {
		// TODO Auto-generated method stub
		 return empdao.getStudentOnId(id);
	}

	@Override
	public Map<String, String> saveUserDetail(Employee emp) {
		// TODO Auto-generated method stub
		return empdao.saveUserDetail(emp);
	}

	@Override
	public List<Country> getAllCountry() {
		// TODO Auto-generated method stub
		return empdao.getAllCountry();
	}
}
