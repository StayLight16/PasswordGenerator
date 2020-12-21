// Assignment Code (Starter Code - Thanks!)
var generateBtn = document.querySelector("#generate");

//Arrays made to set out available characters//
var ThemNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var ThemSpecchar = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+", "="];
var ThemLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ThemUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Variables have to be added for confirmations//
var PasswordLength;
var UppercaseConfirm;
var LowercaseConfirm;
var SpecialcharConfirm;
var NumberConfirm;


//Javascript(JS) prompts about password length.//

function BuildPassword(){
  PasswordLength = prompt ("Tell me how long you want your password to be (Sidenote: It has to be between 8 to 128 characters long)!");

//Condition that verifies that the length of password is between 8 to 128 characters. If not, JS will send an alert to the user & redirect them back to the prompt screen.

if (PasswordLength < 8 || PasswordLength > 128) {
  alert ("Password has to be 8 to 128 characters!");
  BuildPassword();
}

return PasswordLength;
}

//Questions if user wants uppercase letters in password//
function RequestUppercase() {
  UppercaseConfirm = confirm("You want uppercase letters in your password?");
  return UppercaseConfirm;
}

//Questions if user wants uppercase letters in password//
function RequestLowercase() {
  LowercaseConfirm = confirm("You want lowercase letters in your password?");
  return LowercaseConfirm;
}

//Questions if user wants special characters in password//
function RequestSpecialchar() {
  SpecialcharConfirm = confirm("You want special characters in your password?");
  return SpecialcharConfirm;
}

// If proved to be true, arrays are subsequently mixed.//

function CreatePassword() {

  var RunCharacters = []
  
  if (UppercaseConfirm) {
    RunCharacters = RunCharacters.concat(ThemUpperCase)
  }
  
  if (LowercaseConfirm) {
    RunCharacters = RunCharacters.concat(ThemLowercase)
  }
  
  if (NumberConfirm) {
    RunCharacters = RunCharacters.concat(ThemNumbers)
  }
  
  if (SpecialcharConfirm) {
    RunCharacters = RunCharacters.concat(ThemSpecchar)
  }
  
  console.log(RunCharacters);


//Questions if user wants numbers in password//
function RequestNumbers() {
  NumberConfirm = confirm("Do you want numbers in your password?");
  return NumberConfirm;
}

// Add event listener to generate button //
generateBtn.addEventListener("click", writePassword);
