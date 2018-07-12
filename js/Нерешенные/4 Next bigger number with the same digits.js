function nextBigger(n) {
   let arr = Array.from('' + n), l = Infinity, r = Infinity, find = false;
   
   for (let i = arr.length - 1; i >= 1; i--) {
     for (let j = i - 1; j >= 0; j--) {
       
       if (+arr[j] < +arr[i] && j <= l) {
         if (j === l && +arr[i] >= +arr[r]) continue; 
       
         find = true;
         l = j; 
         r = i;
       } 
       
     }
   }
   
   if (!find) return -1;
   
   let tmp = arr[l];
   arr[l] = arr[r];
   arr[r] = tmp;
   
   return +arr.join('');
 }