// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const symbols = [
  "!",
  "#",
  "$",
  "&",
  "%",
  "'",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "~",
  "`",
  "{",
  "|",
  "}",
  ".",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Declare a new function on line 3
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // this snippet prompts the user to choose a password length. The value the user inputs will be stored in "userPasswordLength" variable.
  const userPasswordLength = prompt(
    "Please choose a password length between 8 and 128 characters"
  );

  // Transform User input from string to number
  const passwordLength = parseInt(userPasswordLength, 10);

  //makes sure password length is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      `Your input does not match the criteria. Please choose a password length between 8 and 128 characters!`
    );
    return;
  }

  //defines variables and collects user data
  const confirmLowercase = confirm(
    `Do you want your password to contain lowercase letters?`
  );

  const confirmUppercase = confirm(
    `Do you want your password to contain uppercase letters?`
  );

  const confirmSymbols = confirm(
    `Do you want your password to contain symbols?`
  );

  const confirmNumbers = confirm(
    `Do you want your password to contain numbers?`
  );

  // This snippet alerts user if no type of character was selected
  if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmSymbols &&
    !confirmNumbers
  ) {
    alert(`Please choose at least one character type!`);
  }

  //This is a new array that collects only the characters preffered by the user
  var finalPasswordParameters = [];

  //If user confirms lowercase characters, they will be pushed into the new array
  if (confirmLowercase) {
    finalPasswordParameters.push(...lowercase);
  }

  //if user confirms uppercase characters, they will be pushed into the new array
  if (confirmUppercase) {
    finalPasswordParameters.push(...uppercase);
  }

  //if user confirms symbols, they will be pushed into the new array
  if (confirmSymbols) {
    finalPasswordParameters.push(...symbols);
  }

  //if the user confirms numbers, they will be pushed into the new array
  if (confirmNumbers) {
    finalPasswordParameters.push(...numbers);
  }

  console.log(finalPasswordParameters.length);

  // This snippet chooses random characters from the array that contains the characters preferred by the user
  // It uses math.random function to randomize characters inside the array.
  // It uses math.floor to return the largest integer less than or equal to a given number (obtained, in this case through math.random)
  for (let i = 0; i < passwordLength; i++) {
    password +=
      finalPasswordParameters[
        Math.floor(Math.random() * finalPasswordParameters.length)
      ];
  }

  // Return our created password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
