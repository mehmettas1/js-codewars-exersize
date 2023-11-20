// 1) !Write a Python/JavaScript code to sort the list/array below without using .sort() method.
// elements of list = [999, 333, 2, 8982, 12, 45, 77, 99, 11]
// Expected output:
// [2, 11, 12, 45, 77, 99, 333, 999, 8982]

// function selectionSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n; i++) {
//         let minIdx = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIdx]) {
//                 minIdx = j;
//             }
//         }
//         [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//     }
// }

// // Test verisi
// let elements = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
// selectionSort(elements);
// console.log(elements); // Sıralanmış liste


//2) Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


function summation(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}
 
console.log(summation(2)); // 3
console.log(summation(8)); // 36


// 3)  Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
    // Sayıyı dizeye dönüştürerek rakamları elde et
    let digits = n.toString().split('');
    
    // Rakamları azalan sırada sırala
    let sortedDigits = digits.sort((a, b) => parseInt(b) - parseInt(a));
    
    // Sıralı rakamları birleştirerek sayıya dönüştür
    let result = parseInt(sortedDigits.join(''));
    
    return result;
  }
  
 let tas =descendingOrder("123456789")
  console.log( tas );

