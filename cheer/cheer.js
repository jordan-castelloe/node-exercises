const firstName = "John";
const lastName = "Doe";
const vowels = ["A", "E", "I", "O", "U"];
let indefiniteArticle = null;

// converts a string to an array of capital letters
const allCapsArray = (string) => {
  string = string.toUpperCase().split('');
  return string;
}

const firstNameArray = allCapsArray(firstName);
const lastNameArray = allCapsArray(lastName);
const fullNameArray = [...firstNameArray, ...lastNameArray];

const cheer = () => {
  fullNameArray.forEach(letter => {
    if (vowels.includes(letter)){
      indefiniteArticle = "an";
    } else {
      indefiniteArticle = "a";
    }
    console.log(`Give me ${indefiniteArticle} ${letter}!`);
  });
  console.log("What's that spell?");
  console.log(`${firstName.toUpperCase()} ${lastName.toUpperCase()}!`);
}

cheer();