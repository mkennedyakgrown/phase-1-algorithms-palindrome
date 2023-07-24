function isPalindrome(word) {
  // Write your algorithm here
  let drow = '';
  for (let i = word.length - 1; i >= 0; i--) {
    drow = drow + word[i];
  };
  revWord = drow.toString();
  if (word == drow) {
    return true;
  } else {
    return false;
  };
}

/* 
  Add your pseudocode here
  declare a string variable
  iterate over 'word' in reverse order, building new variable backwards
  compare 'word' to new variable: if same, true; if not same, false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("question"));

  
}

module.exports = isPalindrome;
