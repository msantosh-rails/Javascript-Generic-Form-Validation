var c=0;
var arr=[];
var pattren=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
function validateForm(myform)
{
	for(var i=0;i<myform.length;i++)
	{
		var totch=0;
		var element=myform[i];
		var type=myform[i].type;
		
		for(var j=0;j<myform.length;j++)
		{
			if(myform[j].type=="checkbox")
				totch++;
		}
		//alert(type);
		if(type=="text")
		{
			validateText(element);
		}
		else if(type=="password")                               
		{
			validatePassword(element);
		}
		else if(type=="radio")
		{
			validateRadio(element);
		}
		
		else if(type=="checkbox")
		{
			validateCheckbox(element,totch);
			//alert("CHK");
		}
		else if(type="select-one")
		{
			validateSelect(element);
		}
	}
return false;
}


//Text Field Validation
function validateText(ele)
{
	var len=ele.value.length;
	var attr=ele.getAttribute("email");
	if(attr==null)
	{
		if(len<2 || len>6)
		{
			alert(ele.name+" must be of length 2 to 6 ");
			ele.focus();
			
		}
	}
	else
	{
		var email= ele.value;
		if(email.match(pattren))
		{
		}
		else
		alert("Invalid EmailID");
		ele.focus();
	}
	//return true;
}//validateText(ele)


//Password Validation	
function validatePassword(ele)
{
if(c>1)
c=0;	
arr[c]=ele;
if(c==1)
{
	var pwd1=arr[0].value;
	var pwd2=arr[1].value;
	if(pwd1!=pwd2 || pwd1=="" || pwd=="")
	{
		alert("Password Not Matched");
		arr[0].value="";
		arr[1].value="";
		return false;
	}

}
c++;
}//validatePassword(ele)


//Radio Button Validation
function validateRadio(ele)
{
    var radios = document.getElementsByName(ele.name);
    var formValid = false;
    var inc = 0;
    while (!formValid && inc < radios.length) {
        if (radios[inc].checked)
		 formValid = true;
	         inc++;        
    }
	    if (!formValid) 
	    {
		alert("Select "+ele.name);
            }
}//validateRadio(ele)


//Select Box Validation
function validateSelect(ele)
{
		var index=ele.selectedIndex;
		if(index==0)
		{
			alert("Select "+ele.name);
		}
ele.focus();
}//validateSelect(ele)


//Validate Checkbox
var ch=0;
var charr=[];
var count=0;
function validateCheckbox(ele,totch)
{
totch=totch-1;
if(ch>totch)
ch=0;
charr[ch]=ele;
	if(ch==totch)
	{
		for(var k=0;k<=totch;k++)
		{
			if (charr[k].checked)
	       		 {
				count++;
			 }
		}
		if(count==0)
		{			
			alert("Select a checkbox");
			
		}
	}
ch++;
}//validateCheckbox(ele)
