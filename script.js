// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  generatePassword = function() {

    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var char = prompt("How many characters would you like your password to contain?");

    if (char < 8) {
      alert("Password must be at least 8 characters.");
    } else if (char > 129) {
      alert("Password must be under 129 characters.");
    }

    // var spec = confirm("Would you like to include lowercase characters?");

    var pass = "";
    numPass = function() {
      for (var i = 0; i<=char; i++){
        pass = pass.padEnd(i, Math.floor(Math.random()*10));
      }
      // var num = Math.floor(Math.random()*10);
      return(pass);
    }

    numPass();
    // var num = Math.floor(Math.random()*10);
    // var pass = "";
    // for (i=0; i<26; i++) {
    //   var newPass = pass.padEnd(char, alpha[i]);
    //   console.log(newPass);
    // }

    // for (pass = ""; pass.length<char; pass.padEnd(char, alpha[Math.random()*26])) {

    //   console.log(pass);
    // }
    return(pass);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);