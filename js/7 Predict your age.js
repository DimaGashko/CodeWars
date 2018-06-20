function predictAge(...ages) {
   const result = ages.map(n => n*n)
     .reduce((sum, n) => sum + n);
     
   return Math.floor(Math.sqrt(result) / 2);
 }