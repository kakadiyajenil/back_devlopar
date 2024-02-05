// Write a JS function that reverse a number 

// let num = Number(prompt("Enter Number : ")); 
 
// let r = a(num); 
// console.log("Currect Number : ",num);      
// console.log("The Reverse Number is : ",r); 
 
//  function a(n) { 
//     let sum = 0 ; 
//     while (n!=0) { 
//         sum = sum * 10 + n%10; 
//         n = Math.floor(n / 10); 
//     } 
//     return sum;  
// }

//   Write a JS function that returns a passed string with letters in alphabetical order 

// function arr(str){
//     return str  . split('').sort().join('');
// }

// console.log(arr("jenil"));

//  Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// 3.

// const text1 = 'the quick brown fox';
// const text2 = text1.toUpperCase();
// console.log(text1);
// console.log(text2);

// function capitalFirstLetter(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     let capitalizedStr = words.join(' ');
//     return capitalizedStr;
//   }
//   let inputString = 'the quick brown fox';
//   let outputString = capitalFirstLetter(inputString);
//   console.log(outputString); // Output: 'The Quick Brown Fox'
  
  

// 4.
  
// function LongestWord(str) {
//     let words = str.split(' ');
//     let longest = '';
  
//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > longest.length) {
//         longest = words[i];
//       }
//     }
  
//     return longest;
//   }
  
//   let inputString = 'Web Development Tutorial';
//   let longest = LongestWord(inputString);
//   console.log(longest);  // Output: 'Development'  

// 5.
// function isPerfectNumber(number) {
//     let sum = 0;
  
//     for (let i = 1; i < number; i++) {
//       if (number % i === 0) {
//         sum += i;
//       }
//     }
  
//     if (sum === number) { 
//       console.log("This is perfect number");
//     } else {
//       console.log("This is not perfect number");
//     }
//   }
//   let number = Number(prompt("enter value"))
//   console.log(number); 
//   isPerfectNumber(number);