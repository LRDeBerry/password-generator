// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Characters defined and allowed in password generation
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%&*()"
var numbers = "0123456789"

function generatePassword() {
  var password = "";
  var chars = "";
  var passwordLength = prompt("How Many Characters? Must be 8-128")
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Password length must be between 8-128 and must be numeric")
    return ""
  }
  var hasSpecial = confirm("Click okay to include special characters")
  var hasNumbers = confirm("Click okay to include numbers")
  var hasLower = confirm("Click okay to include lower case characters")
  var hasUpper = confirm("Click okay to include upper case characters")
  if (!hasSpecial && !hasNumbers && !hasLower && !hasUpper) {
    alert("Must pick at least one type of character")
    return ""
  }
  if (hasSpecial) {
    chars += special
  }
  if (hasNumbers) {
    chars += numbers
  }
  if (hasLower) {
    chars += lower
  }
  if (hasUpper) {
    chars += upper
  }
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  
  }
  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log();