// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  generatePassword = function() {

    var pass = "";

    var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var upAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

    numPass = function() {
      for (var i = 0; i<=char; i++){
        pass = pass.padEnd(i, Math.floor(Math.random()*10));
      }
      return(pass);
    }

    lowerCharPass = function() {
      for (var i = 0; i<=char; i++) {
        pass = pass.padEnd(i, alpha[Math.floor(Math.random()*26)]);
      }
      return(pass);
    }

    upperCharPass = function() {
      for (var i = 0; i<=char; i++) {
        pass = pass.padEnd(i, upAlpha[Math.floor(Math.random()*26)]);
      }
      return(pass);
    }

    specialPass = function() {
      for (var i = 0; i<=char; i++) {
        pass = pass.padEnd(i, special[Math.floor(Math.random()*29)]);
      }
      return(pass);
    }

    numLowPass = function() {
      var numLower = numList.concat(alpha);
      for (var i = 0; i<=char; i++){
        pass = pass.padEnd(i, numLower[Math.floor(Math.random()*36)]);
      }
      return(pass);
    }

    numUpPass = function() {
      var numUpper = numList.concat(upAlpha);
      for (var i = 0; i<=char; i++){
        pass = pass.padEnd(i, numUpper[Math.floor(Math.random()*36)]);
      }
      return(pass);
    }

    numSpecPass = function() {
      var numSpec = numList.concat(special);
      for (var i = 0; i<=char; i++){
        pass = pass.padEnd(i, numSpec[Math.floor(Math.random()*39)]);
      }
      return(pass);
    }

    lowUpPass = function() {
      var lowUp = alpha.concat(upAlpha);
      for (var i = 0; i<=char; i++){
        pass = pass.padEnd(i, lowUp[Math.floor(Math.random()*52)]);
      }
      return(pass);
    }

    lowSpecPass = function() {
      var lowSpec = alpha.concat(special);
      for (var i = 0; i<=char; i++){
        pass = pass.padEnd(i, lowSpec[Math.floor(Math.random()*55)]);
      }
      return(pass);
    }

    upSpecPass = function() {
      var upSpec = upAlpha.concat(special);
      for (var i = 0; i<=char; i++){
        pass = pass.padEnd(i, upSpec[Math.floor(Math.random()*55)]);
      }
      return(pass);
    }

    numLowUpPass = function() {
      var numLowUp = numList.concat(alpha, upAlpha);
      for (var i = 0; i<=char; i++){
        pass = pass.padEnd(i, numLowUp[Math.floor(Math.random()*62)]);
      }
      return(pass);
    }

    var char = prompt("How many characters would you like your password to contain?");

    if (char < 8) {
      alert("Password must be at least 8 characters.");
    } else if (char > 129) {
      alert("Password must be under 129 characters.");
    }

    // var spec = confirm("Would you like to include lowercase characters?");

    numLowUpPass();
    
    return(pass);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);