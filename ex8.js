// let tas1 = String(123231312315)
// console.log( tas );
// console.log( tas1 );


// let meta = "bu bir denemedir";

// let two = meta.split("").reverse().join("")


// let as = [1,2,3,4,5,8,2,4]

// let asas =as.slice().sort((a, b) => parseInt(b) - parseInt(a)).join("")

// console.log(asas);
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

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