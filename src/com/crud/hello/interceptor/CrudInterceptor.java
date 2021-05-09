package com.crud.hello.interceptor;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.StopWatch;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import org.apache.log4j.Logger;
import org.aspectj.weaver.patterns.ThisOrTargetAnnotationPointcut;

public class CrudInterceptor implements HandlerInterceptor {
	
	
	ThreadLocal<StopWatch> stopWatchLocal= new ThreadLocal<StopWatch>();
	Logger logger = Logger.getLogger(this.getClass());
	
	
	public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object handler) throws Exception {
	
		StopWatch stopwatch= new StopWatch(handler.toString());
		
		stopwatch.start(handler.toString());
		stopWatchLocal.set(stopwatch);
	
		logger.info("Accesssing URL path:- " +getURLPath(req));
		logger.info("Request Processing Time Started At:- " +getCurrentTime() );
		
		//System.out.println("Pre handle request");
		return true;
	
	}

	public void postHandle(HttpServletRequest req, HttpServletResponse resp,Object handler, 
            ModelAndView modelAndView) 
            throws Exception{
		
		//System.out.println("Post handle request");
	logger.info("Request Processing is Ended on:- "+getCurrentTime());	
	
	
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		
		
		   StopWatch stopWatch = stopWatchLocal.get();    
		   
		   stopWatch.stop();  
		  
		   logger.info("Total time taken for processing:- " +stopWatch.getTotalTimeMillis()+ " ms");   
		   
		   stopWatchLocal.set(null);   
		  
		   logger.info("=======================================================");
		// TODO Auto-generated method stub
		
	}
	
	public String getURLPath(HttpServletRequest request)
	{
		String CurrentPath=request.getRequestURI();
		String QueryString =request.getQueryString();
		
		QueryString = QueryString == null ? "" : "?" + QueryString;
		
		return CurrentPath+QueryString;
	}
	
	
	public String getCurrentTime()
	{
	    DateFormat dateFormat=new SimpleDateFormat("dd/MM/yyyy 'at' hh:mm:ss");
	    Calendar calendar= Calendar.getInstance();
	    calendar.setTimeInMillis(System.currentTimeMillis());
		return dateFormat.format(calendar.getTime());	
	}
	
	
	
}
