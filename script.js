// Assignment Code
var generateBtn = document.querySelector("#generate");


var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","X"];
var specialChar = ["~","!","@","#","$","%","^","&","*","(",")","{","}","[","]","_",".",",","+","-","=","?","<",">"];

// var numbers = "0123456789";
// var lowChar ="abcdefghijklmnopqrstuvwxyz";
// var upperChar= "ABCDEFGHIJKLMNOPQRSTUVWZYX";
// var specialChar = "~!@#$%^&*(){}[]_.,+-=?<>";


function generatePassword(){
  var finalPassword="";

  var passwordLength = prompt("How many characters would you like your password to contain between 8 to 128?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Select the range between 8-128");
    var passwordLength = prompt("How many characters would you like your password to contain between 8 to 128?");
  }

  var confirmLowerCase = confirm("Do you wish to add lower case letters?");
  var confirmUpperCase = confirm("Do you wish to add the Upper case letters?");
  var confirmkNum = confirm("Do you wish to add numbers?");
  var confirmSpecialChar = confirm("Do you wish to add special characters here?");


  for (let i = 0; i < passwordLength; i++) {
    if (confirmLowerCase === true && finalPassword.length < passwordLength){
      var position = Math.floor(Math.random() * lowChar.length);
      finalPassword = finalPassword + lowChar[position];
    }
    if (confirmUpperCase === true && finalPassword.length < passwordLength){
      var position = Math.floor(Math.random() * upperChar.length);
      finalPassword = finalPassword + upperChar[position];
    }
    if (confirmkNum === true && finalPassword.length < passwordLength){
      var position = Math.floor(Math.random() * numbers.length);
      finalPassword = finalPassword + numbers[position];
    }
    if (confirmSpecialChar === true && finalPassword.length < passwordLength){
      var position = Math.floor(Math.random() * specialChar.length);
      finalPassword = finalPassword + specialChar[position];
    }

  }
    return finalPassword;
}

// Write password to the #password input

generatePassword ();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
