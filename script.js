function idCard(){
  var firstName= document.getElementById("firstName").value;
  var lastName= document.getElementById("lastName").value;
  var address= document.getElementById("address").value;
  var age= document.getElementById("Age").value;
  var phoneNumber= document.getElementById("phoneNumber").value;
  
  numberArray = [];
  numberArray.push(age);
  numberArray.push(phoneNumber);
  var i;
  for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

  document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
  document.getElementById("postAddress").innerHTML = address;
  document.getElementById("postAge").innerHTML = age;
  document.getElementById("postPhoneNumber").innerHTML = phoneNumber;
  }
