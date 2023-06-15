// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
// var upperChar = lowChar.map(function (x) { return x.toUpperCase(); })
// console.log(upperChar);
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

function generatePassword() {

  var finalPassword = "";

  var passwordLength = prompt("Please enter length of your password between 8-128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select the range between 8-128");
    var passwordLength = prompt("Please mention length of your password between 8-128");
  }

  // if(!passwordLength){

  // }

  var confirmNumber = confirm("Do you like to add numbers in your password?");
  var confirmLowChar = confirm("Do you like to add lower case characters in your password?");
  var confirmUpperChar = confirm("Do you like to add Upper case characters in your password?");
  var confirmSpecialChar = confirm("Do you like to add special characters in your password?");

for (let i = 0; i < passwordLength; i++) {
  if(confirmNumber === true && finalPassword.length < passwordLength){
    var index = Math.floor(Math.random() * numbers.length);
    finalPassword = finalPassword + numbers[index]
  }

  if(confirmLowChar === true && finalPassword.length < passwordLength){
    var index = Math.floor(Math.random() * lowChar.length);
    finalPassword = finalPassword + lowChar[index];
  }

  if(confirmUpperChar === true && finalPassword.length < passwordLength){
    var index = Math.floor(Math.random() * upperChar.length);
    finalPassword = finalPassword + upperChar[index];
  }

  if(confirmSpecialChar === true && finalPassword.length < passwordLength){
    var index = Math.floor(Math.random() * specialChar.length);
    finalPassword = finalPassword + specialChar[index];
  }
}

return finalPassword;
}

// generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function deletePassword(){
  var passwordText = document.querySelector("#password");
  passwordText.value = '';
}

function copyPassword(){
  var passwordText = document.getElementById("password");
  passwordText.select();
  passwordText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordText.value);
 
  // alert("copied!")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", deletePassword);

var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyPassword);

