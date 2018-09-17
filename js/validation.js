function popup_validate()
{
	var name=document.getElementById("fname").value;
	var mobile=document.getElementById("mobile").value;
	var email=document.getElementById("email").value;
	var fcity=document.getElementById("fcity").value;
	var tcity=document.getElementById("tcity").value;
	
	name=name.trim();
	mobile=mobile.trim();
	email=email.trim();
	fcity=fcity.trim();
	tcity=tcity.trim();
	
	var status=true;
	if(name=="")
	{
		document.getElementById("fname").style.borderColor="red";
		status=false;
	}
	else{
		document.getElementById("fname").style.borderColor="green";
		
	}
	
	if(mobile=="")
	{
		document.getElementById("mobile").style.borderColor="red";
		status=false;
	}
	else{
		document.getElementById("mobile").style.borderColor="green";
		
	}
	
	if(email=="")
	{
		document.getElementById("email").style.borderColor="red";
		status=false;
	}
	else{
		document.getElementById("email").style.borderColor="green";
		
	}
	
	if(fcity=="")
	{
		document.getElementById("fcity").style.borderColor="red";
		status=false;
	}
	else{
		document.getElementById("fcity").style.borderColor="green";
		
	}
	
	if(tcity=="")
	{
		document.getElementById("tcity").style.borderColor="red";
		status=false;
	}
	else{
		document.getElementById("tcity").style.borderColor="green";
		
	}
	
	return status;
	
}