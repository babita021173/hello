package com.crud.hello.utils;

import java.io.ByteArrayOutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.view.AbstractView;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import com.crud.hello.modal.Employee;

public class pdfGenerate extends AbstractView {

	
	public pdfGenerate() 
	{
		setContentType("application/pdf");
	}
	
	@Override
	protected boolean generatesDownloadContent()
	{
		return true;
	}
	
	@Override
	protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		ByteArrayOutputStream baos = createTemporaryOutputStream();
		List<Employee> appUserDetaillist=(List<Employee>)model.get("getCreatedDetails");
		System.out.println("SIZE of Users List"+((appUserDetaillist.size())-2));
		//System.out.println("SIZE of Users List"+appUserDetaillist.size());
		
		
		Document document = new Document(PageSize.A4);
		document.setMargins(50, 45, 50, 60);
		PdfWriter writer = PdfWriter.getInstance(document, baos);

		writer.setViewerPreferences(PdfWriter.ALLOW_PRINTING | PdfWriter.PageLayoutSinglePage);
		Tableheaderfooter event = new Tableheaderfooter();
		writer.setPageEvent(event);

		Font font_TIMES_BOLD_COLOR_HEADING = new Font(FontFactory.getFont(FontFactory.TIMES_BOLD, 16));
		Font font_TIMES_BOLD_COLOR_SubHeading = new Font(FontFactory.getFont(FontFactory.TIMES_BOLD, 12));
		Font font_TIMES_BOLD_COLOR_subSubHeading = new Font(FontFactory.getFont(FontFactory.TIMES, 10));
		Font font_TIMES_small = new Font(FontFactory.getFont(FontFactory.TIMES, 10));
		Font font_TIMES_BOLD = new Font(FontFactory.getFont(FontFactory.TIMES_BOLD, 10));
		Font font_TIMES_BOLD_Color = new Font(FontFactory.getFont(FontFactory.TIMES_BOLD, 10, BaseColor.WHITE));
		Font font_TIMES_BOLD_SMALL = new Font(FontFactory.getFont(FontFactory.TIMES_BOLD, 10));
		DateFormat dayFormat = new SimpleDateFormat("dd");
		DateFormat monthFormat = new SimpleDateFormat("MMMMM");
		DateFormat yearFormat = new SimpleDateFormat("yyyy");

		Date date = new Date();
		String servDay = dayFormat.format(date);
		String servMonth = monthFormat.format(date);
		String servYear = yearFormat.format(date);

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);

		int hours = calendar.get(Calendar.HOUR_OF_DAY);
		String hrs = hours < 10 ? "0" + hours : String.valueOf(hours);
		int minutes = calendar.get(Calendar.MINUTE);
		String minuts = minutes < 10 ? "0" + minutes : String.valueOf(minutes);

		font_TIMES_BOLD_COLOR_HEADING.setColor(158, 69, 89);
		font_TIMES_BOLD_COLOR_SubHeading.setColor(158, 69, 89);
		font_TIMES_BOLD_COLOR_subSubHeading.setColor(158, 69, 89);
		document.open();

		Paragraph paragraph = new Paragraph();
		Chunk chunk = new Chunk("EMPLOYEE RECORDS", font_TIMES_BOLD_COLOR_HEADING);
		chunk.setUnderline(0.1f, -2f);
		paragraph.add(chunk);

		paragraph.setAlignment(Element.ALIGN_CENTER);
		
		document.add(paragraph);
		paragraph = new Paragraph();
		
		
		
		chunk = new Chunk("\nDated : " + servDay, font_TIMES_BOLD);
		paragraph.add(chunk);
		chunk = new Chunk("th", font_TIMES_BOLD_SMALL);
		chunk.setTextRise(5f);
		chunk.setFont(font_TIMES_BOLD_SMALL);
		paragraph.add(chunk);
		chunk = new Chunk(" " + servMonth + ", " + servYear + "\n", font_TIMES_BOLD);
		paragraph.add(chunk);
		chunk = new Chunk("Time :" + hrs + ":" + minuts + " hrs", font_TIMES_BOLD);
		paragraph.add(chunk);
		paragraph.setAlignment(Element.ALIGN_RIGHT);
		document.add(paragraph);

		paragraph = new Paragraph();
		SimpleDateFormat simpledf = new SimpleDateFormat("dd/MM/yyyy");
		
		paragraph.setAlignment(Element.ALIGN_CENTER);
		paragraph.setSpacingAfter(10);
		document.add(paragraph);

		PdfPTable table = new PdfPTable(7);
		table.setSpacingAfter(20);
		table.setWidthPercentage(100);
		float[] columnWidths = { 2f, 3f, 5f, 6f, 4f, 3f ,3f };
		table.setWidths(columnWidths);

		PdfPCell cell_sr_no = new PdfPCell(new Paragraph("Sl No.", font_TIMES_BOLD_Color));
		cell_sr_no.setHorizontalAlignment(Element.ALIGN_CENTER);
		cell_sr_no.setPaddingLeft(5);
		cell_sr_no.setPaddingRight(5);
		cell_sr_no.setPaddingTop(3);
		cell_sr_no.setPaddingBottom(4);
		cell_sr_no.setBackgroundColor(new BaseColor(158, 69, 89));

		

		PdfPCell cell_UserId_header = new PdfPCell(new Paragraph("Name", font_TIMES_BOLD_Color));
		cell_UserId_header.setHorizontalAlignment(Element.ALIGN_CENTER);
		cell_UserId_header.setPaddingLeft(5);
		cell_UserId_header.setPaddingRight(5);
		cell_UserId_header.setPaddingTop(3);
		cell_UserId_header.setPaddingBottom(4);
		cell_UserId_header.setBackgroundColor(new BaseColor(158, 69, 89));

		PdfPCell cell_Organization_header = new PdfPCell(new Paragraph("Designation", font_TIMES_BOLD_Color));
		cell_Organization_header.setHorizontalAlignment(Element.ALIGN_CENTER);
		cell_Organization_header.setPaddingLeft(5);
		cell_Organization_header.setPaddingRight(5);
		cell_Organization_header.setPaddingTop(3);
		cell_Organization_header.setPaddingBottom(4);
		cell_Organization_header.setBackgroundColor(new BaseColor(158, 69, 89));
		

		PdfPCell cell_EmailId_header = new PdfPCell(new Paragraph("Emailid", font_TIMES_BOLD_Color));
		cell_EmailId_header.setHorizontalAlignment(Element.ALIGN_CENTER);
		cell_EmailId_header.setPaddingLeft(5);
		cell_EmailId_header.setPaddingRight(5);
		cell_EmailId_header.setPaddingTop(3);
		cell_EmailId_header.setPaddingBottom(4);
		cell_EmailId_header.setBackgroundColor(new BaseColor(158, 69, 89));

		PdfPCell cell_Contact_header = new PdfPCell(new Paragraph("Contact", font_TIMES_BOLD_Color));
		cell_Contact_header.setHorizontalAlignment(Element.ALIGN_CENTER);
		cell_Contact_header.setPaddingLeft(5);
		cell_Contact_header.setPaddingRight(5);
		cell_Contact_header.setPaddingTop(3);
		cell_Contact_header.setPaddingBottom(4);
		cell_Contact_header.setBackgroundColor(new BaseColor(158, 69, 89));
		
		
		PdfPCell cell_minisdeaprt_header = new PdfPCell(new Paragraph("Gender", font_TIMES_BOLD_Color));
		cell_minisdeaprt_header.setHorizontalAlignment(Element.ALIGN_CENTER);
		cell_minisdeaprt_header.setPaddingLeft(5);
		cell_minisdeaprt_header.setPaddingRight(5);
		cell_minisdeaprt_header.setPaddingTop(3);
		cell_minisdeaprt_header.setPaddingBottom(4);
		cell_minisdeaprt_header.setBackgroundColor(new BaseColor(158, 69, 89));

		PdfPCell cell_createdon_header = new PdfPCell(new Paragraph("Country", font_TIMES_BOLD_Color));
		cell_createdon_header.setHorizontalAlignment(Element.ALIGN_CENTER);
		cell_createdon_header.setPaddingLeft(5);
		cell_createdon_header.setPaddingRight(5);
		cell_createdon_header.setPaddingTop(3);
		cell_createdon_header.setPaddingBottom(4);
		cell_createdon_header.setBackgroundColor(new BaseColor(158, 69, 89));

		
		

		if (appUserDetaillist.size() > 0) {

			table.addCell(cell_sr_no);
			table.addCell(cell_UserId_header);
			table.addCell(cell_Organization_header);
			table.addCell(cell_EmailId_header);
			table.addCell(cell_Contact_header);
			table.addCell(cell_minisdeaprt_header);
			table.addCell(cell_createdon_header);
		}
		
		int index = 1;
		int i = 0;

		for (Employee AppUserDetailobject : appUserDetaillist) {
  
			
			cell_sr_no = new PdfPCell(new Paragraph(index + ".", font_TIMES_small));
			index++;
			cell_sr_no.setHorizontalAlignment(Element.ALIGN_CENTER);
			cell_sr_no.setPaddingLeft(5);
			cell_sr_no.setPaddingRight(5);
			cell_sr_no.setPaddingTop(3);
			cell_sr_no.setPaddingBottom(4);
		 
		
			cell_UserId_header = new PdfPCell(new Paragraph(appUserDetaillist.get(i).getName(), font_TIMES_small));
			cell_UserId_header.setHorizontalAlignment(Element.ALIGN_CENTER);
			cell_UserId_header.setPaddingLeft(5);
			cell_UserId_header.setPaddingRight(5);
			cell_UserId_header.setPaddingTop(3);
			cell_UserId_header.setPaddingBottom(4);

			cell_Organization_header = new PdfPCell(new Paragraph(appUserDetaillist.get(i).getDesignation(), font_TIMES_small));
			cell_Organization_header.setHorizontalAlignment(Element.ALIGN_LEFT);
			cell_Organization_header.setPaddingLeft(5);
			cell_Organization_header.setPaddingRight(5);
			cell_Organization_header.setPaddingTop(3);
			cell_Organization_header.setPaddingBottom(4);
			
			cell_EmailId_header = new PdfPCell(new Paragraph(appUserDetaillist.get(i).getEmailid(), font_TIMES_small));
			cell_EmailId_header.setHorizontalAlignment(Element.ALIGN_LEFT);
			cell_EmailId_header.setPaddingLeft(5);
			cell_EmailId_header.setPaddingRight(5);
			cell_EmailId_header.setPaddingTop(3);
			cell_EmailId_header.setPaddingBottom(4);
			

			cell_Contact_header = new PdfPCell(new Paragraph(appUserDetaillist.get(i).getContact(), font_TIMES_small));
			cell_Contact_header.setHorizontalAlignment(Element.ALIGN_LEFT);
			cell_Contact_header.setPaddingLeft(5);
			cell_Contact_header.setPaddingRight(5);
			cell_Contact_header.setPaddingTop(3);
			cell_Contact_header.setPaddingBottom(4);

			cell_minisdeaprt_header = new PdfPCell(new Paragraph(appUserDetaillist.get(i).getGender(), font_TIMES_small));
			cell_minisdeaprt_header.setHorizontalAlignment(Element.ALIGN_LEFT);
			cell_minisdeaprt_header.setPaddingLeft(5);
			cell_minisdeaprt_header.setPaddingRight(5);
			cell_minisdeaprt_header.setPaddingTop(3);
			cell_minisdeaprt_header.setPaddingBottom(4);

			cell_createdon_header = new PdfPCell(new Paragraph(appUserDetaillist.get(i).getCountry(), font_TIMES_small));
			cell_createdon_header.setHorizontalAlignment(Element.ALIGN_LEFT);
			cell_createdon_header.setPaddingLeft(5);
			cell_createdon_header.setPaddingRight(5);
			cell_createdon_header.setPaddingTop(3);
			cell_createdon_header.setPaddingBottom(4);
			

			if (index % 2 != 0) {
				
				cell_sr_no.setBackgroundColor(new BaseColor(249, 235, 226));
				cell_UserId_header.setBackgroundColor(new BaseColor(249, 235, 226));
				cell_Organization_header.setBackgroundColor(new BaseColor(249, 235, 226));
				cell_EmailId_header.setBackgroundColor(new BaseColor(249, 235, 226));
				cell_Contact_header.setBackgroundColor(new BaseColor(249, 235, 226));
				cell_minisdeaprt_header.setBackgroundColor(new BaseColor(249, 235, 226));
				cell_createdon_header.setBackgroundColor(new BaseColor(249, 235, 226));
			
			}
			
			table.addCell(cell_sr_no);
			table.addCell(cell_UserId_header);
			table.addCell(cell_Organization_header);
			table.addCell(cell_EmailId_header);
			table.addCell(cell_Contact_header);
			table.addCell(cell_minisdeaprt_header);
			table.addCell(cell_createdon_header);
			
			i++;
		}

		document.add(table);

		if (appUserDetaillist.size() == 0) {
			paragraph = new Paragraph();
			chunk = new Chunk("No Record Found", font_TIMES_BOLD_COLOR_HEADING);

			paragraph.add(chunk);

			paragraph.setAlignment(Element.ALIGN_CENTER);
			document.add(paragraph);
		}

		document.close();

		writeToResponse(response, baos);

	}
}
