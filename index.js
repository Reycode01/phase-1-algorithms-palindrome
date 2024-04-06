function isPalindrome(word) {
  // Convert the word to lowercase and remove non-alphanumeric characters
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if the cleaned word is equal to its reverse
  return cleanWord === cleanWord.split('').reverse().join('');
}

module.exports = isPalindrome;

