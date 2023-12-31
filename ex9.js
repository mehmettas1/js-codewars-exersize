// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; şeklinde bir dizi verilmiştir. Bu dizideki çift sayıları bulun ve çift sayıların toplamını döndürün.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sum(numbers) {

let toplama = 0;

for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 ==0) {
    
    toplama += numbers[i];
  }
  
  
}
return toplama

}

const meta = sum(numbers);

console.log(meta);

