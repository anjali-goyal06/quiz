// script 3;



var no_of_ques2;
var x2=0;
var y2=0;
var m=0;
var total_marks=0;
var cf=0;
function fun1(marks)
{
	no_of_ques2 = document.forms["myform1"]["ucount"].value ;
  document.getElementById("check_ans").style.display="block";
  document.getElementsByClassName("ans1")[y2].style.backgroundColor="#ff6666";
  //document.write(4);
  document.getElementsByClassName("q1")[x2].style.backgroundColor="rgba(188,215,242,0.7)";     //#FFA07A";    //e30a42
  document.getElementsByClassName("q1")[x2+1].style.backgroundColor="rgba(188,215,242,0.7)";
  document.getElementsByClassName("q1")[x2+2].style.backgroundColor="rgba(188,215,242,0.7)";
  //document.getElementsByClassName("ans1")[y].style.backgroundColor="#FF6666";
  document.getElementsByTagName("li")[m].style.color="#003655";
  document.getElementsByTagName("li")[m+1].style.color="#003655";
  document.getElementsByTagName("li")[m+2].style.color="#003655";
  document.getElementsByTagName("li")[m+3].style.color="#003655";
  document.getElementsByTagName("li")[m].style.border="none";
  document.getElementsByTagName("li")[m+1].style.border="none";
  document.getElementsByTagName("li")[m+2].style.border="none";
  document.getElementsByTagName("li")[m+3].style.border="none";
  document.getElementsByClassName("qans1")[y2].style.display="block";
 

 if(cf==0)
 {
     total_marks=total_marks + marks;
	 cf++;
 	 
  
  if(marks==1)
  {
      document.getElementById("check_ans").innerHTML="RIGHT ANSWER ";
	   //document.write(1);
  }
  else
  {
      document.getElementById("check_ans").innerHTML="WRONG ANSWER ";
	  // document.write(0);
  }      
 } 

} 

var c2=0;
function fun2()
{ 
   document.getElementById("check_ans").style.display="none";
// document.getElementsByTagName("p")[y2].innerHTML="<br>in 2nd m = "+marks+"<br>total marks = "+total_marks;
 if(c2==no_of_ques2-1)
 {
    //document.write(7);
	document.getElementsByClassName("nav1")[c2].style.display="none";
	document.getElementsByClassName("next1")[c2].style.display="none";
    document.getElementById("finish").style.display="block";
	
 }
 else
 { //document.write(3);
    document.getElementsByClassName("nav1")[c2].style.display="none";
	document.getElementsByClassName("nav1")[c2+1].style.display="block";
//	document.write(7);
	if(c2==no_of_ques2-2)
	{
		document.getElementsByClassName("next1")[c2+1].innerHTML="Result";
	}
	document.getElementsByClassName("next1")[c2].style.display="none";

	document.getElementsByClassName("next1")[c2+1].style.display="block";
	c2++;
 }	
 x2=x2+3;
  y2++;
  m=m+5;
  cf=0;
  document.getElementById("finish").innerHTML="YOU SCORED <br> "+total_marks+" out of "+no_of_ques2;
}


function exit()
{
  document.getElementById("finish").innerHTML="YOU SCORED <br> "+total_marks+" out of "+no_of_ques2;
}