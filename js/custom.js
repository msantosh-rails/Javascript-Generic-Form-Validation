		
function formValidate(myForm) {
	var myForm = myForm;
	var parent = document.myForm.elements;
	var total_Elements = parent.length;
	var radioArr=0;
	var selectArr=0;
	var check_Count=0;
	var radio_Count=0;

	for(j=0;j<total_Elements;j++) { 
		if(parent[j].type=="radio")
		radioArr++;
	}
	for(j=0;j<total_Elements;j++) { 
	      if(parent[j].type=="checkbox")
	     	selectArr++;
	}

	
	function checkTheBox(chx) {
		var flag=0;
		for(var i=0;i<selectArr;i++) {
		if(document.myForm[chx.name][i].checked) {
		flag++;
		}
		}
		if(flag==0) {
		if(check_Count==0) {
		//alert(check_Count);
		alert ("You must select any one checkbox!");
		//chx.focus();
		check_Count++;
		return false;
		}
		}
		return true;
	}

		
	function checkTheRadio(gen) {
		var flag=0;
		for (var i=0;i<radioArr;i++) {
			if(document.myForm[gen.name][i].checked) {
				flag++;
			}
		}
		if (flag==0) {
		if(radio_Count==0) {
			alert("You must select any one Radio Button!");
			//gen.focus();
			radio_Count++;
			return false;

		}
		}
		return true;
	}


	
	var i=0;
	while(i<total_Elements) {
		switch(parent[i].type) {
			   case "text": {
				isTextBoxNotNull(parent[i]);
				break;
			   }			    
			    case "password": {
				
				if(parent[i].id=="cpwd") {
					isPasswordMatched(parent[i]);
				}
				else {
					isPasswordNotNull(parent[i]);
				}
				
				break;
			    }
			    case "select-one": {
				isItemSelected(parent[i]);
			        break;
			    }
			   case "checkbox": {
				checkTheBox(parent[i]);
			        break;
			    }
			   case "radio": {
				checkTheRadio(parent[i]);
				break;
			    }
			   case "email": {
				//alert("dss");
				isValidEmail(parent[i]);
			   }
			}	
		i++;
	}
return false;
}


function isTextBoxNotNull(textBox) {

	if(textBox.value==null || textBox.value=="") {
	//alert(count);
		
		
		alert("TextField should not be empty");
		//textBox.focus();
		return false;
	}
	else if(textBox.value.length>10 || textBox.value.length<5) {
		alert("Length Should between 5 to 10 characters");
		
		//textBox.focus();
		return false;
	}
	else {
		
		return true;
	}
}



var pwdvalue="";
function isPasswordNotNull(pwd) {
pwdvalue = pwd.value;
	//alert(pwdvalue);
		/*if(count<=0) {
		if(textBox.type=="password") {
		   count++;
		   pwd1=textBox.value;
		}
	      }
	alert(pwd1);*/
	if(pwd.value==null || pwd.value=="") {
	//alert(count);
		
		
		alert("Password should not be empty");
		//pwd.focus();
		return false;
	}
	else if(pwd.value.length>10 || pwd.value.length<5) {
		alert("Length Should between 5 to 10 characters");
		//pwd.focus();
		return false;
	}
	else {
		
		return true;
	}
}



			
function isPasswordMatched(cpwd) {
   	//alert(pwdvalue);
	if(cpwd.value==null || cpwd.value=="") {
	//alert(count);
		alert("Confirm Password should not be empty");
		//cpwd.focus();
		return false;
	}
	else if(cpwd.value!=pwdvalue) {
		alert("Password doesnot match");
		//cpwd.focus();
		return false;
	}
	else {
		//alert("password matched");
		    return true;
	}
}

function isItemSelected(sel) {
	if(sel.selectedIndex==0) {
		alert("please select Item");
		//sel.focus();
		return false;
	}
	else {
		return true;
	}
}

var email_regexp= /^([a-z A-Z)]{1})([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
function isValidEmail(email) {
	em=email.value;
	//alert(em);
	if(em.match(email_regexp)) {
		//alert("success");
		return true;
	}
	else {
		alert("please enter valid email id");
		//email.focus();
		return false;
	}
	
}


function reloading() {
	window.location.reload();
	return false;
}

