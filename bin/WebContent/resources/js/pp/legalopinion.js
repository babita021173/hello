/**
 * Ajax Form Submission
 */
var table1 = null;
/*
 * $(document).ready(function() { table1=$('#firnotdonlisttable').DataTable();
 * 
 * });
 */
(function($) {
	$.fn.serializeFormJSON = function() {

		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
})(jQuery)
/*jQuery(function() {
	jQuery('#FD').click(function() {
		$("#cnr123TableList").hide();
		$("#firlistCNR").empty();
		$("#firDTableList").hide();
		$("#firlistFD").empty();
		$("#firnDTableList").hide();
		$("#firlist").empty();
		$('.recordAddForm').html("");
	});
});*/
jQuery(function() {
	/*jQuery('#CNR').click(function() {
		$("#cnr123TableList").hide();
		$("#firlistCNR").empty();
		$("#firDTableList").hide();
		$("#firlistFD").empty();
		$("#firnDTableList").hide();
		$("#firlist").empty();
		$('.recordAddForm').html("");
	});*/
});

function firnodonefun123()
{
	
	
	$("#firnotdon").html("");
	alert("firnodonefun");
	var eprocListid = $('#firnotdonlisttable')
	.DataTable(
		{
						
			"ajax" : {
				"url" : "firnotdonlist",
			},
			"destroy" : true,
			"columns" : [ {
				"data" : "eprocid"
			},
			{
				"data" : "reqtypedesc"
			}
			,
			{
				"data" : "reqdatetext"
			},
			{
				"data" : "dairyNo"
			}, {
				"data" : "dairyDate"
			}, {
				"data" : "fromOfficer"
			}, {
				"data" : "toOfficer"
			}, {
				"data" : "recordCreatedon"
			},

			],
			"columnDefs" : [

			{
				"render" : function(data, type, row) {
					return '<a href=#    onclick=getOpenionForm("'+row.eprocid+'","firnotdonelist") >View History</a>';
					
				},
				"targets" : 8
			} ],

		});
	$("#firnotdonlisttableshow").show();
$("#cnr123TableList").hide();
$("#firlistCNR").empty();
$("#firDTableList").hide();
$("#firlistFD").empty();
$("#firnDTableList").hide();
$("#firlist").empty();
$('.recordAddForm').html("");
	}

function firdonefun()
{
	alert("firdonefun");
	var eprocListid = $('#firdonlisttable')
	.DataTable(
		{
			"ajax" : {
				"url" : "getfirdonlist",
			},
			"destroy" : true,
			"columns" : [ {
				"data" : "eprocid"
			},
			{
				"data" : "reqtypedesc"
			}
			,
			{
				"data" : "reqdatetext"
			},
			{
				"data" : "fir_num"
			}, {
				"data" : "fir_date"
			}, {
				"data" : "fromOfficer"
			}, {
				"data" : "toOfficer"
			}, {
				"data" : "recordCreatedon"
			},

			],
			"columnDefs" : [

			{
				"render" : function(data, type, row) {
					return '<a href=#    onclick=getOpenionForm("'+row.eprocid+'","firdonelist") >View History</a>';
					
				},
				"targets" : 8
			} ],

		});
	$("#cnr123TableList").hide();
	$("#firlistCNR").empty();
	$("#firDTableList").hide();
	$("#firlistFD").empty();
	$("#firnDTableList").hide();
	$("#firlist").empty();
	$('.recordAddForm').html("");
	}

function fircnrfun()
{
	var eprocListid = $('#casedonlisttable')
	.DataTable(
		{
						
			"ajax" : {
				"url" : "getcnrlist",
			},
			"destroy" : true,
			"columns" : [ {
				"data" : "eprocid"
			},
			{
				"data" : "reqtypedesc"
			}
			,
			{
				"data" : "reqdatetext"
			},
			{
				"data" : "cnr_num"
			}, {
				"data" : "cnr_date"
			}, {
				"data" : "fromOfficer"
			}, {
				"data" : "toOfficer"
			}, {
				"data" : "recordCreatedon"
			},

			],
			"columnDefs" : [

			{
				"render" : function(data, type, row) {
					return '<a href=#    onclick=getOpenionForm("'+row.eprocid+'","caseNumlist") >View History</a>';
					
				},
				"targets" : 8
			} ],

		});
	$("#cnr123TableList").hide();
	$("#firlistCNR").empty();
	$("#firDTableList").hide();
	$("#firlistFD").empty();
	$("#firnDTableList").hide();
	$("#firlist").empty();
	$('.recordAddForm').html("");
	}


/*jQuery(function() {
	jQuery('#FND').click(function() {
		
	});
});*/
jQuery(function() {
	jQuery('#FIRnDone').click(function() {
		

		$("#firnDTableList").hide();
		$("#firlist").empty();
		getOpenionForm("A", "firnotdonelist");

	});
});

jQuery(function() {
	jQuery('#FIRDone').click(function() {
		$("#firDTableList").hide();
		$("#firlistFD").empty();
		getOpenionForm("A", "firdonelist");

	});
});

jQuery(function() {
	jQuery('#caseNum').click(function() {
		$("#cnr123TableList").hide();
		$("#firlistCNR").empty();
		getOpenionForm("A", "caseNumlist");

	});
});

function getOpenionForm(val, item) {
	try {

		
		alert("hello");
		var urlValue = item + "?val=" + val;
		$.ajax({
			type : 'POST', // define the type of HTTP verb we want to use (POST
							// for our form)
			url : item + "?val=" + val, // the url where we want to POST url
										// call after edit
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Accept", "application/json");
				xhr.setRequestHeader("Content-Type", "application/json");
			},
			encode : true,
			success : function(data, textStatus, jqXHR) {
				$('.recordAddForm').html("");
				$('.recordAddForm').html(data);
				$("#v_CompDtlFrm").show();
				$("#LegalOpinionForm").modal("show");
				/* smoothScroll(document.getElementById('v_CompDtlFrm')); */
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert(textStatus, errorThrown);
			}
		})
	} catch (e) {
		alert(e);
	}
}

function caseRegistrationByCourt(item) {
	try {
		var courtVal = decodeURIComponent(item);
		var urlValue = "legalopinion";
		$.ajax({
			type : 'POST', // define the type of HTTP verb we want to use (POST
							// for our form)
			url : urlValue, // the url where we want to POST url call after edit
			data : courtVal,
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Accept", "application/json");
				xhr.setRequestHeader("Content-Type", "application/json");
			},
			encode : true,
			success : function(data, textStatus, jqXHR) {

				$('.recordAddForm').html(data);

			},
			error : function(jqXHR, textStatus, errorThrown) {
				// alert(textStatus, errorThrown);
			}
		})
	} catch (e) {
		// alert(e);
	}
}

function legalReqByeproc(eproc) {
	getOpenionForm(eproc, "firnotdonelist");
}

function eporcList() {
	var eprocListid = $('#deprocListtable')
			.DataTable(
					{
						"ajax" : {
							"url" : "eprocListRptUsingDate",
						},
						"destroy" : true,
						"columns" : [ {
							"data" : "eprocID"
						}, {
							"data" : "cnrNo"
						}, {
							"data" : "firNo"
						}, {
							"data" : "stateCode"
						}, {
							"data" : "distCode"
						}, {
							"data" : "policeCode"
						}, {
							"data" : "courtCode"
						},

						],
						"columnDefs" : [

						{
							"render" : function(data, type, row) {
								var rowval = row.eprocID;
								return '<a href="#"   id="disposalshow"  onclick="viewdisposal('
										+ row.eprocID + ')">Add</a>';
								/*
								 * return '<a
								 * href="'+moduleflagid+'?eprocid='+row.eprocID+'"
								 * onclick="viewOcc(row.eprocID)">Add</a>';
								 */
							},
							"targets" : 7
						} ],

					});
	$('#eprocListform').show();

}

function viewdisposal(eprocid) {

	var firlist = $('#firlist')
			.DataTable(
					{
						"ajax" : {
							"url" : "listeprocfordspl?eprocid=" + eprocid,
						},
						"destroy" : true,
						"columns" : [ {
							"data" : "eprocid"
						}, {
							"data" : "disposaltypedesc"
						}, {
							"data" : "dspldatetext"
						}, ],
						"columnDefs" : [

						{
							"render" : function(data, type, row) {

								if (row.rowseq != 0) {
									return '<a href="#"   onclick="viewdisposaldoc('
											+ row.eprocid
											+ ','
											+ row.rowseq
											+ ')"><i class="fa fa-file-pdf-o fa-lg" aria-hidden="true" ></i></a>';
								} else {
									return '<a href="#"   onclick="viewdisposaldoc('
											+ row.eprocid
											+ ','
											+ row.rowseq
											+ ')"></a>';
								}
							},
							"targets" : 3
						} ],
						// scrollY: 200,
						scrollCollapse : true,
						paging : true,
						fnDrawCallback : function(settings) {
							if (settings.fnRecordsDisplay() > 0) {
								// alert("shw ");
								$("#dsptable").show();
								$("#disposaldiv").show();
							} else {
								// alert("hide ");
								$("#dsptable").hide();
								$("#disposaldiv").show();
							}
						}

					});
	// $("#disposaldiv").show();

}

function viewdisposaldoc(eproc, rowseq) {
	$('#documentid').attr('src',
			'viewdsplDoc?eprocid=' + eproc + '&rowseq=' + rowseq);
	$("#pdfModal").modal("show");

}

function epoclistforlopn() {
	var eprocListid = $('#eprocListtable')
			.DataTable(
					{
						"ajax" : {
							"url" : "epocdatalistforlopn",
						},
						"destroy" : true,
						"columns" : [ {
							"data" : "eprocID"
						}, {
							"data" : "cnrNo"
						}, {
							"data" : "firNo"
						}, {
							"data" : "stateCode"
						}, {
							"data" : "distCode"
						}, {
							"data" : "policeCode"
						}, {
							"data" : "courtCode"
						},

						],
						"columnDefs" : [

						{
							"render" : function(data, type, row) {
								var rowval = row.eprocID;
								return '<a href="#"  id="legopnshow"   onclick="viewlegopen('
										+ row.eprocID + ')">Add</a>';
								/*
								 * return '<a
								 * href="'+moduleflagid+'?eprocid='+row.eprocID+'"
								 * onclick="viewOcc(row.eprocID)">Add</a>';
								 */
							},
							"targets" : 7
						} ],

					});
	$('#eprocListfrm').show();
}

function viewlegopenFnd(eprocid) {
	alert();

	$('.recordAddForm').html("");
	$("#firnd").html("");
	$("#firnd").html(eprocid);
	$
			.ajax({
				url : "listeprocforlreq?eprocid=" + eprocid + "&mode=FND",
				async : false,
				dataType : 'json',
				encode : true,
				beforeSend : function(xhr) {
					xhr.setRequestHeader("Accept", "application/json");
					xhr.setRequestHeader("Content-Type", "application/json");
				},
				success : function(data, textStatus, jqXHR) {
					if (data) {
						$("#firnDTableList").show();
						$("#firlist").empty();
						$("#firlist")
								.append(
										"<thead><tr><th>Eproc Id</th><th>Opinion Type </th><th>Opinion Date</th><th>Dairy Number</th>"
												+ "<th>Dairy Year</th><th>Requesting Officer Name</th><th>Receiving Officer Name</th>"
												+ "<th>Action</th>"
												+ "</tr></thead>");

						for (var i = 0; i < data.length; i++) {

							$("#firlist")
									.append(
											"<tr><td>"
													+ data[i].eprocid
													+ "</td><td>"
													+ data[i].reqtypedesc
													+ "</td><td>"
													+ data[i].reqdatetext
													+ "</td>"
													+ "<td>"
													+ data[i].dairyNo
													+ "</td>"
													+ "<td>"
													+ data[i].dairyDate
													+ "</td>"
													+ "<td>"
													+ data[i].fromOfficer
													+ "</td>"
													+ "<td>"
													+ data[i].toOfficer
													+ "</td>"
													+ "<td><a href='#' onclick=getOpenionForm('"
													+ data[i].eprocid
													+ "','firnotdonelist')><u>"
													+ data[i].action
													+ "</u></a>" + "</td>"
													+ "</tr>");
						}

						$("#v_CompDtlFrmList1").show();
						smoothScroll(document
								.getElementById('v_CompDtlFrmList1'));
					} else {
						// alert("Failed to save ");
					}

				},
				error : function(jqXHR, textStatus, errorThrown) {
					// alert(textStatus, errorThrown);
				}
			});

}

function viewlegopenFd(eprocid) {
	$("#firlistFD").html('');
	$('.recordAddForm').html("");
	$("#firDTableList").show();

	$
			.ajax({

				url : "listeprocforlreq?eprocid=" + eprocid + "&mode=FD",
				async : false,
				dataType : 'json',
				encode : true,
				beforeSend : function(xhr) {
					xhr.setRequestHeader("Accept", "application/json");
					xhr.setRequestHeader("Content-Type", "application/json");
				},
				success : function(data, textStatus, jqXHR) {
					if (data) {

						// alert(data.length + "dfgdfg");
						$("#firlistFD").empty();
						$("#firlistFD")
								.append(
										"<thead><tr><th>Eproc Id</th><th>Opinion Type </th><th>Opinion Date</th><th>FIR Number</th>"
												+ "<th>FIR Date</th><th>Receiving Officer</th>"
												+ "<th>Action</th></tr></thead>");

						for (var i = 0; i < data.length; i++) {

							$("#firlistFD")
									.append(
											"<tr><td>"
													+ data[i].eprocid
													+ "</td><td>"
													+ data[i].reqtypedesc
													+ "</td><td>"
													+ data[i].reqdatetext
													+ "</td>"
													+ "<td>"
													+ data[i].fir_num
													+ "</td>"
													+ "<td>"
													+ data[i].fir_date
													+ "</td>"
													+ "<td>"
													+ data[i].fromOfficer
													+ "</td>"
													+ "<td><a href='#' onclick=getOpenionForm('"
													+ data[i].eprocid
													+ "','firdonelist')><u>"
													+ data[i].action
													+ " </a></td></tr>");
						}
						$("#v_CompDtlFrmList2").show();
						smoothScroll(document
								.getElementById('v_CompDtlFrmList2'));

					} else {
						// alert("Failed to save ");
					}

				},
				error : function(jqXHR, textStatus, errorThrown) {
					// alert(textStatus, errorThrown);
				}
			});

}

function viewlegopenCnr(eprocid) {
	$("#firlistCNR").html('');
	$("#cnr123TableList").show();
	$
			.ajax({

				url : "listeprocforlreq?eprocid=" + eprocid + "&mode=CNR",
				async : false,
				dataType : 'json',
				encode : true,
				beforeSend : function(xhr) {
					xhr.setRequestHeader("Accept", "application/json");
					xhr.setRequestHeader("Content-Type", "application/json");
				},
				success : function(data, textStatus, jqXHR) {
					if (data) {

						$("#firlistCNR").empty();
						$("#firlistCNR")
								.append(
										"<thead><tr><th>Eproc Id</th><th>Opinion Type </th><th>Request Date</th><th>CNR Number</th>"
												+ "<th>Case Registered Date</th><th>Requesting Officer Name</th><th>Receiving Officer Name</th>"
												+ "<th>Action</th></tr></thead>");

						for (var i = 0; i < data.length; i++) {

							$("#firlistCNR")
									.append(
											"<tr><td>"
													+ data[i].eprocid
													+ "</td><td>"
													+ data[i].reqtypedesc
													+ "</td><td>"
													+ data[i].reqdatetext
													+ "</td>"
													+ "<td>"
													+ data[i].cnr_num
													+ "</td>"
													+ "<td>"
													+ data[i].cnr_date
													+ "</td>"
													+ "<td>"
													+ data[i].fromOfficer
													+ "</td>"
													+ "<td>"
													+ data[i].toOfficer
													+ "</td>"
													/*
													 * + "<td><a href='#'
													 * onclick='viewlegopdocFir("+data[i].eprocid+","+data[i].rowseq+")'>" + "<i
													 * class='fa fa-file-pdf-o
													 * fa-lg' aria-hidden='true' ></i>" + "</a>" + "</td>"
													 */
													+ "<td><a href='#' onclick=getOpenionForm('"
													+ data[i].eprocid
													+ "','caseNumlist')><u>"
													+ data[i].action
													+ "</a></td></tr>");

						}
						$("#v_CompDtlFrmList3").show();
						smoothScroll(document
								.getElementById('v_CompDtlFrmList3'));

					} else {
						// alert("Failed to save ");
					}

				},
				error : function(jqXHR, textStatus, errorThrown) {
					// alert(textStatus, errorThrown);
				}
			});

}

function viewlegopdoc(eproc, rowseq) {
	$('#documentid').attr('src',
			'viewDocuments?eprocid=' + eproc + '&rowseq=' + rowseq);
	$("#pdfModal").modal("show");

}
function viewlegopdocCnr(eproc, rowseq) {
	$('#documentidcnr').attr('src',
			'viewDocuments?eprocid=' + eproc + '&rowseq=' + rowseq);
	$("#pdfModal").modal("show");

}
/*
 * function viewlegopdocFir(eproc,rowseq) { $('#documentidfir').attr('src',
 * 'viewDocuments?eprocid=' + eproc + '&rowseq=' + rowseq);
 * $("#pdfModal").modal("show"); dvsdfdsf }
 */

// draft chargesheet
function eporcListdrftsheet() {
	var eprocListid = $('#eprocListtable')
			.DataTable(
					{
						"ajax" : {
							"url" : "epoclistfordrftchrg",
						},
						"destroy" : true,
						"columns" : [ {
							"data" : "eprocID"
						}, {
							"data" : "cnrNo"
						}, {
							"data" : "firNo"
						}, {
							"data" : "stateCode"
						}, {
							"data" : "distCode"
						}, {
							"data" : "policeCode"
						}, {
							"data" : "courtCode"
						},

						],
						"columnDefs" : [

						{
							"render" : function(data, type, row) {
								var rowval = row.eprocID;
								return '<a href="#"   id="drftchrgshow"  onclick="viewdrftchrglist('
										+ row.eprocID + ')">Add</a>';
								/*
								 * return '<a
								 * href="'+moduleflagid+'?eprocid='+row.eprocID+'"
								 * onclick="viewOcc(row.eprocID)">Add</a>';
								 */
							},
							"targets" : 7
						} ],

					});
	$('#eprocLstfrm').show();
}

function viewforfndmode(mode) {
	/*
	 * alert(table1); table1.destroy();
	 */
	$("#firnotdonlisttable").empty();

	$('#firnotdonlisttable').DataTable(
			{
				"ajax" : {
					"url" : "getlegaleproclist?mode=" + mode,
				},
				"destroy" : true,
				"columns" : [ {
					"data" : "eprocid"
				},
				/*
				 * { "data" : "reqtypecd" }, { "data" : "reqdatetext" },
				 */
				],
				"columnDefs" : [

				{
					"render" : function(data, type, row) {
						return '<a href="#" onclick="viewlegopenFnd('
								+ row.eprocid
								+ ')"><i class="fa fa-eye fa-lg"></i></a>';

					},
					"targets" : 1
				} ],
				// scrollY: 200,
				scrollCollapse : true,
				paging : true,

			});
}

function viewforfdmode1(mode) {
	/*
	 * alert(table1); table1.destroy();
	 */
	$("#firdonlisttable").empty();

	$('#firdonlisttable').DataTable(
			{
				"ajax" : {
					"url" : "getlegaleproclist?mode=" + mode,
				},
				"destroy" : true,
				"columns" : [ {
					"data" : "eprocid"
				},
				/*
				 * { "data" : "reqtypecd" }, { "data" : "reqdatetext" },
				 */
				],
				"columnDefs" : [

				{
					"render" : function(data, type, row) {
						return '<a href="#" onclick="viewlegopenFd('
								+ row.eprocid
								+ ')"><i class="fa fa-eye fa-lg"></i></a>';

					},
					"targets" : 1
				} ],
				// scrollY: 200,
				scrollCollapse : true,
				paging : true,

			});
}
function viewforCnrmode(mode) {
	/*
	 * alert(table1); table1.destroy();
	 */
	$("#casedonlisttable").empty();

	$('#casedonlisttable').DataTable(
			{
				"ajax" : {
					"url" : "getlegaleproclist?mode=" + mode,
				},
				"destroy" : true,
				"columns" : [ {
					"data" : "eprocid"
				},
				/*
				 * { "data" : "reqtypecd" }, { "data" : "reqdatetext" },
				 */
				],
				"columnDefs" : [

				{
					"render" : function(data, type, row) {
						return '<a href="#" onclick="viewlegopenCnr('
								+ row.eprocid
								+ ')"><i class="fa fa-eye fa-lg"></i></a>';

					},
					"targets" : 1
				} ],
				// scrollY: 200,
				scrollCollapse : true,
				paging : true,

			});
}

function viewforfdmode() {
	var firlist = $('#firlist')
			.DataTable(
					{
						"ajax" : {
							"url" : "listeprocfordrft",
						},
						"destroy" : true,
						"columns" : [ {
							"data" : "eprocid"
						}, {
							"data" : "reqtypecd"
						}, {
							"data" : "reqdatetext"
						}, ],
						"columnDefs" : [

						{
							"render" : function(data, type, row) {
								return '<a href="#"   onclick="viewdisposaldoc('
										+ row.eprocid
										+ ','
										+ row.rowseq
										+ ')">Add</a>';

							},
							"targets" : 3
						} ],
						// scrollY: 200,
						scrollCollapse : true,
						paging : true,

					});
}

function viewforcnrmode1() {
	var firlist = $('#firlist')
			.DataTable(
					{
						"ajax" : {
							"url" : "listeprocfordrft",
						},
						"destroy" : true,
						"columns" : [ {
							"data" : "eprocid"
						}, {
							"data" : "reqtypecd"
						}, {
							"data" : "reqdatetext"
						}, ],
						"columnDefs" : [

						{
							"render" : function(data, type, row) {
								return '<a href="#"   onclick="viewdisposaldoc('
										+ row.eprocid
										+ ','
										+ row.rowseq
										+ ')">Add</a>';

							},
							"targets" : 3
						} ],
						// scrollY: 200,
						scrollCollapse : true,
						paging : true,

					});
}

function viewdrftchrglist(eprocid) {
	var firlist = $('#firlist')
			.DataTable(
					{
						"ajax" : {
							"url" : "listeprocfordrft?eprocid=" + eprocid,
						},
						"destroy" : true,
						"columns" : [ {
							"data" : "eprocid"
						}, {
							"data" : "reqtypecd"
						}, {
							"data" : "reqdatetext"
						}, ],
						"columnDefs" : [

						{
							"render" : function(data, type, row) {
								// alert("row.rowseq " +row.eprocid);
								return '<a href="#"   onclick="viewdisposaldoc('
										+ row.eprocid
										+ ','
										+ row.rowseq
										+ ')">Add</a>';
								/*
								 * return '<a
								 * href="'+moduleflagid+'?eprocid='+row.eprocID+'"
								 * onclick="viewOcc(row.eprocID)">Add</a>';
								 */
							},
							"targets" : 3
						} ],
						// scrollY: 200,
						scrollCollapse : true,
						paging : true,
						fnDrawCallback : function(settings) {
							if (settings.fnRecordsDisplay() > 0) {
								// alert("shw ");
								$("#dctable").show();
								$("#drftcgrgshtdiv").show();
							} else {
								// alert("hide ");
								$("#dctable").hide();
								$("#drftcgrgshtdiv").show();
							}
						}

					});

}

function getDisposalchange(val) {

	if (val == 1) {

		$('#acqitalid').show();
		$('#convictionid').hide();
		$('#dischrgedid').hide();

	} else if (val == 2) {

		$('#acqitalid').hide();
		$('#convictionid').show();
		$('#dischrgedid').hide();

	} else if (val == 3) {

		$('#acqitalid').hide();
		$('#convictionid').hide();
		$('#dischrgedid').show();

	} else {
		$('#convictionid').hide();
		$('#dischrgedid').hide();
		$('#acqitalid').hide();
	}
}
$(document).on("click", "#searchdisposal", function() {
	$("#eprocListform").show();
	smoothScroll(document.getElementById('eprocListform'));
});

$(document).on("click", "#disposalshow", function() {
	$("#disposaldiv").show();
	smoothScroll(document.getElementById('disposaldiv'));
});

$(document).on("click", "#searchlegopn", function() {
	$("#eprocListfrm").show();
	smoothScroll(document.getElementById('eprocListfrm'));
});

$(document).on("click", "#legopnshow", function() {
	$("#legopndiv").show();
	smoothScroll(document.getElementById('legopndiv'));
});

$(document).on("click", "#searchdrftsht", function() {
	$("#eprocLstfrm").show();
	smoothScroll(document.getElementById('eprocLstfrm'));
});

$(document).on("click", "#drftchrgshow", function() {
	$("#drftcgrgshtdiv").show();
	smoothScroll(document.getElementById('drftcgrgshtdiv'));
});

$(document)
		.ready(
				
				function() {
					
					$('#firnotdonlisttable123').DataTable({
						"pagingType" : "full_numbers"
					});
					
					$('#firnotdonlisttable').DataTable({
						"pagingType" : "full_numbers"
					});
					$('#firdonlisttable').DataTable({
						"pagingType" : "full_numbers"
					});
					$('#casedonlisttable').DataTable({
						"pagingType" : "full_numbers"
					});
					$('#caseregid').click(function() {
						$('#showcaseregidiv').show();
						$('#showfirdonediv').hide();
						$('#showcaseunregdiv').hide();
					});

					$('#firdoneid').click(function() {
						$('#showfirdonediv').show();
						$('#showcaseregidiv').hide();
						$('#showcaseunregdiv').hide();
					});

					$('#caseunregid').click(function() {
						$('#showcaseunregdiv').show();
						$('#showcaseregidiv').hide();
						$('#showfirdonediv').hide();
					});

					$("#fromDate").datepicker({
						format : 'dd-mm-yyyy',
						todayHighlight : true,
						todayBtn : 'linked',
						autoclose : true,
						endDate : '0d',
						startDate : '01-01-1750'

					});

					$("#toDate").datepicker({
						format : 'dd-mm-yyyy',
						todayHighlight : true,
						todayBtn : 'linked',
						autoclose : true,
						endDate : '0d',
						startDate : '01-01-1750'
					});

					$('#reqdateid').datepicker({
						format : 'dd-mm-yyyy',
						todayHighlight : true,
						todayBtn : 'linked',
						autoclose : true

					})

				/*	$('#dairyDateid').datepicker({
						format : 'dd-mm-yyyy',
						todayHighlight : true,
						todayBtn : 'linked',
						autoclose : true

					})*/
					
						
					$('#repdateid').datepicker({
						format : 'dd-mm-yyyy',
						todayHighlight : true,
						todayBtn : 'linked',
						autoclose : true

					})

					$('#dftChrgshtReqdateid').datepicker({
						format : 'dd-mm-yyyy',
						todayHighlight : true,
						todayBtn : 'linked',
						autoclose : true

					})

					$('#dftChrgshtRepdateid').datepicker({
						format : 'dd-mm-yyyy',
						todayHighlight : true,
						todayBtn : 'linked',
						autoclose : true

					})

					$('#disposaldateid').datepicker({
						format : 'dd-mm-yyyy',
						todayHighlight : true,
						todayBtn : 'linked',
						autoclose : true

					})

					// case reg
					$('#yearfir').datepicker({
						autoclose : true,
						format : 'yyyy',
						minViewMode : "years",
						endDate : '-0y',
						startDate : '1750'

					}).on("changeDate", function(e) {
						$('#yearfir').valid();

					});

					$("#firsrno").blur(
							function() {

								if ($("#firsrno").val().length > 0
										&& $("#firsrno").val() != 0) {
									$("#firsrno").val(
											pad(($('#firsrno').val()), 4));
								} else if ($("#firsrno").val().length == 0) {
									$("#firsrno").val("")
								} else {
									// alert("Zero Can Not Be Added as FIR");
									/*
									 * showpooup( "Zero Can Not Be Added as
									 * FIR", "alert-danger", "alert-success",
									 * "alert-info");
									 */
									$("#firsrno").val("")
								}
							});

					$('#stateCdlopinion')
							.change(
									function() {
										$
												.getJSON(
														'allDistricts',
														{
															stateCode : $(this)
																	.val(),
															ajax : 'true'
														},
														function(data) {
															var html = '<option value="">---Select District---</option>';
															var len = data.length;
															for (var i = 0; i < len; i++) {
																// alert("k"+data[i].distCode);
																html += '<option value="'
																		+ data[i].distCode
																		+ '">'
																		+ data[i].distDesc
																		+ '</option>';
															}
															html += '</option>';
															$('#distCdlegop')
																	.html("");
															$('#distCdlegop')
																	.html(html);
														});
									});

					$('#distCdlegop')
							.change(
									function() {
										$
												.getJSON(
														'allPolicestations',
														{
															distCode : $(this)
																	.val(),
															ajax : 'true'
														},
														function(data) {
															var html = '<option value="">---Select---</option>';
															var len = data.length;
															for (var i = 0; i < len; i++) {

																// alert("k ;;;;
																// "+data[i].psCode);

																html += '<option value="'
																		+ data[i].psCode
																		+ '">'
																		+ data[i].psDesc
																		+ '</option>';
															}
															html += '</option>';
															$('#policeCdlegop')
																	.html("");
															$('#policeCdlegop')
																	.html(html);
														});
									});
					// end case reg

					// case fir done

					$('#yearfirfd').datepicker({
						autoclose : true,
						format : 'yyyy',
						minViewMode : "years",
						endDate : '-0y',
						startDate : '1750'

					}).on("changeDate", function(e) {
						$('#yearfirfd').valid();

					});

					$("#firsrnofd").blur(
							function() {

								if ($("#firsrnofd").val().length > 0
										&& $("#firsrnofd").val() != 0) {
									$("#firsrnofd").val(
											pad(($('#firsrnofd').val()), 4));
								} else if ($("#firsrnofd").val().length == 0) {
									$("#firsrnofd").val("")
								} else {
									// alert("Zero Can Not Be Added as FIR");
									/*
									 * showpooup( "Zero Can Not Be Added as
									 * FIR", "alert-danger", "alert-success",
									 * "alert-info");
									 */
									$("#firsrnofd").val("")
								}
							});

					$('#stateCdlopfd')
							.change(
									function() {
										$
												.getJSON(
														'allDistricts',
														{
															stateCode : $(this)
																	.val(),
															ajax : 'true'
														},
														function(data) {
															var html = '<option value="">---Select District---</option>';
															var len = data.length;
															for (var i = 0; i < len; i++) {
																// alert("k"+data[i].distCode);
																html += '<option value="'
																		+ data[i].distCode
																		+ '">'
																		+ data[i].distDesc
																		+ '</option>';
															}
															html += '</option>';
															$('#distCdlegopfd')
																	.html("");
															$('#distCdlegopfd')
																	.html(html);
														});
									});

					$('#distCdlegopfd')
							.change(
									function() {
										$
												.getJSON(
														'allPolicestations',
														{
															distCode : $(this)
																	.val(),
															ajax : 'true'
														},
														function(data) {
															var html = '<option value="">---Select---</option>';
															var len = data.length;
															for (var i = 0; i < len; i++) {

																// alert("k ;;;;
																// "+data[i].psCode);

																html += '<option value="'
																		+ data[i].psCode
																		+ '">'
																		+ data[i].psDesc
																		+ '</option>';
															}
															html += '</option>';
															$(
																	'#policeCdlegopfd')
																	.html("");
															$(
																	'#policeCdlegopfd')
																	.html(html);
														});
									});

					// end case fir done

					// unreg case

					$('#yearfircu').datepicker({
						autoclose : true,
						format : 'yyyy',
						minViewMode : "years",
						endDate : '-0y',
						startDate : '1750'

					}).on("changeDate", function(e) {
						$('#yearfircu').valid();

					});

					$("#firsrnocu").blur(
							function() {

								if ($("#firsrnocu").val().length > 0
										&& $("#firsrnocu").val() != 0) {
									$("#firsrnocu").val(
											pad(($('#firsrnocu').val()), 4));
								} else if ($("#firsrnocu").val().length == 0) {
									$("#firsrnocu").val("")
								} else {
									// alert("Zero Can Not Be Added as FIR");
									/*
									 * showpooup( "Zero Can Not Be Added as
									 * FIR", "alert-danger", "alert-success",
									 * "alert-info");
									 */
									$("#firsrnocu").val("")
								}
							});

					$('#stateCdlopcu')
							.change(
									function() {
										$
												.getJSON(
														'allDistricts',
														{
															stateCode : $(this)
																	.val(),
															ajax : 'true'
														},
														function(data) {
															var html = '<option value="">---Select District---</option>';
															var len = data.length;
															for (var i = 0; i < len; i++) {
																// alert("k"+data[i].distCode);
																html += '<option value="'
																		+ data[i].distCode
																		+ '">'
																		+ data[i].distDesc
																		+ '</option>';
															}
															html += '</option>';
															$('#distCdlegopcu')
																	.html("");
															$('#distCdlegopcu')
																	.html(html);
														});
									});

					$('#distCdlegopcu')
							.change(
									function() {
										$
												.getJSON(
														'allPolicestations',
														{
															distCode : $(this)
																	.val(),
															ajax : 'true'
														},
														function(data) {
															var html = '<option value="">---Select---</option>';
															var len = data.length;
															for (var i = 0; i < len; i++) {

																alert("k ;;;; "
																		+ data[i].psCode);

																html += '<option value="'
																		+ data[i].psCode
																		+ '">'
																		+ data[i].psDesc
																		+ '</option>';
															}
															html += '</option>';
															$(
																	'#policeCdlegopcu')
																	.html("");
															$(
																	'#policeCdlegopcu')
																	.html(html);
														});
									});

					// end unreg case

					/*
					 * $("#legalopreqid") .validate({ debug: true, ignore:
					 * ".ignore,*:not([name])", rules: { reqdate: { required:
					 * true, anyDate: true }, reqtypecd: { required: true, },
					 * 
					 * docContent: { required: false, accept: "application/pdf" },
					 * remarks: { maxlength: 100, lettersnNumberwithbasicpunc:
					 * true }
					 *  }, messages: {
					 * 
					 * reqdate: { required: "Please enter Date" },
					 * 
					 * reqtypecd: { required: "Please select reqtypecd", },
					 * docContent: {
					 * 
					 * accept: "Please select valid File i.e pdf only" },
					 * remarks: { maxlength: "Remarks must not exceed 100
					 * characters", lettersnNumberwithbasicpunc: "Please specify
					 * valid Remarks " }
					 *  },
					 * 
					 * errorPlacement: function(error, element) {
					 * error.addClass("help-block");
					 * $(element).next('.FeRror').html( error.text()).css(
					 * 'display', 'block');
					 *  }, highlight: function(element, errorClass, validClass) {
					 * $(element).parent().addClass( "has-error").removeClass(
					 * "has-success"); }, unhighlight: function(element,
					 * errorClass, validClass) { if
					 * ($(element).parent().hasClass('has-error')) {
					 * $(element).parent().addClass( "has-success").removeClass(
					 * "has-error"); $(element).next('.FeRror').css( 'display',
					 * 'none'); } }, submitHandler: function(form) {
					 * alert("sdnksnd"); var mode=$('#legal_opin_mode').val();
					 * var dist=$('#districtCd').val(); var
					 * ps=$('#policeCd').val(); var file_data =
					 * $('#file11').prop( 'files')[0]; var reqdate_Id = $(
					 * '#reqdateid').val(); var reqType_Id =
					 * $('#reqTypeId').val(); var remarks_Id =
					 * $('#remarksId').val(); var eprocID = $('#eProcId').val();
					 * var dairyNoId = $('#dairyNoid').val(); var dairyDateId =
					 * $('#dairyDateid').val(); var fromOfficerId =
					 * $('#fromOfficerid').val(); var toOfficerId =
					 * $('#toOfficerid').val(); var briefFactsId =
					 * $('#briefFactsid').val();
					 * 
					 * var form_data = new FormData(); form_data.append('file',
					 * file_data); form_data.append('eprocid', eprocID);
					 * form_data.append('reqdate', reqdate_Id);
					 * form_data.append('reqtypecd', reqType_Id);
					 * form_data.append('remarks', remarks_Id);
					 * form_data.append('dairyNo', dairyNoId);
					 * form_data.append('dairyDate', dairyDateId);
					 * form_data.append('fromOfficer', fromOfficerId);
					 * form_data.append('toOfficer', toOfficerId);
					 * form_data.append('briefFacts', briefFactsId);
					 * form_data.append('legal_opin_mode',mode);
					 * form_data.append('districtCd', dist);
					 * form_data.append('policeCd',ps);
					 * 
					 * if (file_data.size > 2097152 ) { alert("File size must be
					 * less than 2MB"); return false; } var token =
					 * GetNewToken(); $("#secureToken").val(token);
					 * 
					 * console.log(form_data);
					 *  $ .ajax({ url: 'savelegopreqdetails', data: form_data,
					 * async: false, dataType: 'text', processData: false,
					 * contentType: false, type: 'POST', beforeSend:
					 * function(xhr) { xhr.setRequestHeader("Accept",
					 * "application/json"); xhr .setRequestHeader(
					 * 'X-CSRF-Token', $( '#secureToken') .val()); }, success:
					 * function(data, textStatus, jqXHR) {
					 * 
					 * var obj = $.parseJSON(data); if(obj.status == "success"){
					 * alert("Record Saved Succesfully."); viewlegopen(45);
					 * 
					 * showpooup( "File Uploaded Succesfully.", "alert-success",
					 * "alert-danger", "alert-info");
					 * 
					 *  } else { alert("Record could not be Saved."); showpooup(
					 * "File could not be Uploaded", "alert-success",
					 * "alert-danger", "alert-info"); } }, error:
					 * function(jqXHR, textStatus, errorThrown) {
					 * alert(textStatus, errorThrown); } });
					 * 
					 * var token = GetNewToken(); $("#secureToken").val(token); }
					 * 
					 * });
					 */

					$(document)
							.on(
									"click",
									"#savelegopreqUploadDoc",
									function() {
										var mode = $('#legal_opin_mode').val();
										var cnr_num = "null";
										var cnr_date = "null";
										var fir_num = "null";
										var fir_date = "null";
										var court_cd = "null";
										var eprocID = $('#eProcId').val();
										var dist = $('#districtCd').val();
										var ps = $('#policeCd').val();
										var reqdate_Id = $('#DateOfOpnin1')
												.val();
										var reqType_Id = $('#reqTypeId').val();
										var dairyNoId = $('#dairyNoid').val();
										var id = $('#dairyDateid').val();
										alert(id);
										var fromOfficerId = $('#fromOfficerid')
												.val();
										var toOfficerId = $('#toOfficerid')
												.val();
										var remarks_Id = $('#remarksId').val();
										var briefFactsId = $('#briefFactsid')
												.val();
										var file_data = $('#file11').prop(
												'files')[0];

										var form_data = new FormData();
										form_data.append('file', file_data);
										form_data.append('reqdate', reqdate_Id);
										form_data.append('reqtypecd',
												reqType_Id);
										form_data.append('remarks', remarks_Id);
										form_data.append('dairyNo', dairyNoId);
										form_data.append('dairyDate',
												id);
										form_data.append('fromOfficer',
												fromOfficerId);
										form_data.append('toOfficer',
												toOfficerId);
										form_data.append('briefFacts',
												briefFactsId);
										form_data.append('legal_opin_mode',
												mode);
										form_data.append('districtCd', dist);
										form_data.append('policeCd', ps);
										form_data.append('cnr_num', cnr_num);
										form_data.append('cnr_date', cnr_date);
										form_data.append('fir_num', fir_num);
										form_data.append('fir_date', fir_date);
										form_data.append('court_cd', court_cd);

										$
												.ajax({
													url : 'savelegopreqdetails',
													data : form_data,
													async : false,
													dataType : 'text',
													processData : false,
													contentType : false,
													type : 'POST',
													beforeSend : function(xhr) {
														xhr
																.setRequestHeader(
																		"Accept",
																		"application/json");
														xhr
																.setRequestHeader(
																		'X-CSRF-Token',
																		$(
																				'#secureToken')
																				.val());
													},
													success : function(data,
															textStatus, jqXHR) {
													    alert(data);
														if (data== "success") {
															$("#LegalOpinionForm").modal("hide");
															document.getElementById("legalopreqid").reset();
														    var msg ="Legal Opinion added successfully";
														    firnodonefun123();
														    showpooup_d(msg,"alert-success","alert-info","alert-danger")
														} 
													},
													error : function(jqXHR,
															textStatus,
															errorThrown) {
														// alert(textStatus,
														// errorThrown);
													}
												});

										var token = GetNewToken();
										$("#secureToken").val(token);
									});

					$(document)
							.on(
									"click",
									"#savelegopreqUploadDocFir",
									function() {

										// alert("sdnksnd");
										var mode = $('#legal_opin_mode').val();
										var dist = $('#districtCd').val();
										var ps = $('#policeCd').val();
										var file_data = $('#file11').prop(
												'files')[0];
										var cnr_num = null;
										var cnr_date = '';
										var fir_num = $('#fir_num').val();
										var fir_date = $('#fir_date').val();
										var reqdate_Id = $('#DateOfOpnin1')
												.val();
										var reqType_Id = $('#reqTypeId').val();
										var remarks_Id = $('#remarksId').val();
										var eprocID = $('#eProcId').val();
										var dairyNoId = null;
										var dairyDateId = '';
										var fromOfficerId = $('#fromOfficerid')
												.val();
										var toOfficerId = $('#toOfficerid')
												.val();
										var briefFactsId = $('#briefFactsid')
												.val();
										var form_data = new FormData();
										form_data.append('file', file_data);
										form_data.append('eprocid', eprocID);
										form_data.append('reqdate', reqdate_Id);
										form_data.append('reqtypecd',
												reqType_Id);
										form_data.append('remarks', remarks_Id);
										form_data.append('dairyNo', dairyNoId);
										form_data.append('dairyDate',
												dairyDateId);
										form_data.append('fromOfficer',
												fromOfficerId);
										form_data.append('toOfficer',
												toOfficerId);
										form_data.append('briefFacts',
												briefFactsId);
										form_data.append('legal_opin_mode',
												mode);
										form_data.append('districtCd', dist);
										form_data.append('policeCd', ps);
										form_data.append('cnr_num', cnr_num);
										form_data.append('cnr_date', cnr_date);
										form_data.append('fir_num', fir_num);
										form_data.append('fir_date', fir_date);
										var court_cd = 0;
										form_data.append('court_cd', court_cd);

										/*
										 * if (file_data.size > 2097152 ) {
										 * alert("File size must be less than
										 * 2MB"); return false; }
										 */
										var token = GetNewToken();
										$("#secureToken").val(token);

										console.log(form_data);
										alert("sdnksnd");
										$
												.ajax({
													url : 'savelegopreqdetails',
													data : form_data,
													async : false,
													dataType : 'text',
													processData : false,
													contentType : false,
													type : 'POST',
													beforeSend : function(xhr) {
														xhr
																.setRequestHeader(
																		"Accept",
																		"application/json");
														xhr
																.setRequestHeader(
																		'X-CSRF-Token',
																		$(
																				'#secureToken')
																				.val());
													},
													success : function(data,
															textStatus, jqXHR) {

													/*	var obj = $
																.parseJSON(data);
														if (obj.status == "success") {
															alert("Record Saved Succesfully.");
															document
																	.getElementById(
																			"legalopreqid")
																	.reset();
															$(
																	"#LegalOpinionForm")
																	.modal(
																			"hide");
															alert("Legal Opinion added successfully");
															location
																	.reload(true);*/

															/*
															 * showpooup( "File
															 * Uploaded
															 * Succesfully.",
															 * "alert-success",
															 * "alert-danger",
															 * "alert-info");
															 */
														
														  alert(data);
															if (data== "success") {
																$("#LegalOpinionForm").modal("hide");
																document.getElementById("legalopreqid").reset();
															    var msg ="Legal Opinion added successfully";
															    firdonefun();
															    showpooup_d(msg,"alert-success","alert-info","alert-danger")
															} 

													},
													error : function(jqXHR,
															textStatus,
															errorThrown) {
														alert(textStatus,
																errorThrown);
													}
												});

										var token = GetNewToken();
										$("#secureToken").val(token);
									});

					$(document)
							.on(
									"click",
									"#savelegopreqUploadDocCnr",
									function() {

										alert("sdnksnd>>>>");
										var mode = $('#legal_opin_mode').val();
										alert("mode" + mode);
										var court_cd = $('#court_cd').val();

										var dist = $('#districtCd').val();
										var ps = 0;
										var file_data = $('#file11').prop(
												'files')[0];
										var cnr_num = $('#cnr_num').val();
										var cnr_date = $('#cnr_date').val();
										var fir_num = null;
										var fir_date = null;
										var reqdate_Id = $('#DateOfOpnin1')
												.val();
										var reqType_Id = $('#reqTypeId').val();
										var remarks_Id = $('#remarksId').val();
										var eprocID = $('#eProcId').val();
										var dairyNoId = null;
										var dairyDateId = null;
										var fromOfficerId = $('#fromOfficerid')
												.val();
										var toOfficerId = $('#toOfficerid')
												.val();
										var briefFactsId = $('#briefFactsid')
												.val();
										var form_data = new FormData();
										form_data.append('file', file_data);
										form_data.append('eprocid', eprocID);
										form_data.append('reqdate', reqdate_Id);
										form_data.append('reqtypecd',
												reqType_Id);
										form_data.append('remarks', remarks_Id);
										form_data.append('dairyNo', dairyNoId);
										form_data.append('dairyDate',
												dairyDateId);
										form_data.append('fromOfficer',
												fromOfficerId);
										form_data.append('toOfficer',
												toOfficerId);
										form_data.append('briefFacts',
												briefFactsId);
										form_data.append('legal_opin_mode',
												mode);
										form_data.append('districtCd', dist);
										form_data.append('policeCd', ps);
										form_data.append('cnr_num', cnr_num);
										form_data.append('cnr_date', cnr_date);
										form_data.append('fir_num', fir_num);
										form_data.append('fir_date', fir_date);
										form_data.append('court_cd', court_cd);
										/*
										 * if (file_data.size > 2097152 ) {
										 * alert("File size must be less than
										 * 2MB"); return false; }
										 */
										var token = GetNewToken();
										$("#secureToken").val(token);

										console.log(form_data);

										$
												.ajax({
													url : 'savelegopreqdetails',
													data : form_data,
													async : false,
													dataType : 'text',
													processData : false,
													contentType : false,
													type : 'POST',
													beforeSend : function(xhr) {
														xhr
																.setRequestHeader(
																		"Accept",
																		"application/json");
														xhr
																.setRequestHeader(
																		'X-CSRF-Token',
												 						$(
																				'#secureToken')
																				.val());
													},
													success : function(data,
															textStatus, jqXHR) {
														
														  alert(data);
															if (data== "success") {
																$("#LegalOpinionForm").modal("hide");
																document.getElementById("legalopreqid").reset();
															    var msg ="Legal Opinion added successfully";
															    fircnrfun();
															    showpooup_d(msg,"alert-success","alert-info","alert-danger")
															} 

													},
													error : function(jqXHR,
															textStatus,
															errorThrown) {
														alert(textStatus,
																errorThrown);
													}
												});

										var token = GetNewToken();
										$("#secureToken").val(token);
									});

					$("#DraftChrgshtReqid")
							.validate(
									{
										debug : true,
										ignore : ".ignore,*:not([name])",
										rules : {
											dftChrgshtReqdate : {
												required : true,
												anyDate : true
											},
											reqtypecd : {
												required : true,
											},

											docContent : {
												required : true,
												accept : "application/pdf"
											},
											remarks : {
												maxlength : 100,
												lettersnNumberwithbasicpunc : true
											}

										},
										messages : {

											dftChrgshtReqdate : {
												required : "Please enter Date"
											},

											reqtypecd : {
												required : "Please select ",
											},

											docContent : {

												accept : "Please select valid File i.e pdf only"
											},
											remarks : {
												maxlength : "Remarks must not exceed 100 characters",
												lettersnNumberwithbasicpunc : "Please specify valid Remarks "
											}

										},

										errorPlacement : function(error,
												element) {
											error.addClass("help-block");
											$(element).next('.FeRror').html(
													error.text()).css(
													'display', 'block');

										},
										highlight : function(element,
												errorClass, validClass) {
											$(element).parent().addClass(
													"has-error").removeClass(
													"has-success");
										},
										unhighlight : function(element,
												errorClass, validClass) {
											if ($(element).parent().hasClass(
													'has-error')) {
												$(element).parent().addClass(
														"has-success")
														.removeClass(
																"has-error");
												$(element).next('.FeRror').css(
														'display', 'none');
											}
										},
										submitHandler : function(form) {
											// alert("sdnksnd");
											var DraftChrgshtReqs = $("#DraftChrgshtReqid");
											var entityJsonStr = JSON
													.stringify(DraftChrgshtReqs);
											var file_data = $('#file11').prop(
													'files')[0];
											var reqdate_Id = $(
													'#dftChrgshtReqdateid')
													.val();
											var reqType_Id = $('#reqTypeId')
													.val();
											var remarks_Id = $('#remarksId')
													.val();
											var reqquerycd_Id = $(
													'#reqquerycdId').val();
											var eprocID = $('#eProcId').val();
											var briefFactsId = $(
													'#briefFactsid').val();
											// reorder_act_section(totalrec)
											var form_data = new FormData();
											form_data.append('file', file_data);
											form_data
													.append('eprocid', eprocID);
											form_data.append(
													'dftChrgshtReqdate',
													reqdate_Id);
											form_data.append('reqtypecd',
													reqType_Id);
											form_data.append('remarks',
													remarks_Id);
											form_data.append('reqquerycd',
													reqquerycd_Id);
											form_data.append('briefFacts',
													briefFactsId);
											form_data
													.append(
															"data",
															new Blob(
																	[ entityJsonStr ],
																	{
																		type : "application/json" // **
																									// specify
																									// that
																									// this
																									// is
																									// JSON**
																	}));
											var token = GetNewToken();
											$("#secureToken").val(token);

											console.log(form_data);

											$
													.ajax({
														url : 'savedftChrgshtReqdetails',
														data : form_data,
														cache : false,
														dataType : 'text',
														processData : false,
														contentType : false,
														type : 'POST',
														beforeSend : function(
																xhr) {
															xhr
																	.setRequestHeader(
																			"Accept",
																			"application/json");
															xhr
																	.setRequestHeader(
																			'X-CSRF-Token',
																			$(
																					'#secureToken')
																					.val());
														},
														success : function(
																data,
																textStatus,
																jqXHR) {

															var obj = $
																	.parseJSON(data);
															if (obj.status == "success") {
																alert("Record Saved Succesfully.");
																/* viewlegopen(45); */

																/*
																 * showpooup(
																 * "File
																 * Uploaded
																 * Succesfully.",
																 * "alert-success",
																 * "alert-danger",
																 * "alert-info");
																 */

															} else {
																// alert("Record
																// could not be
																// Saved.");
																/*
																 * showpooup(
																 * "File could
																 * not be
																 * Uploaded",
																 * "alert-success",
																 * "alert-danger",
																 * "alert-info");
																 */
															}
														},
														error : function(jqXHR,
																textStatus,
																errorThrown) {
															alert(textStatus,
																	errorThrown);
														}
													});

											var token = GetNewToken();
											$("#secureToken").val(token);
										}

									});

					$("#disposalid")
							.validate(
									{
										debug : true,
										ignore : ".ignore,*:not([name])",
										rules : {
											disposaldate : {
												required : true,
												anyDate : true
											},
											disposaltypecd : {
												required : true,
											},

											fitforappeal : {
												required : true,
											},
											disconn : {
												required : true,
											},
											discharged : {
												required : true,
											},
											docContent : {
												required : true,
												accept : "application/pdf"
											},
											remarks : {
												maxlength : 100,
												lettersnNumberwithbasicpunc : true
											}

										},
										messages : {

											disposaldate : {
												required : "Please enter disposal date"
											},

											disposaltypecd : {
												required : "Please select disposal type",
											},
											fitforappeal : {
												required : "Please select fit for appeal",
											},
											disconn : {
												required : "Please select connection",
											},
											discharged : {
												required : "Please select discharged",
											},
											docContent : {

												accept : "Please select valid File i.e pdf only"
											},
											remarks : {
												maxlength : "Remarks must not exceed 100 characters",
												lettersnNumberwithbasicpunc : "Please specify valid Remarks "
											}

										},

										errorPlacement : function(error,
												element) {
											error.addClass("help-block");
											$(element).next('.FeRror').html(
													error.text()).css(
													'display', 'block');

										},
										highlight : function(element,
												errorClass, validClass) {
											$(element).parent().addClass(
													"has-error").removeClass(
													"has-success");
										},
										unhighlight : function(element,
												errorClass, validClass) {
											if ($(element).parent().hasClass(
													'has-error')) {
												$(element).parent().addClass(
														"has-success")
														.removeClass(
																"has-error");
												$(element).next('.FeRror').css(
														'display', 'none');
											}
										},
										submitHandler : function(form) {
											// alert("sndsnd");
											var file_data = $('#file11').prop(
													'files')[0];
											var disposaldate_id = $(
													'#disposaldateid').val();
											var disposaltypecd_id = $(
													'#disposaltypecdid').val();
											var eprocID = $('#eProcId').val();
											var fitforappealid;
											var disconnid;
											var dischargedid;
											if ($(
													'input:radio[name=fitforappeal]:checked')
													.val() == 'Y') {
												fitforappealid = 'Y';
											} else {
												fitforappealid = 'N';
											}
											if ($(
													'input:radio[name=disconn]:checked')
													.val() == 'Y') {
												disconnid = 'Y';
											} else {
												disconnid = 'N';
											}

											if ($(
													'input:radio[name=discharged]:checked')
													.val() == 'Y') {
												dischargedid = 'Y';
											} else {
												dischargedid = 'N';
											}
											var remarks_Id = $('#remarksId')
													.val();
											// var repquerycd_Id =
											// $('#fitforappealy').val();

											var form_data = new FormData();
											form_data.append('file', file_data);
											form_data.append('eprocid', 22);
											form_data.append('disposaldate',
													disposaldate_id);
											form_data.append('disposaltypecd',
													disposaltypecd_id);
											form_data.append('fitforappeal',
													fitforappealid);
											form_data.append('discharged',
													dischargedid);
											form_data.append('disconn',
													disconnid);
											form_data.append('remarks',
													remarks_Id);
											if (file_data != ''
													&& file_data.size > 2097152) {
												alert("File size must be less than 2MB");
												/*
												 * showpooup( "File size must be
												 * less than 2MB",
												 * "alert-danger",
												 * "alert-success",
												 * "alert-info");
												 */
												return false;
											} else {

											}

											var token = GetNewToken();
											$("#secureToken").val(token);
											console.log("form_data  "
													+ form_data);
											$
													.ajax({
														url : 'saveDisposaldetails',
														data : form_data,
														async : false,
														dataType : 'text',
														processData : false,
														contentType : false,
														type : 'POST',
														beforeSend : function(
																xhr) {
															xhr
																	.setRequestHeader(
																			"Accept",
																			"application/json");
															xhr
																	.setRequestHeader(
																			'X-CSRF-Token',
																			$(
																					'#secureToken')
																					.val());
														},
														success : function(
																data,
																textStatus,
																jqXHR) {

															var obj = $
																	.parseJSON(data);
															if (obj.status == "success") {
																alert("Record Saved Succesfully.");
																viewdisposal(66);
																// listeprocfordspl(66);
																/*
																 * showpooup(
																 * "File
																 * Uploaded
																 * Succesfully.",
																 * "alert-success",
																 * "alert-danger",
																 * "alert-info");
																 */

															} else {
																// alert("Record
																// could not be
																// Saved.");
																/*
																 * showpooup(
																 * "File could
																 * not be
																 * Uploaded",
																 * "alert-success",
																 * "alert-danger",
																 * "alert-info");
																 */
															}
														},
														error : function(jqXHR,
																textStatus,
																errorThrown) {
															alert(textStatus,
																	errorThrown);
														}
													});
											var token = GetNewToken();
											$("#secureToken").val(token);
										}

									});

					var totalreccount = 0;

					function showHideActSecDiv(count) {

						if (count == undefined || count == 0) {
							$("#finalactsection").hide();
						} else {
							$("#finalactsection").show();
						}
					}

					showHideActSecDiv(0);

					var sectiontab;

					$(".clickable-acts")
							.click(
									function() {

										if ($(this).hasClass('selectedacts')) {

											$(this).removeClass('selectedacts');

											$(this)
													.addClass(
															'selectedforfetch');
											var actdatableaarr = actdatable
													.rows('.selectedforfetch')
													.data();
											// id="act_'+actdatableaarr[0][1]+'"
											$(
													'#sectionsubmenu_'
															+ actdatableaarr[0][1])
													.remove();
											$('#act_' + actdatableaarr[0][1])
													.remove();
											$(this).removeClass(
													'selectedforfetch');

										} else {
											$(this).addClass('selectedacts');
											$(this)
													.addClass(
															'selectedforfetch');
											var actdatableaarr = actdatable
													.rows('.selectedforfetch')
													.data();
											$(this).removeClass(
													'selectedforfetch');
											$("#menu-content")
													.append(
															'<li  data-toggle="collapse" data-target="#sectionsubmenu_'
																	+ actdatableaarr[0][1]
																	+ '" onclick="fetchsection('
																	+ actdatableaarr[0][1]
																	+ ')" class="collapsed active actmenu" id="act_'
																	+ actdatableaarr[0][1]
																	+ '" ><a href="#" >'
																	+ actdatableaarr[0][2]
																	+ '<span class="arrow"></span></a></li>');

										}

									});

					$(".actdiv").click(function() {
						$('#acttablediv').show();
						$('#sectiondiv').hide();
					});

					$(document).on(
							'click',
							'a[class=delsection]',
							function(e) {
								var pattern_act = /act_[0-9]+section_[0-9]+/;
								var act_code = $(this).parent().attr("id");

								act_code = act_code.substring((act_code
										.indexOf('_') + 1), act_code
										.indexOf("section"));

								$(this).parent().remove();
								fetchsection(act_code);

							})
					$(document).on('click', 'a[id=delrec]', function(e) {

						$(this).parent().parent().remove();
						totalreccount = totalreccount - 1;

						if (totalreccount == undefined || totalreccount == 0) {
							// alert("jkdfkdfk");
							$("#finalactsection").hide();
						} else {
							$("#finalactsection").show();
						}

					})

					$('#section tbody')
							.on(
									'click',
									'tr',
									function() {
										sectiontab = "";
										sectiontab = callsectiontable();
										console.log(sectiontab);
										if ($(this).hasClass('selectedsection')) {

											$(this).removeClass(
													'selectedsection');
											$(this)
													.addClass(
															'selectedforfetch');
											var sectiondatableaarr = sectiontab
													.rows('.selectedforfetch')
													.data();

											$(
													"#act_"
															+ sectiondatableaarr[0].actSectionCd
															+ "section_"
															+ sectiondatableaarr[0].section)
													.remove();
											$(this).removeClass(
													'selectedforfetch');
										} else {

											$(this).addClass('selectedsection');
											$(this)
													.addClass(
															'selectedforfetch');
											var sectiondatableaarr = sectiontab
													.rows('.selectedforfetch')
													.data();
											console
													.log(sectiondatableaarr[0].actSectionCd);
											if (($('#sectionsubmenu_'
													+ sectiondatableaarr[0].actSectionCd).length)) {
												// alert("element exist");
												$(
														'#sectionsubmenu_'
																+ sectiondatableaarr[0].actSectionCd)
														.append(
																'<li class="active" id="act_'
																		+ sectiondatableaarr[0].actSectionCd
																		+ 'section_'
																		+ sectiondatableaarr[0].section
																		+ '" >Section No.: '
																		+ sectiondatableaarr[0].section
																		+ '<a href="#" class="delsection"><i class="fa fa-trash-o" aria-hidden="true"> </i></a></li>');

											} else { // alert("element does
												// not exist");
												$(
														'#act_'
																+ sectiondatableaarr[0].actSectionCd)
														.after(
																'<ul class="sub-menu collapse in" id="sectionsubmenu_'
																		+ sectiondatableaarr[0].actSectionCd
																		+ '" ><li class="active" id="act_'
																		+ sectiondatableaarr[0].actSectionCd
																		+ 'section_'
																		+ sectiondatableaarr[0].section
																		+ '" >Section No.: '
																		+ sectiondatableaarr[0].section
																		+ '<a href="#" class="delsection"><i class="fa fa-trash-o " aria-hidden="true"> </i> </a></li></ul>');
											}

											$(this).removeClass(
													'selectedforfetch');
										}
										sectiontab = "";

									});

					var actdatable = $('#actlist').DataTable({});

					var patt_act = /act_[0-9]+/;
					var patt_section = /act_[0-9]+section_[0-9]+/;
					var acts_array = new Array();
					var act_code = "";
					var act_desc = "";
					var sec_code = "";
					var sec_desc = "";

					$("#addactsection")
							.click(
									function() {

										$('li[id^="act_"]')
												.each(
														function() {

															// find action
															if (patt_act
																	.test($(
																			this)
																			.attr(
																					"id")) == true
																	&& patt_section
																			.test($(
																					this)
																					.attr(
																							"id")) == false) {

																act_code = $(
																		this)
																		.attr(
																				"id");
																var n = act_code
																		.lastIndexOf('_');
																act_code = act_code
																		.substring(
																				n + 1,
																				act_code.length);
																act_desc = $(
																		this)
																		.text()
																		.replace(
																				/\s+/g,
																				" ");

															} else if (patt_section
																	.test($(
																			this)
																			.attr(
																					"id")) == true) {
																sec_code = $(
																		this)
																		.attr(
																				"id");
																var n = sec_code
																		.lastIndexOf('_');
																sec_code = sec_code
																		.substring(
																				n + 1,
																				sec_code.length);
																sec_desc = $(
																		this)
																		.text()
																		.replace(
																				/\s+/g,
																				" ");
																// change for
																// Internet
																// Explorer
																var one_element = {
																	"act_code" : act_code,
																	"act_desc" : act_desc,
																	"sec_code" : sec_code,
																	"sec_desc" : sec_desc
																};
																acts_array
																		.push(one_element);
																totalreccount = totalreccount + 1;

															}

														});
										// alert(totalrec);
										totalrec = totalrec + acts_array.length;

										showHideActSecDiv(acts_array.length);

										$
												.each(
														acts_array,
														function(index, value) {

															var srno = index
																	+ 1
																	+ totalrec
																	- acts_array.length;
															$(
																	'#finalactsection tbody')
																	.append(
																			'<tr><td>'
																					+ acts_array[index].act_desc
																					+ '</td><td>'
																					+ acts_array[index].sec_desc
																					+ '</td><td><a href="#" id="delrec"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td><td class="hidden"><input type="hideen" name="actcode'
																					+ srno
																					+ '"   value="'
																					+ acts_array[index].act_code
																					+ '"><input type="hideen" name="sectioncode'
																					+ srno
																					+ '"  value="'
																					+ acts_array[index].sec_code
																					+ '"></td></tr>');

														});
										acts_array = new Array();

										$("#AddActSect").modal("hide");
									});

					$("#actsecmodalbutton").click(function() {

						$('#menu-content').empty();
						$("#actlist tr").removeClass("selectedacts");
						// act show
						$('#acttablediv').show();

						// section hide
						$('#sectiondiv').hide();

						$("#actlist tr").removeClass("selectedsection");

					});

				});

var sectiontable;

function callsectiontable() {
	return sectiontable;
}
var totalrec = 0;
function fetchsection(actcode) {

	$('#acttablediv').hide();
	sectiontable = "";

	sectiontable = $('#section').DataTable({
		"destroy" : true,
		"ajax" : {
			"url" : "getallsection?actSectionCd=" + actcode,
		},

		"columns" : [

		{
			"data" : "section"
		}, {
			"data" : "sectionDesc"
		}, ],

	});
	$('#sectiondiv').show();

}

function reorder_act_section(totalrecordscount) {
	// alert("totalrecordscount "+totalrecordscount);
	var count = totalrecordscount;
	var arr = new Array();
	var jsonbjarr = new Array();
	var jsonobj;
	var n = 0;
	for (var i = 1; i <= count; i++) {
		// actcode'+i+'
		if ($('[name="actcode' + i + '"]').val() != undefined) {
			arr.push(i);
			n++;
		}
	}
	// alert("n"+n);

	for (var j = 0; j < n; j++) {
		i = arr[j];
		// alert("i"+i);
		$('[name="actcode' + i + '"]').attr("name",
				"actsecdetailobj[][actcode]");
		$('[name="sectioncode' + i + '"]').attr("name",
				"actsecdetailobj[][sectioncode]");

	}

}

/*
 * function listeprocforlreq(eprocid) { alert("eprocid "+eprocid); $ .ajax({
 * type: 'GET', // define the type of HTTP verb we want to use url:
 * 'listeprocforlreq?eprocid=' + eprocid, // the async: false, dataType: 'json',
 * 
 * encode: true, beforeSend: function(xhr) { xhr.setRequestHeader("Accept",
 * "application/json"); xhr.setRequestHeader("Content-Type",
 * "application/json");
 *  }, success: function(data, textStatus, jqXHR) { if (data.length > 0) { try{
 * 
 * var trHTML = ""; var counts=0;
 * 
 * var firstHtml = '<div class="panel panel-default"><div
 * class="panel-heading"><h4 class="panel-title"> List of Added Legal Opinion
 * Request <span id="firnumtab"></span>'+ '</h4></div><div
 * class="panel-body"><table class="w3-table-all w3-hoverable" id="tableid">';
 * 
 * 
 * var lastHtml='</table></div></div>';
 * 
 * $('#lreqtablepanel').html(""); $.each(data, function(i, item) {
 * counts=counts+1;
 * 
 * if (i <9) i = "0" + (i + 1); else { i = i + 1; } var opnType=item.reqtypecd;
 * if(opnType==1) { opnType=''; } else {
 *  } trHTML += '<tr><td>' + i + '</td><td>' + item.eprocid + '</td><td>' +
 * item.reqtypecd + '</td><td>' + item. reqdatetext + '</td><td><a
 * href="#" onclick="viewlreqdoc(\'' + item.eprocid + '\',\'' + item.rowseq +
 * '\')" class="AcCfabTn1" data-toggle="modal"><i class="fa fa-file-pdf-o
 * fa-lg" aria-hidden="true" data-toggle="modal" data-target="#pdfModal" ></i></a></td></tr>';
 * 
 * }); thHTML = "<tr class='w3-light-grey'><th>Sr</th><th>EPROC ID</th><th>Type
 * Of Opinion</th><th>Date Of Opinion</th> <th>View</th></tr>";
 * trHTML=thHTML+trHTML; trHTML=firstHtml+trHTML; trHTML=trHTML+lastHtml;
 * $('#lreqtablepanel').html(trHTML); if(counts==0) {
 * $('#lreqtablepanel').show(); } else{ $('#lreqtablepanel').show(); }
 * 
 * }catch (e) {alert(e); // TODO: handle exception } } else {
 * $('#lreqtablepanel').show(); } }, error: function(jqXHR, textStatus,
 * errorThrown) { alert(textStatus, errorThrown); } });
 * 
 * var token = GetNewToken(); $("#secureToken").val(token); }
 */
/*
 * function listeprocfordspl(eprocid) { alert("eprocid "+eprocid); $ .ajax({
 * type: 'GET', // define the type of HTTP verb we want to use url:
 * 'listeprocfordspl?eprocid=' + eprocid, // the async: false, dataType: 'json',
 * 
 * encode: true, beforeSend: function(xhr) { xhr.setRequestHeader("Accept",
 * "application/json"); xhr.setRequestHeader("Content-Type",
 * "application/json");
 *  }, success: function(data, textStatus, jqXHR) { if (data.length > 0) { try{
 * 
 * var trHTML = ""; var counts=0;
 * 
 * var firstHtml = '<div class="panel panel-default"><div
 * class="panel-heading"><h4 class="panel-title"> List of Added Disposal <span
 * id="firnumtab"></span>'+ '</h4></div><div class="panel-body"><table
 * class="w3-table-all w3-hoverable" id="tableid">';
 * 
 * 
 * var lastHtml='</table></div></div>';
 * 
 * $('#disposaltablepanel').html(""); $.each(data, function(i, item) {
 * counts=counts+1;
 * 
 * if (i <9) i = "0" + (i + 1); else { i = i + 1; } trHTML += '<tr><td>' + i + '</td><td>' +
 * item.eprocid + '</td><td>' + item.disposaltypecd + '</td><td>' + item.
 * dspldatetext + '</td><td><a href="#" onclick="viewdisposaldoc(\'' +
 * item.eprocid + '\',\'' + item.rowseq + '\')" class="AcCfabTn1"
 * data-toggle="modal"><i class="fa fa-file-pdf-o fa-lg" aria-hidden="true"
 * data-toggle="modal" data-target="#pdfModal" ></i></a></td></tr>';
 * 
 * }); thHTML = "<tr class='w3-light-grey'><th>Sr</th><th>EPROC ID</th><th>Type
 * Of Disposal</th><th>Date Of Disposal</th> <th>View</th></tr>";
 * trHTML=thHTML+trHTML; trHTML=firstHtml+trHTML; trHTML=trHTML+lastHtml;
 * $('#disposaltablepanel').html(trHTML); if(counts==0) {
 * $('#disposaltablepanel').show(); } else{ $('#disposaltablepanel').show(); }
 * 
 * }catch (e) {alert(e); // TODO: handle exception } } else {
 * $('#disposaltablepanel').show(); } }, error: function(jqXHR, textStatus,
 * errorThrown) { alert(textStatus, errorThrown); } });
 * 
 * var token = GetNewToken(); $("#secureToken").val(token); }
 */

function GetNewToken() {
	// alert("sandmadf");
	var token;

	$.ajax({
		type : 'GET', // define the type of HTTP verb we want to use (POST for
		// our form)
		url : 'GenerateNewToken', // the url where we want to POST
		// data: search,
		// dataType : 'json', // what type of data do we expect back from the
		// server
		encode : true,
		async : false,
		beforeSend : function(xhr) {
			// xhr.setRequestHeader("Accept", "application/json");
			// xhr.setRequestHeader("Content-Type", "application/json");
			// xhr.setRequestHeader('X-CSRF-Token', $('#secureToken').val());

		},
		success : function(data, textStatus, jqXHR) {

			token = data;
			// alert("token Method "+token);

		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		}

	});

	return token;

}


function showpooup_d(msg,addclass,removeclass1,removeclass2)
{
	
	$("#messgdec").addClass(addclass);
	$("#messgdec").removeClass(removeclass1);
	$("#messgdec").removeClass(removeclass2);
	$(".alert-Msg").empty(); 
	$(".alert-Msg").append(msg);

	$("#complModal").modal("show");
		
	
}
