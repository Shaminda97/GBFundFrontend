<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@page import="model.Fund"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Fund management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/fund.js"></script>
</head>
<body>

<div class="container"><div class="row"><div class="col-6">
	<h1>Fund Management</h1>
	<form id="formFund" name="formFund">
		 ReasearcherID:
		 <input id="reasearcherID" name="reasearcherID" type="text"
		 class="form-control form-control-sm">
		 <br> Reasearch Topic:
		 <input id="reasearchTopic" name="reasearchTopic" type="text"
		 class="form-control form-control-sm">
		 <br> fundersID:
		 <input id="fundersID" name="fundersID" type="text"
		 class="form-control form-control-sm">
		 <br> amount:
		 <input id="amount" name="amount" type="text"
		 class="form-control form-control-sm">
		 <br>Card Number:
		 <input id="cardNumber" name="cardNumber" type="text"
		 class="form-control form-control-sm">
		 <br>Expire date:
		 <input id="date" name="date" type="text"
		 class="form-control form-control-sm">
		 <br>cvv:
		 <input id="cvv" name="cvv" type="text"
		 class="form-control form-control-sm">
		 <br>
		 <input id="btnFundSave" name="btnFundSave" type="button" value="Save"class="btn btn-primary">
		 <input type="hidden" id="hidfundIDSave"name="hidfundIDSave" value="">
	</form>
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>
	<br>
	<div id="divItemsGrid">
		 <%
		 Fund fundObj = new Fund();
		 out.print(fundObj.readFunds());
		 %>
	</div>
	</div> 
	</div>
</div> 

</body>
</html>