function generatepdf(){
	

	$('#display').attr('method', "GET");
	$('#display').attr('action', "dynamicPdfGenerate");
    $('#display').attr('target', "_blank");
//$('#display').attr('target', "_top");
	$('#display').submit();
	
}