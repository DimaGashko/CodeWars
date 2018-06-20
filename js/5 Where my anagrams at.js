//https://www.codewars.com/kata/where-my-anagrams-at/javascript

const anagrams = (function() {
  
  return function anagrams(word, words) {
    word = sort(word);
  
    return words.filter(item => sort(item) === sort(word));
  }
  
  function sort(str) {
    return str.split('').sort().join('');
  }
  
}());
