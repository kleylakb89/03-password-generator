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

    // Consolidating functions based on number of options confirmed

    // Creates a password based off a single confirmed element
    passSingleOption = function (arrayOption) {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, arrayOption[Math.floor(Math.random() * arrayOption.length)]);
      }
      return (pass);
    }

    // Creates a password based off two confirmed elements
    passTwoOptions = function (option1, option2) {
      var options = option1.concat(option2);

      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, options[Math.floor(Math.random() * options.length)]);
      }
      return (pass);
    }

    // Creates a password based off three confirmed elements
    passThreeOptions = function (option1, option2, option3) {
      var options = option1.concat(option2, option3);

      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, options[Math.floor(Math.random() * options.length)]);
      }
      return (pass);
    }

    // Creates a password based off all elements
    passFourOptions = function (option1, option2, option3, option4) {
      var options = option1.concat(option2, option3, option4);

      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, options[Math.floor(Math.random() * options.length)]);
      }
      return (pass);
    }

    // Checks if array elements are included in password.
    checkUsersInput = function (array) {
      var bool = "";
      for (var i = 0; i < char; i++) {
        if (array.includes(pass[i])) {
          bool = true;
        }
      }
      if (bool) {
        return (bool);
      } else {
        return (false);
      }
    }

    // depending on confirm inputs, compiles password and checks if password meets all criteria. If not, loops until the password meets the criteria.
    runChecks = function() {
      // starts with failure state
      if (!lower && !upper && !numeric && !spec) {
        alert("Password must contain at least one type of character.");
        return("Try again");
        // all lowercase password
      } else if (lower && !upper && !numeric && !spec) {
        return (passSingleOption(alpha));
        // all uppercase password
      } else if (!lower && upper && !numeric && !spec) {
        return (passSingleOption(upAlpha));
        // all numeric password
      } else if (!lower && !upper && numeric && !spec) {
        return (passSingleOption(numList));
        // all special characters password
      } else if (!lower && !upper && !numeric && spec) {
        return (passSingleOption(special));
        // lowercase and uppercase password
      } else if (lower && upper && !numeric && !spec) {
        do {
          pass = "";
          passTwoOptions(alpha, upAlpha)
          var chAl = checkUsersInput(alpha);
          var chUpAl = checkUsersInput(upAlpha);
        } while (!chAl || !chUpAl);
        return(pass);
        // lowercase and numeric password
      } else if (lower && !upper && numeric && !spec) {
        do {
          pass = "";
          passTwoOptions(alpha, numList);
          var chAl = checkUsersInput(alpha);
          var chNum = checkUsersInput(numList);
        } while (!chAl || !chNum);
        return(pass);
        // lowercase and special characters password
      } else if (lower && !upper && !numeric && spec) {
        do {
          pass = "";
          passTwoOptions(alpha, special);
          var chAl = checkUsersInput(alpha);
          var chSp = checkUsersInput(special);
        } while (!chAl || !chSp);
        return(pass);
        // uppercase and numeric password
      } else if (!lower && upper && numeric && !spec) {
        do {
          pass = "";
          passTwoOptions(upAlpha, numList);
          var chUpAl = checkUsersInput(upAlpha);
          var chNum = checkUsersInput(numList);
        } while (!chUpAl || !chNum);
        return(pass);
        // uppercase and special characters password
      } else if (!lower && upper && !numeric && spec) {
        do {
          pass = "";
          passTwoOptions(upAlpha, special);
          var chUpAl = checkUsersInput(upAlpha);
          var chSp = checkUsersInput(special);
        } while (!chUpAl || !chSp);
        return(pass);
        // numeric and special characters password
      } else if (!lower && !upper && numeric && spec) {
        do {
          pass = "";
          passTwoOptions(numList, special);
          var chNum = checkUsersInput(numList);
          var chSp = checkUsersInput(special);
        } while (!chNum || !chSp);
        return(pass);
        // lowercase, uppercase, and numeric password
      } else if (lower && upper && numeric && !spec) {
        do {
          pass = "";
          passThreeOptions(alpha, upAlpha, numList);
          var chAl = checkUsersInput(alpha);
          var chUpAl = checkUsersInput(upAlpha);
          var chNum = checkUsersInput(numList);
        } while (!chAl || !chUpAl || !chNum);
        return(pass);
        // lowercase, uppercase, and special characters password
      } else if (lower && upper && !numeric && spec) {
        do {
          pass = "";
          passThreeOptions(alpha, upAlpha, special);
          var chAl = checkUsersInput(alpha);
          var chUpAl = checkUsersInput(upAlpha);
          var chSp = checkUsersInput(special);
        } while (!chAl || !chUpAl || !chSp);
        return(pass);
        // lowercase, numeric, and special characters password
      } else if (lower && !upper && numeric && spec) {
        do {
          pass = "";
          passThreeOptions(alpha, numList, special);
          var chAl = checkUsersInput(alpha);
          var chNum = checkUsersInput(numList);
          var chSp = checkUsersInput(special);
        } while (!chAl || !chNum || !chSp);
        return(pass);
        // uppercase, numeric, and special characters password
      } else if (!lower && upper && numeric && spec) {
        do {
          pass = "";
          passThreeOptions(upAlpha, numList, special);
          var chUpAl = checkUsersInput(upAlpha);
          var chNum = checkUsersInput(numList);
          var chSp = checkUsersInput(special);
        } while (!chUpAl || !chNum || !chSp);
        return(pass);
        // all four elements password
      } else {
        do {
          pass = "";
          passFourOptions(alpha, upAlpha, numList, special);
          var chAl = checkUsersInput(alpha);
          var chUpAl = checkUsersInput(upAlpha);
          var chNum = checkUsersInput(numList);
          var chSp = checkUsersInput(special);
        } while (!chAl || !chUpAl || !chNum || !chSp);
        return(pass);
      }
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
      } else if (char > 128) {
        alert("Password must be under 129 characters.");
        return;
      }
      return (char);
    }

    // runs charPrompt and saves result
    var char = charPrompt();

    // if char isn't an integer between 7 and 129, exits function
    if (char === undefined) {
      return ("Try again");
    }

    // confirms which elements user wishes to include
    var lower = confirm("Would you like to include lowercase characters?");
    var upper = confirm("Would you like to include uppercase characters?");
    var numeric = confirm("Would you like to include numeric characters?");
    var spec = confirm("Would you like to include special characters?");

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