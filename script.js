// Character sets that users can later choose to include in their password
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "^", "&", "*", "+", "-", "=", "_", "~", "?"];

// Assigns variable to generate button
var generateBtn = document.querySelector("#generate");

// Adds event listener to generate button, which when pressed prompts user to choose their desired password length and component sets
generateBtn.addEventListener("click", function() {
    var chooseLength = (prompt("Enter a desired password length between 8 and 128 characters."));
    
        while(chooseLength < 8 || chooseLength > 128) {
          alert("Please choose a password length between 8 and 128 characters.");
          var chooseLength = (prompt("Enter a desired password length between 8 and 128 characters."));
          }; 
    
    alert("Choose at least one of four character sets to include in your password.");
    var confirmLowercase = confirm("Would like to include lowercase characters?");
    var confirmUppercase = confirm("Would like to include uppercase characters?");
    var confirmNumbers = confirm("Would you like to include numbers?");
    var confirmSpecialChars = confirm("Would like to include special characters?");
    
          while(confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSpecialChars === false) {
            alert("Please choose at least one character set.");
            var confirmLowercase = confirm("Would like to include lowercase characters?");
            var confirmUppercase = confirm("Would like to include uppercase characters?");
            var confirmNumbers = confirm("Would you like to include numbers?");
            var confirmSpecialChars = confirm("Would like to include special characters?");  
            }; 
    
    // Collects character sets chosen in prompts into an empty string
    var charSet = [];

        if (confirmLowercase === true) {
            charSet = charSet.concat(lowercase);
            };
  
        if (confirmUppercase === true) {
            charSet = charSet.concat(uppercase);
            };

        if (confirmNumbers === true) {
            charSet = charSet.concat(numbers);
            };
          
        if (confirmSpecialChars === true) {
            charSet = charSet.concat(specialChar);
            };

    // Fills in an empty string with characters randomly selected from chosen character sets
    function generatePassword() {
        var randomPassword = "";
            
        for (var i = 0; i < chooseLength; i++) {
              randomPassword = randomPassword + charSet[Math.floor(Math.random() * charSet.length)];
            };
            return randomPassword;
        };
        
        // Calls out the generated password and places it in the password textarea
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
    });

