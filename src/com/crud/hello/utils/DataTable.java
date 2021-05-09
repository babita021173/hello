package com.crud.hello.utils;


import java.util.List;

public class DataTable {
	
	int draw;
	public int getDraw() {
		return draw;
	}
	public void setDraw(int draw) {
		this.draw = draw;
	}
	public int getRecordsTotal() {
		return recordsTotal;
	}
	public void setRecordsTotal(int recordsTotal) {
		this.recordsTotal = recordsTotal;
	}
	public int getRecordsFiltered() {
		return recordsFiltered;
	}
	public void setRecordsFiltered(int recordsFiltered) {
		this.recordsFiltered = recordsFiltered;
	}
/*	public List<IncidentType> getData() {
		return data;
	}
	public void setData(List<IncidentType> data) {
		this.data = data;
	}*/
	int recordsTotal;
	int recordsFiltered;
/*	List<IncidentType> data;*/
	/*List<State> data;*/
	/*public List<State> getData() {
		return data;
	}
	public void setData(List<State> data) {
		this.data = data;
	}*/
	
	List<?> data;
	public List<?> getData() {
		return data;
	}
	public void setData(List<?> data) {
		this.data = data;
	}
	
}
