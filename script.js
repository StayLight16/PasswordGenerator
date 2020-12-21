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


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
