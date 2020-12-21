// Assignment Code (Starter Code - Thanks!)
var generateBtn = document.querySelector("#generate");

//Arrays made to set out available characters
var themNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var themSpecchar = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+", "="];
var themLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var themUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Variables have to be added for confirmations
var PasswordLength;
var UppercaseConfirm;
var LowercaseConfirm;
var SpecialcharConfirm;
var NumberConfirm;


//Javascript(JS) prompts about password length.
function BuildPassword(){
  PasswordLength = prompt ("Tell me how long you want your password to be (Sidenote: It has to be between 8 to 128 characters long.)");

//Conditions that verify that the length of inputted password is between 8 to 128 characters. If it is not, JS will send an alert to the user & put them back on the prompt screen.
if (PasswordLength < 8 || PasswordLength > 128) {
  alert ("Password has to be 8 to 128 characters!");
  BuildPassword();
}



}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
