



//var name_project;
var no_of_ques1=2;
var x=0;
var y=0;
var z=0;
var k=0;
function getdata1()
{
	
	no_of_ques1 = document.forms["myform1"]["ucount"].value ;
	//document.write(no_of_ques1);
	var hq1 = document.forms["myform2"]["uques"].value ;
	var ha1 = document.forms["myform2"]["uans1"].value ;
	var ha2 = document.forms["myform2"]["uans2"].value ;
	var ha3 = document.forms["myform2"]["uans3"].value ;
	var ha4 = document.forms["myform2"]["uans4"].value ;
	var he1 = document.forms["myform2"]["uexp"].value ;
	second_fun(hq1,ha1,ha2,ha3,ha4,he1);
}
function getdata2()
{
	
	var hq1 = document.forms["myform3"]["uques"].value ;
	var ha1 = document.forms["myform3"]["uans1"].value ;
	var ha2 = document.forms["myform3"]["uans2"].value ;
	var ha3 = document.forms["myform3"]["uans3"].value ;
	var ha4 = document.forms["myform3"]["uans4"].value ;
	var he1 = document.forms["myform3"]["uexp"].value ;
	second_fun(hq1,ha1,ha2,ha3,ha4,he1);
}

function getdata3()
{
	
	var hq1 = document.forms["myform4"]["uques"].value ;
	var ha1 = document.forms["myform4"]["uans1"].value ;
	var ha2 = document.forms["myform4"]["uans2"].value ;
	var ha3 = document.forms["myform4"]["uans3"].value ;
	var ha4 = document.forms["myform4"]["uans4"].value ;
	var he1 = document.forms["myform4"]["uexp"].value ;
	second_fun(hq1,ha1,ha2,ha3,ha4,he1);
}

function getdata4()
{
	
	var hq1 = document.forms["myform5"]["uques"].value ;
	var ha1 = document.forms["myform5"]["uans1"].value ;
	var ha2 = document.forms["myform5"]["uans2"].value ;
	var ha3 = document.forms["myform5"]["uans3"].value ;
	var ha4 = document.forms["myform5"]["uans4"].value ;
	var he1 = document.forms["myform5"]["uexp"].value ;
	second_fun(hq1,ha1,ha2,ha3,ha4,he1);
}	

function getdata5()
{
	
	var hq1 = document.forms["myform6"]["uques"].value ;
	var ha1 = document.forms["myform6"]["uans1"].value ;
	var ha2 = document.forms["myform6"]["uans2"].value ;
	var ha3 = document.forms["myform6"]["uans3"].value ;
	var ha4 = document.forms["myform6"]["uans4"].value ;
	var he1 = document.forms["myform6"]["uexp"].value ;
	second_fun(hq1,ha1,ha2,ha3,ha4,he1);
}

function putdata(hq1,ha1,ha2,ha3,ha4,he1){
	var val = x+1;
document.getElementsByClassName("head_ques")[x].innerHTML=" Ques "+val+"   " + hq1;
document.getElementsByClassName("ans1")[x].innerHTML=ha1;
document.getElementsByClassName("q1")[y++].innerHTML=ha2;
document.getElementsByClassName("q1")[y++].innerHTML=ha3;
document.getElementsByClassName("q1")[y++].innerHTML=ha4;
document.getElementsByClassName("qans1")[x++].innerHTML=he1;
}



function second_fun(hq1,ha1,ha2,ha3,ha4,he1)
{
	document.getElementsByClassName("main")[z++].style.display="none";
	putdata(hq1,ha1,ha2,ha3,ha4,he1);
	//document.write(
	if(z<no_of_ques1)
	{
		document.getElementsByClassName("main")[z].style.display="block";
		
	}
	if(z==no_of_ques1)
	{
		document.getElementsByClassName("nav1")[0].style.display="block";
		document.getElementsByClassName("next1")[0].style.display="block";
		document.getElementById("header2").style.display="block";
	}	
}	
//
