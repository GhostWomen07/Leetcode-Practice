// if x is palindrome then print true otherwise print false

//first solution without E6 method

let x=121

const isPalindrome = function(x){
  if (x < 0) return false

  let rev = 0
  for(let i = x; i >= 1; i = Math.floor(i/10)) 
  {rev = rev*10 + i%10
 
  }
   return rev === x
};

console.log(isPalindrome(x));

//second solution with E6 method

const isPalindrome = function(x){
   let num= x.toString().split("").reverse().join("");
    return num===x.toString()
};

console.log(isPalindrome(x))


