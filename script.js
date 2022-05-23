// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  generatePassword = function () {

    // set up universal variables to be called on in function. pass will become the final function return. numList, alpha, upAlpha, and special are all arrays that will be combined depending on user input.
    var pass = "";

    var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var upAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

    // creates a randomized password of only numbers that meets the char length
    numPass = function () {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, Math.floor(Math.random() * 10));
      }
      return (pass);
    }

    // creates a randomized password of only lowercase letters that meets the char length
    lowerPass = function () {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, alpha[Math.floor(Math.random() * 26)]);
      }
      return (pass);
    }

    // creates a randomized password of only uppercase letters that meets the char length
    upperPass = function () {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, upAlpha[Math.floor(Math.random() * 26)]);
      }
      return (pass);
    }

    // // creates a randomized password of only special characters that meets the char length
    specPass = function () {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, special[Math.floor(Math.random() * 29)]);
      }
      return (pass);
    }

    // concatenates numbers and lowercase letters and creates randomized password from the new array
    numLowPass = function () {
      var numLower = numList.concat(alpha);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numLower[Math.floor(Math.random() * 36)]);
      }
      return (pass);
    }

    // concatenates numbers and uppercase letters and creates randomized password from the new array
    numUpPass = function () {
      var numUpper = numList.concat(upAlpha);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numUpper[Math.floor(Math.random() * 36)]);
      }
      return (pass);
    }

    // concatenates numbers and special characters and creates randomized password from the new array
    numSpecPass = function () {
      var numSpec = numList.concat(special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numSpec[Math.floor(Math.random() * 39)]);
      }
      return (pass);
    }

    // concatenates lower and uppercase letters and creates randomized password from the new array
    lowUpPass = function () {
      var lowUp = alpha.concat(upAlpha);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, lowUp[Math.floor(Math.random() * 52)]);
      }
      return (pass);
    }

    // concatenates lower and special characters and creates randomized password from the new array
    lowSpecPass = function () {
      var lowSpec = alpha.concat(special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, lowSpec[Math.floor(Math.random() * 55)]);
      }
      return (pass);
    }

    // concatenates upper and special characters and creates randomized password from the new array
    upSpecPass = function () {
      var upSpec = upAlpha.concat(special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, upSpec[Math.floor(Math.random() * 55)]);
      }
      return (pass);
    }

    // concatenates numbers, lower, and uppercase letters and creates randomized password from the new array
    numLowUpPass = function () {
      var numLowUp = numList.concat(alpha, upAlpha);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numLowUp[Math.floor(Math.random() * 62)]);
      }
      return (pass);
    }

    // concatenates numbers, lowercase, and special characters and creates randomized password from the new array
    numLowSpecPass = function () {
      var numLowSpec = numList.concat(alpha, special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numLowSpec[Math.floor(Math.random() * 65)]);
      }
      return (pass);
    }

    // concatenates numbers, uppercase letters, and special characters and creates randomized password from the new array
    numUpSpecPass = function () {
      var numUpSpec = numList.concat(upAlpha, special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numUpSpec[Math.floor(Math.random() * 65)]);
      }
      return (pass);
    }

    // concatenates lower, uppercase letters, and special characters and creates randomized password from the new array
    lowUpSpecPass = function () {
      var lowUpSpec = alpha.concat(upAlpha, special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, lowUpSpec[Math.floor(Math.random() * 81)]);
      }
      return (pass);
    }

    // concatenates numbers, lower, uppercase, and special characters and creates randomized password from the new array
    numLowUpSpecPass = function () {
      var numLowUpSpec = numList.concat(alpha, upAlpha, special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numLowUpSpec[Math.floor(Math.random() * 91)]);
      }
      return (pass);
    }

    // Asks for password length
    charPrompt = function () {
      var char = prompt("How many characters would you like your password to contain?");

      // Checking if input is an integer between 7 and 129 (cannot be a character or floating point)
      if (char % parseInt(char) !== 0) {
        alert("Input must be an integer.");
        return;
      } else if (char < 8) {
        alert("Password must be at least 8 characters.");
        return;
      } else if (char > 129) {
        alert("Password must be under 129 characters.");
        return;
      }
      return (char);
    }

    // Asks to confirm including lowercase letters
    askLower = function () {
      var lower = confirm("Would you like to include lowercase characters?");
      return (lower);
    }

    // Asks to confirm including uppercase letters
    askUpper = function () {
      var upper = confirm("Would you like to include uppercase characters?");
      return (upper);
    }
    // Asks to confirm including numerals
    askNum = function () {
      var numeric = confirm("Would you like to include numeric characters?");
      return (numeric);
    }

    // Asks to confirm including special characters
    askSpec = function () {
      var spec = confirm("Would you like to include special characters?");
      return (spec);
    }

    // Checks if alpha array elements (lowercase letters) are included in pass
    checkAlpha = function () {
      var bool = "";
      for (var i = 0; i < char; i++) {
        if (alpha.includes(pass[i]) === true) {
          bool = true;
        }
      }
      if (bool === true) {
        return (bool);
      } else {
        return (false);
      }
    }

    // Checks if upAlpha array elements (uppercase letters) are included in pass
    checkUpAlpha = function () {
      var bool = "";
      for (var i = 0; i < char; i++) {
        if (upAlpha.includes(pass[i]) === true) {
          bool = true;
        }
      }
      if (bool === true) {
        return (bool);
      } else {
        return (false);
      }
    }

    // Checks if numList array elements (numerals) are included in pass
    checkNumList = function () {
      var bool = "";
      for (var i = 0; i < char; i++) {
        if (numList.includes(pass[i]) === true) {
          bool = true;
        }
      }
      if (bool === true) {
        return (bool);
      } else {
        return (false);
      }
    }

    // Checks if special array elements (special characters) are included in pass
    checkSpecial = function () {
      var bool = "";
      for (var i = 0; i < char; i++) {
        if (special.includes(pass[i]) === true) {
          bool = true;
        }
      }
      if (bool === true) {
        return (bool);
      } else {
        return (false);
      }
    }

    // depending on confirm inputs, compiles password and checks if password meets all criteria. If not, loops until the password meets the criteria.
    runChecks = function() {
      // starts with failure state
      if (lower == false && upper == false && numeric == false && spec == false) {
        alert("Password must contain at least one type of character.");
        return("Try again");
        // all lowercase password
      } else if (lower == true && upper == false && numeric == false && spec == false) {
        return (lowerPass());
        // all uppercase password
      } else if (lower == false && upper == true && numeric == false && spec == false) {
        return (upperPass());
        // all numeral password
      } else if (lower == false && upper == false && numeric == true && spec == false) {
        return (numPass());
        // all special characters password
      } else if (lower == false && upper == false && numeric == false && spec == true) {
        return (specPass());
        // lowercase and uppercase password
      } else if (lower == true && upper == true && numeric == false && spec == false) {
        do {
          pass = "";
          lowUpPass();
          var chAl = checkAlpha();
          var chUpAl = checkUpAlpha();
        } while (chAl === false || chUpAl === false);
        return(pass);
        // lowercase and numeral password
      } else if (lower == true && upper == false && numeric == true && spec == false) {
        do {
          pass = "";
          numLowPass();
          var chAl = checkAlpha();
          var chNum = checkNumList();
        } while (chAl === false || chNum === false);
        return(pass);
        // lowercase and special characters password
      } else if (lower == true && upper == false && numeric == false && spec == true) {
        do {
          pass = "";
          lowSpecPass();
          var chAl = checkAlpha();
          var chSp = checkSpecial();
        } while (chAl === false || chSp === false);
        return(pass);
        // uppercase and numeral password
      } else if (lower == false && upper == true && numeric == true && spec == false) {
        do {
          pass = "";
          numUpPass();
          var chUpAl = checkUpAlpha();
          var chNum = checkNumList();
        } while (chUpAl === false || chNum === false);
        return(pass);
        // uppercase and special characters password
      } else if (lower == false && upper == true && numeric == false && spec == true) {
        do {
          pass = "";
          upSpecPass();
          var chUpAl = checkUpAlpha();
          var chSp = checkSpecial();
        } while (chUpAl === false || chSp === false);
        return(pass);
        // numeral and special characters password
      } else if (lower == false && upper == false && numeric == true && spec == true) {
        do {
          pass = "";
          numSpecPass();
          var chNum = checkNumList();
          var chSp = checkSpecial();
        } while (chNum === false || chSp === false);
        return(pass);
        // lowercase, uppercase, and numeric password
      } else if (lower == true && upper == true && numeric == true && spec == false) {
        do {
          pass = "";
          numLowUpPass();
          var chAl = checkAlpha();
          var chUpAl = checkUpAlpha();
          var chNum = checkNumList();
        } while (chAl === false || chUpAl === false || chNum === false);
        return(pass);
        // lowercase, uppercase, and special characters password
      } else if (lower == true && upper == true && numeric == false && spec == true) {
        do {
          pass = "";
          lowUpSpecPass();
          var chAl = checkAlpha();
          var chUpAl = checkUpAlpha();
          var chSp = checkSpecial();
        } while (chAl === false || chUpAl === false || chSp === false);
        return(pass);
        // lowercase, numeric, and special characters password
      } else if (lower == true && upper == false && numeric == true && spec == true) {
        do {
          pass = "";
          numLowSpecPass();
          var chAl = checkAlpha();
          var chNum = checkNumList();
          var chSp = checkSpecial();
        } while (chAl === false || chNum === false || chSp === false);
        return(pass);
        // uppercase, numeric, and special characters password
      } else if (lower == false && upper == true && numeric == true && spec == true) {
        do {
          pass = "";
          numUpSpecPass();
          var chUpAl = checkUpAlpha();
          var chNum = checkNumList();
          var chSp = checkSpecial();
        } while (chUpAl === false || chNum === false || chSp === false);
        return(pass);
        // all four elements password
      } else {
        do {
          pass = "";
          numLowUpSpecPass();
          var chAl = checkAlpha();
          var chUpAl = checkUpAlpha();
          var chNum = checkNumList();
          var chSp = checkSpecial();
        } while (chAl === false || chUpAl === false || chNum === false || chSp === false);
        return(pass);
      }
    }

    // runs charPrompt and saves result
    var char = charPrompt();

    // if char isn't an integer between 7 and 129, exits function
    if (char === undefined) {
      return ("Try again");
    }

    // runs functions to confirm desired password elements
    var lower = askLower();
    var upper = askUpper();
    var numeric = askNum();
    var spec = askSpec();

    // compiles password based on desired elements and loops until all are properly included
    pass = runChecks();

    // returns password and exits function
    return (pass);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);