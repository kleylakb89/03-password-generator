// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  generatePassword = function () {

    var pass = "";

    var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var upAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

    numPass = function () {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, Math.floor(Math.random() * 10));
      }
      return (pass);
    }

    lowerPass = function () {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, alpha[Math.floor(Math.random() * 26)]);
      }
      return (pass);
    }

    upperPass = function () {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, upAlpha[Math.floor(Math.random() * 26)]);
      }
      return (pass);
    }

    specPass = function () {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, special[Math.floor(Math.random() * 29)]);
      }
      return (pass);
    }

    numLowPass = function () {
      var numLower = numList.concat(alpha);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numLower[Math.floor(Math.random() * 36)]);
      }
      return (pass);
    }

    numUpPass = function () {
      var numUpper = numList.concat(upAlpha);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numUpper[Math.floor(Math.random() * 36)]);
      }
      return (pass);
    }

    numSpecPass = function () {
      var numSpec = numList.concat(special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numSpec[Math.floor(Math.random() * 39)]);
      }
      return (pass);
    }

    lowUpPass = function () {
      var lowUp = alpha.concat(upAlpha);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, lowUp[Math.floor(Math.random() * 52)]);
      }
      return (pass);
    }

    lowSpecPass = function () {
      var lowSpec = alpha.concat(special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, lowSpec[Math.floor(Math.random() * 55)]);
      }
      return (pass);
    }

    upSpecPass = function () {
      var upSpec = upAlpha.concat(special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, upSpec[Math.floor(Math.random() * 55)]);
      }
      return (pass);
    }

    numLowUpPass = function () {
      var numLowUp = numList.concat(alpha, upAlpha);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numLowUp[Math.floor(Math.random() * 62)]);
      }
      return (pass);
    }

    numLowSpecPass = function () {
      var numLowSpec = numList.concat(alpha, special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numLowSpec[Math.floor(Math.random() * 65)]);
      }
      return (pass);
    }

    numUpSpecPass = function () {
      var numUpSpec = numList.concat(upAlpha, special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numUpSpec[Math.floor(Math.random() * 65)]);
      }
      return (pass);
    }

    lowUpSpecPass = function () {
      var lowUpSpec = alpha.concat(upAlpha, special);
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, lowUpSpec[Math.floor(Math.random() * 81)]);
      }
      return (pass);
    }

    numLowUpSpecPass = function () {
      var numLowUpSpec = numList.concat(alpha, upAlpha, special);
      pass = "";
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, numLowUpSpec[Math.floor(Math.random() * 91)]);
      }
      return (pass);
    }

    charPrompt = function () {
      var char = prompt("How many characters would you like your password to contain?");

      // Checking if input is an integer between 7 and 129
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

    askLower = function () {
      var lower = confirm("Would you like to include lowercase characters?");
      return (lower);
    }

    askUpper = function () {
      var upper = confirm("Would you like to include uppercase characters?");
      return (upper);
    }

    askNum = function () {
      var numeric = confirm("Would you like to include numeric characters?");
      return (numeric);
    }

    askSpec = function () {
      var spec = confirm("Would you like to include special characters?");
      return (spec);
    }

    // Checks if alpha array elements are included in pass
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

    // Checks if upAlpha array elements are included in pass
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

    // Checks if numList array elements are included in pass
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

    // Checks if special array elements are included in pass
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

    runChecks = function() {
      if (lower == false && upper == false && numeric == false && spec == false) {
        alert("Password must contain at least one type of character.");
        return("Try again");
      } else if (lower == true && upper == false && numeric == false && spec == false) {
        return (lowerPass());
      } else if (lower == false && upper == true && numeric == false && spec == false) {
        return (upperPass());
      } else if (lower == false && upper == false && numeric == true && spec == false) {
        return (numPass());
      } else if (lower == false && upper == false && numeric == false && spec == true) {
        return (specPass());
      } else if (lower == true && upper == true && numeric == false && spec == false) {
        do {
          lowUpPass();
          checkAlpha();
          checkUpAlpha();
          console.log(pass);
        } while (checkAlpha === false || checkUpAlpha === false);
        return(pass);
      } else if (lower == true && upper == false && numeric == true && spec == false) {
        numLowPass();
      } else if (lower == true && upper == false && numeric == false && spec == true) {
        lowSpecPass();
      } else if (lower == false && upper == true && numeric == true && spec == false) {
        numUpPass();
      } else if (lower == false && upper == true && numeric == false && spec == true) {
        upSpecPass();
      } else if (lower == false && upper == false && numeric == true && spec == true) {
        numSpecPass();
      } else if (lower == true && upper == true && numeric == true && spec == false) {
        numLowUpPass();
      } else if (lower == true && upper == true && numeric == false && spec == true) {
        lowUpSpecPass();
      } else if (lower == true && upper == false && numeric == true && spec == true) {
        numLowSpecPass();
      } else if (lower == false && upper == true && numeric == true && spec == true) {
        numUpSpecPass();
      } else {
        do {
          numLowUpSpecPass();
          console.log(pass);
          var chAl = checkAlpha();
          console.log(chAl);
          var chUpAl = checkUpAlpha();
          console.log(chUpAl);
          var chNum = checkNumList();
          console.log(chNum);
          var chSp = checkSpecial();
          console.log(chSp);
        } while (chAl === false || chUpAl === false || chNum === false || chSp === false);
        return(pass);
      }
    }

    var char = charPrompt();

    if (char === undefined) {
      return ("Try again");
    }

    var lower = askLower();
    var upper = askUpper();
    var numeric = askNum();
    var spec = askSpec();

    pass = runChecks();


    // TO DO: Debug all chars included
    // experiment = function () {
    //   var numLower = numList.concat(alpha);
    //   for (var i = 0; i <= char; i++) {
    //     pass = pass.padEnd(i, numLower[Math.floor(Math.random() * 36)]);
    //   }
    //   // console.log(alpha.some(pass));
    //   // console.log(numList.some(pass));
    //   // console.log(alpha.some(pass));
    //   return (pass);
    // }

    // exp2 = function () {
    //   var numLowUpSpec = numList.concat(alpha, upAlpha, special);
    //   for (var i = 0; i <= char; i++) {
    //     pass = pass.padEnd(i, numLowUpSpec[Math.floor(Math.random() * 91)]);
    //   }
    //   return (pass);
    // }

    // exp3 = function () {
    //   var check = pass;
    //   return (check);
    // }

    // exp4 = function (array, pass) {
    //   return array.some(function (check) {
    //     console.log(pass, check);
    //     return (pass.substring(0) === check);
    //   });
    // }



    // exp2();
    // var checking = checkSpecial();
    // console.log(checking);

    // exp2();
    // var test = exp4(special, pass);
    // if(test === true) {
    //   console.log("Yes");
    // } else if(test === false) {
    //   console.log("No");
    // } else {
    //   console.log("Problem");
    // };
    // console.log(pass.substring(0));

    // if (alpha.some(exp2) === false || numList.some(exp2) === false || upAlpha.some(exp2) === false || special.some(exp2) === false) {
    //   exp2();
    // };

    // do {
    //   exp2();
    //   console.log(pass);
    // } while (alpha.some(exp2) === false || numList.some(exp2) === false || upAlpha.some(exp2) === false || special.some(exp2) === false);


    // exp2();
    // console.log(pass);
    // console.log(alpha.some(exp3));
    // console.log(numList.some(exp3));
    // console.log(upAlpha.some(exp3));
    // console.log(special.some(exp3));


    // console.log(numList.some(experiment));

    return (pass);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;
  // console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);