package com.crud.hello.daoimpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.crud.hello.dao.Employeedao;
import com.crud.hello.modal.Country;
import com.crud.hello.modal.Employee;

@Repository
public class Employeedaoimpl implements Employeedao {

	@Autowired
	private DataSource postgresDS;
	private JdbcTemplate jdbctemplete;
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	private void setDataSource(DataSource postgresDS) {
		this.postgresDS = postgresDS;
		this.jdbctemplete = new JdbcTemplate(postgresDS);
	}

	///////////////////////////////////////////////////// FOR INSERTING DATA INTO DATABASE////////////////////////////////////////////////
	@Override
	public int add(Employee emp) {
		String sqle = "insert into students(name,designation,email,contact,gender,country) values(?,?,?,?,?,?)";

		// String query= "insert into
		// students(name,designation,email,contact,gender,country) values"
		// +
		// "('"+emp.getName()+"','"+emp.getDesignation()+"','"+emp.getEmail()+"','"+emp.getContact()+"','"+emp.getGender()+"','"+emp.getCountry()+"')";

		// return jdbctemplete.update(query);

		return jdbctemplete.update(sqle, new Object[] { emp.getName(), emp.getDesignation(), emp.getEmailid(),
				emp.getContact(), emp.getGender(), emp.getCountry() });

	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/////////////////////////////////////////////////////// FOR DELETING DATA FROM DATABSE/////////////////////////////////////////////////
	@Override
	public int delete(int id) {

		String sql = "delete from students where id=" + id + "";
		return jdbctemplete.update(sql);
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////// FOR UPDATING DATA FROM DATABASE///////////////////////////////////////////////
	@Override
	public int update(Employee emp) {
		/*
		 * System.out.println("Name" + emp.getName());
		 * System.out.println("designation" + emp.getDesignation());
		 * System.out.println("Email" + emp.getEmail());
		 * System.out.println("Gender" + emp.getGender());
		 * System.out.println("Country" + emp.getCountry());
		 * System.out.println("Id" + emp.getid());
		 */

		String sql1 = "update students set  name=?, designation=?, email=?,contact=?, gender=?, country=? where id=?";

		int status = jdbctemplete.update(sql1, new Object[] { emp.getName(), emp.getDesignation(), emp.getEmailid(),
				emp.getContact(), emp.getGender(), emp.getCountry(), emp.getId() });
		/*
		 * if(status > 0) { System.out.println("SuccessfullyUpdated"); } else {
		 * System.out.println("Updataion Failed!!!!"); }
		 */
		return status;
	}

	/*@Override
	public Employee getAllEmployee(int id) {
		String sql = "select  name, designation, email, contact, gender, country from students where id =" + id;

		return (Employee) jdbctemplete.query(sql, new EmployeIdMapper());
	}*/

	public static final class EmployeIdMapper implements RowMapper<Employee> {
		@Override
		public Employee mapRow(ResultSet rs, int rowNumber) throws SQLException {

			// here values are same as in modal file

			Employee emp = new Employee();
			
			emp.setId(rs.getInt("id"));
			emp.setName(rs.getString("name"));
			emp.setDesignation(rs.getString("designation"));
			emp.setEmailid(rs.getString("email"));
			emp.setContact(rs.getString("contact"));
			emp.setGender(rs.getString("gender"));
			emp.setCountry(rs.getString("country"));

			return emp;
		}
	}

	@Override
	public Employee getStudentOnId(int id) {
		String sql = "select id, name, designation, email, contact, gender, country from students where id =" + id;
		Employee employee = jdbctemplete.queryForObject(sql, new EmployeIdMapper());
		return employee;
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////// FOR VIEW DATA ON WEBPAGE/////////////////////////////////////////////////////////

	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		List<Employee> Emplist = null;

		String sql = "select * from students";

		Emplist = jdbctemplete.query(sql, new EmployeeMapper());

		return Emplist;
	}

	public static final class EmployeeMapper implements RowMapper<Employee> {
		@Override
		public Employee mapRow(ResultSet rs, int rowNumber) throws SQLException {
			// here values are same as in modal file
			Employee emp = new Employee();
			emp.setId(rs.getInt("id"));
			emp.setName(rs.getString("name"));
			emp.setDesignation(rs.getString("designation"));
			emp.setEmailid(rs.getString("email"));
			emp.setContact(rs.getString("contact"));
			emp.setGender(rs.getString("gender"));
			emp.setCountry(rs.getString("country"));

			return emp;
		}
	}



	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	
	
	//////////////////////////////////////////FOR INSERTING DATA IN DATABASE USING AJAX/////////////////////////////////////////////////////////
	
	
	@Override
	public Map<String, String> saveUserDetail(Employee emp) {
		    
		Map<String, String> queryResult  = new HashMap<String, String>();
		     
		// TODO Auto-generated method stub
		try{
				String sqle = "insert into students(name,designation,email,contact,gender,country) values(?,?,?,?,?,?)";

				int a=  jdbctemplete.update(sqle, new Object[] { emp.getName(), emp.getDesignation(), emp.getEmailid(),emp.getContact(), emp.getGender(), emp.getCountry() });
				
			
				
				queryResult.put("result","1");
		}catch(Exception e)
		{e.printStackTrace();}
						
		return queryResult;
		
		
	}

	
	/*@Override
	public Map<String, String> saveUserDetail(Employee emp) {
		// TODO Auto-generated method stub
		
		MapSqlParameterSource namedParameters = new MapSqlParameterSource();
		Map<String, String> queryResult  = new HashMap<String, String>();
		try {
			
		String sql="INSERT INTO students (id,name,designation,email,contact,gender, country) values(:id,:name,:designation,:email,:contact,:gender,:country)";
		
		
		namedParameters.addValue("id", emp.getId());
		namedParameters.addValue("name", emp.getName());
		namedParameters.addValue("designation", emp.getDesignation());
		namedParameters.addValue("email", emp.getEmailid());
		namedParameters.addValue("contact", emp.getContact());
		namedParameters.addValue("gender", emp.getGender());
		namedParameters.addValue("country", emp.getCountry());
		
			//KeyHolder keyHolder = new GeneratedKeyHolder();
			
			
			int key = namedParameterJdbcTemplate.update(sql, namedParameters);
			System.out.println("key"+key);
			
			
			queryResult.put("result", "1");
		
		} catch (Exception e) {
			e.printStackTrace();
			queryResult.put("rseult", "dberror");
		}
		
		return queryResult;
	}
	*/
	
	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
///////////////////////////////////////////////////////////////FOR LISTING COUNTRY DIFFERENT COUNTRY IN ALL PAGES/////////////	
	

	@Override
	public List<Country> getAllCountry() {
		// TODO Auto-generated method stub
		
		List<Country> country;
		String sql = "select * from fr_country where active='Y' ORDER BY country_name";
		try{
			country = jdbctemplete.query(sql, new CountryMapper());
			
			
		}catch(DataAccessException e){
			e.printStackTrace();
			return null;
		}
		if(country!=null && country.size()>0){

			return country;
		}
		
		
		
		
		
		
		return null;
	}
	
	public static final class CountryMapper implements RowMapper<Country>
	{
		@Override
		public Country mapRow(ResultSet rs,int rownumber)throws SQLException{
			Country country = new Country();
			
			country.setCountry_code(rs.getString("country_code"));
			country.setCountry_name(rs.getString("country_name"));
			country.setNationality(rs.getString("country_name"));
			
			return country;
			
		}
		
	}
	
	
	
	
	
	
	
	
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
}
