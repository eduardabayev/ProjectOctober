function idCard(){
  var firstName= document.getElementById("firstName").value;
  var lastName= document.getElementById("lastName").value;
  var address= document.getElementById("address").value;
  var age= document.getElementById("Age").value;
  var phoneNumber= document.getElementById("phoneNumber").value;
  
  numberArray = [];
  numberArray.push(age);
  numberArray.push(phoneNumber);
  for (var i = 0; i < numberArray.length; i++);{
    if (numberArray[i] <= 100){
      document.getElementById("postAge").innerHTML = ("Age:" + " " + age);
    }
    else if (numberArray[i] > 100){
      document.getElementById("postPhoneNumber").innerHTML = ("Phone Number" + " " + phoneNumber);

  document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
  document.getElementById("postAddress").innerHTML = address;
  document.getElementById("postAge").innerHTML = age;
  document.getElementById("postPhoneNumber").innerHTML = phoneNumber;
  }
