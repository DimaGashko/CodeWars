function toCamelCase(str) {
   const fragments = str.split(/[_-]/);
 
   return fragments[0] + fragments.slice(1).map(word => {
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
 }