//**  Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//* Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


function getSum( a,b )
{
  let big,small;
   if(a>b){
    big = a;
    small= b;
   }else {
    big = b;
    small=a;
   }

   for (let i =big ;i>small; i--) {
    big += i-1;
    
   }
   return(big)
};

console.log(getSum(a,b));