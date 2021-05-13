$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 	$("#alertSuccess").hide();
 }
 $("#alertError").hide();
});

$(document).on("click", "#btnFundSave", function(event)
{
 
 	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateFundForm();
	if (status != true)
	 {
	 $("#alertError").text(status);
	 $("#alertError").show();
	 return;
	 }
	 
	 // If valid------------------------
	 var type = ($("#hidfundIDSave").val() == "") ? "POST" : "PUT"; 
	 $.ajax( 
	 { 
	 url : "FundAPI", 
	 type : type, 
	 data : $("#formFund").serialize(), 
	 dataType : "text", 
	 complete : function(response, status) 
	 { 
	 onFundSaveComplete(response.responseText, status); 
	 } 
	 }); 	
});

function onFundSaveComplete(response, status)
{ 
	if (status == "success") 
	 { 
		 var resultSet = JSON.parse(response); 
		 if (resultSet.status.trim() == "success") 
		 { 
			 $("#alertSuccess").text("Successfully saved."); 
			 $("#alertSuccess").show(); 
			 $("#divItemsGrid").html(resultSet.data); 
		 } else if (resultSet.status.trim() == "error") 
		 { 
			 $("#alertError").text(resultSet.data); 
			 $("#alertError").show(); 
		 } 
	 } else if (status == "error") 
	 { 
		 $("#alertError").text("Error while saving."); 
		 $("#alertError").show(); 
	 } else
	 { 
		 $("#alertError").text("Unknown error while saving.."); 
		 $("#alertError").show(); 
	 }
	$("#hidfundIDSave").val(""); 
	$("#formFund")[0].reset(); 
}

// UPDATE==========================================
$(document).on("click", ".btnFundUpdate", function(event)
{
	 $("#hidfundIDSave").val($(this).closest("tr").find('#hidfundIDUpdate').val());
	 $("#reasearcherID").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#reasearchTopic").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#fundersID").val($(this).closest("tr").find('td:eq(2)').text());
	 $("#amount").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#cardNumber").val($(this).closest("tr").find('td:eq(4)').text());
	 $("#date").val($(this).closest("tr").find('td:eq(5)').text());
	 $("#cvv").val($(this).closest("tr").find('td:eq(6)').text());
}); 

function validateFundForm()
{
	
	if ($("#reasearcherID").val().trim() == "")
	 {
	 	return "Insert researcher ID.";
	 }
	
	if ($("#reasearchTopic").val().trim() == "")
	 {
	 	return "Insert Research topic.";
	 }
	
	if ($("#fundersID").val().trim() == "")
	 {
	 	return "Insert Funders ID.";
	 }
	// is numerical value
	var tmpPrice = $("#amount").val().trim();
	if (!$.isNumeric(tmpPrice))
	 {
	 	return "Insert valid value for Fund amount.";
	 }
	// convert to decimal price
	 $("#amount").val(parseFloat(tmpPrice).toFixed(2));
	
	//---------------------------------------------------------------
	// is numerical value
	var tmpCaerdNo = $("#cardNumber").val().trim();
	if (!$.isNumeric(tmpCaerdNo))
	 {
	 	return "Insert valid value for Card number.";
	 }
	//--------------------------------------------------------
	
	if ($("#date").val().trim() == "")
	 {
	 	return "Insert date.";
	 }
	 //-----------------------------------------------------
	 var tmpCVV = $("#cvv").val().trim();
	if (!$.isNumeric(tmpCVV))
	 {
	 	return "Insert valid CVV.";
	 }
	return true;
}
$(document).on("click", ".btnFundRemove", function(event)
{ 
		 $.ajax( 
		 { 
		 url : "FundAPI", 
		 type : "DELETE", 
		 data : "fundID=" + $(this).data("fundid"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		 onFundDeleteComplete(response.responseText, status); 
		 } 
		 }); 
})

function onFundDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
	 var resultSet = JSON.parse(response); 
	 if (resultSet.status.trim() == "success") 
	 { 
	 $("#alertSuccess").text("Successfully deleted."); 
	 $("#alertSuccess").show(); 
	 $("#divItemsGrid").html(resultSet.data); 
	 } else if (resultSet.status.trim() == "error") 
	 { 
	 $("#alertError").text(resultSet.data); 
	 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
	 $("#alertError").text("Error while deleting."); 
	 $("#alertError").show(); 
 } else
 { 
	 $("#alertError").text("Unknown error while deleting.."); 
	 $("#alertError").show(); 
 } 
}

