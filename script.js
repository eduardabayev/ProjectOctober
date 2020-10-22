function idCard(){
  var firstName= document.getElementById("firstName").value;
  var lastName= document.getElementById("lastName").value;
  
  var phoneNumber= document.getElementById("phoneNumber").value;
  var address= document.getElementById("address").value;
  
  
  document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
  document.getElementById("postAddress").innerHTML = address;
  document.getElementById("postAge").innerHTML = age;
  document.getElementById("phoneNumber").innerHTML = phoneNumber;
}
