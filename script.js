// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var charactercount = prompt("How many characters for password?");
  if (charactercount < 8 || charactercount > 128) {
    alert("You messed up!")
    return "error"
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
