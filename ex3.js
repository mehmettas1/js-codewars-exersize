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

// function summation(num) {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(summation(2)); // 3
// console.log(summation(8)); // 36

// 3)  Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// function seta(e) {
//     let digit = e.toString().split("")

//     let sortDigit = digit.sort((a,b)=>parseInt(b)-parseInt(a));

//     let result = parseInt(sortDigit.join(""))

// return result
// }
// console.log(seta(1231546));
////****************************/ */
// 4) soru
// function calculateAverage(nums) {
//   if(nums.lenght ===0) {
//     return 0;
//   }

//   let sum =0;
//   for(let i=0;i<nums.length ; i++){
//     sum += nums[i]

//   }
//     return sum / nums.length
// }
 


// const numbers = [5, 10, 15, 20,50];
// const average = calculateAverage(numbers);
// console.log(`Ortalama: ${average}`);





///************************************************5.SORU ARRAY METHODS*****************************/

// 1 let sentence = "Merhaba Dünya!"; şeklinde bir cümle verilmiştir. Bu cümleyi tersine çevirin ve kelimeler arasındaki boşlukları “_” karakteri ile değiştirin.
// 2 numbers = [4, 15, 8, 23, 42, 16]; dizisindeki en küçük ve en büyük sayıyı bulun ve bu iki sayıyı, örneğin: “min: 3, max: 21” şeklinde döndürün
// let emptyArray = [];
// let numbers = [4, 15, 8, 23, 42, 16];
// let max = Math.max(...numbers)
// let min = Math.min(...numbers)
// let reverse = numbers.reverse()
// let sortNumbers = numbers.sort(function(a,b) {
//     return b-a
// }) // sıralama yapaar

 
// numbers.push(2157)

// const filterNumbers = numbers.filter(function(number) {
//     return number>40
//  }) // filtreleleme yapar
 
// const reduceNumber = numbers.reduce(function (item1,item2) {
//     return item1+item2
// }) //toplama yapar


// const findNumber = numbers.find(function(number) {
//     return number >40
// })
// emptyArray.push(findNumber)

// //const numbersFill = numbers.fill(0.9,2)

// //  numbers.unshift(1,2)
// // const spliceNumber = numbers.splice(2,3)
// // const popNumbers = numbers.pop(21)

// const toStringNumbers = numbers.toString()
// const arrayToString = toStringNumbers.split(' ') 

// console.log( `max number: ${max}` ,"+", `min number: ${min}`,reverse);
// console.log("sortNumbers",sortNumbers);
// console.log("filterNumbers:",filterNumbers);
// console.log("reduceNumber:",reduceNumber);
// console.log("findNumber :", findNumber);
// console.log("empty array push :" ,emptyArray);
// // console.log("numbers array add fill :" ,numbersFill);
// // console.log(popNumbers);
// console.log(numbers);
// console.log(toStringNumbers);
// console.log(arrayToString);
// // console.log(spliceNumber);


// let sentence = "Merhaba Dünya!";

// let joinContext = sentence.split('').reverse().join('');
// let meta = joinContext.split(' ').join('-')
// console.log(joinContext);
// console.log(meta);