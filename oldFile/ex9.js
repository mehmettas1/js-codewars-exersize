// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; şeklinde bir dizi verilmiştir. Bu dizideki çift sayıları bulun ve çift sayıların toplamını döndürün.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,24]

// function sum(numbers) {

// let toplama = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 2 ==0) {
    
//     toplama += numbers[i];
//   }
  
  
// }
// return toplama

// }

// const meta = sum(numbers);

// console.log(meta);

function findDuplicates(arr) {
    let counts = {};
    let duplicates = [];
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  
    for (const num in counts) {
      if (counts[num] > 1) {
        duplicates.push(parseInt(num));
      }
    }
  
    return duplicates;
  }
  
  const numbers = [4, 2, 4, 5, 2, 3, 1, 3];
  const duplicates = findDuplicates(numbers);
  console.log("Tekrar eden sayılar:", duplicates);
  