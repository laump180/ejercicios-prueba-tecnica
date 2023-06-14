function isPalindrome(word) {
 
  word = word.toLowerCase().replace(/\s/g, '');
  

  const reverseWord = word.split('').reverse().join('');
  
 
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

const word1 = "anita lava la tina";
console.log(isPalindrome(word1));  

const word2 = "Hola mundo";
console.log(isPalindrome(word2));  