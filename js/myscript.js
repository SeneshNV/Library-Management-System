/* all pages dark mode enable function*/
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

/* home page headling button */
function readmore(){
    alert("Please click on OK to continue.")
}

/*body on load - get name*/
  function checkCookie() {
    
    let person = prompt("Please enter your name");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "!";
  }
  }

  /*catogary page*/
 {
    let d = new Date();
    document.getElementById("date1").innerHTML = d.toDateString();
  }

  /*pdf view page feedback*/
  function goodbad(){
    alert("Thank your feedback...");
  }

  /*author page comment display*/
  function comment1(){
    var x1=document.getElementById("comments1").value;
    document.getElementById("comment1").innerHTML=x1;
  }
  function comment2(){
    var x2=document.getElementById("comments2").value;
    document.getElementById("comment2").innerHTML=x2;
  }
  function comment3(){
    var x3=document.getElementById("comments3").value;
    document.getElementById("comment3").innerHTML=x3;
  }
  function comment4(){
    var x4=document.getElementById("comments4").value;
    document.getElementById("comment4").innerHTML=x4;
  }

  /*about page - message */
  function message(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let msg = document.getElementById("amessage").value;
    
    document.getElementById("reply").innerHTML=
    "Hello "+ "<b>" + "<u>" +fname +" " +lname + "</u>" + "</b>" + "<br>" +"<br>" +


    "Thank you for your above massage." +"<br>" +"<br>"+ "<b>"
    + "<u>" + msg  + "</u>"+ "</b>" +"<br>"+"<br>" +

    "We’re so sorry that the service request was not completed"+ 
    "to your satisfaction. We take great pride in our work," +
    "and our hope is always that it helps each one of our "+
    "customers accomplish their goals. Clearly this was not"+
    "your experience, and we apologize."+"<br>" +

    "To make this matter right, we would be happy to "+
    "send another agent to your location within the next "+
    "24 hours to complete the work at no extra charge."+"<br>" +

    "For any questions or concerns, please feel free to contact"+
     "us at any time during our operating hours: 9AM-5PM, "+
     "Monday-Friday."+"<br>" +

    "Kind regards,"+"<br>"+"<br>" +"Senesh Dilshan"
  }/* close reply message*/

  /*login page*/
  function signin() {
  
  let fname1 = document.getElementById("fname").value
  let lname2 = document.getElementById("lname").value
  

  if(document.getElementById("male").checked) { 
    document.getElementById("donemsg").innerHTML 
        = "WELCOME TO OUR E-LIBRARY"+"<br>"+
        "<b>" +"Mr. "+ fname1 +" "+lname2+ "</b>";
  }
  else { 
      document.getElementById("donemsg").innerHTML 
          = "WELCOME TO OUR E-LIBRARY"+"<br>"+
          "<b>" +"Miss. "+ fname1 +" "+lname2+ "</b>";
  }

  let pass1 = document.getElementById("password").value
  let pass2 = document.getElementById("cpassword").value
  if (pass1 != pass2) {
    alert("Password not match");
  }
}
/*login page*/