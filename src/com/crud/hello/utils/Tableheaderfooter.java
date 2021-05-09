package com.crud.hello.utils;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.ExceptionConverter;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.ColumnText;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfPageEventHelper;
import com.itextpdf.text.pdf.PdfTemplate;
import com.itextpdf.text.pdf.PdfWriter;



public class Tableheaderfooter extends PdfPageEventHelper
{
	String footer;
	PdfTemplate total;
	Font font_TIMES_BOLD = new Font(FontFactory.getFont(FontFactory.TIMES_BOLD, 12));
	
	public void setFooter(String footer)
	{
		this.footer=footer;
	}
	
	@Override
	public void onStartPage(PdfWriter writer, Document document) 
	{
		//Rectangle rect = writer.getBoxSize("art");
        //ColumnText.showTextAligned(writer.getDirectContent(),Element.ALIGN_CENTER, new Phrase("Top Left"), rect.getLeft(), rect.getTop(), 0);
        //ColumnText.showTextAligned(writer.getDirectContent(),Element.ALIGN_CENTER, new Phrase("I.I.F.-I",font_TIMES_BOLD), rect.getRight(), rect.getTop(), 0);		
	}
	
	public void onOpenDocument(PdfWriter writer, Document document)
	{
		total=writer.getDirectContent().createTemplate(30,16);		
	}
		
	public void onEndPage(PdfWriter writer, Document document)
	{
		PdfPTable table = new PdfPTable(3);
		
		 try 
		 {			 
			 		 
			 table.setWidths(new int[]{0,26,24});
			 table.setTotalWidth(527);
			 table.setLockedWidth(true);
			 table.getDefaultCell().setFixedHeight(20);
			 //table.getDefaultCell().setBorder(Rectangle.BOTTOM);
	         table.getDefaultCell().setBorder(0);
	         table.addCell(footer);
	         table.getDefaultCell().setHorizontalAlignment(Element.ALIGN_RIGHT);
	    	 table.getDefaultCell().setHorizontalAlignment(Element.ALIGN_RIGHT);
	    	 
			 table.addCell(String.format("Page %d of", writer.getPageNumber()));			 
			 PdfPCell cell = new PdfPCell(Image.getInstance(total));
			 cell.setBorder(0);
			 table.addCell(cell);
			 table.writeSelectedRows(0, -1,document.leftMargin(), document.bottom(), writer.getDirectContent());
			 //table.writeSelectedRows(0, -1,34, 803, writer.getDirectContent());
			 
		 }
		 catch(DocumentException de) 
		 {
			 throw new ExceptionConverter(de);
		 }
	}
	
	 public void onCloseDocument(PdfWriter writer, Document document) 
	 {
		 ColumnText.showTextAligned(total, Element.ALIGN_LEFT, new Phrase(String.valueOf(writer.getPageNumber())), 2, 2, 0);
	 }
}

