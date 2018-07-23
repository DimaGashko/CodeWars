function bestPrice(arr) {
   return arr.reduce((sum, item) => sum + item) / arr.length;
 }