function idCard(){
  var firstName= document.getElementById("firstName").value;
  var lastName= document.getElementById("lastName").value;
  
  var phoneNumber= document.getElementById("phoneNumber").value;
  var address= document.getElementById("address").value;
  
  
  document.getElementById("postFullName").innerHTML = firstName;
  document.getElementById("postFullName").innerHTML = lastName;
  document.getElementById("postAddress").innerHTML = address;
}
