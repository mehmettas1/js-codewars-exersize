// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// Arabanız eski, kolay bozuluyor. Amortisörler gitti ve tamamen ölmeden önce yaklaşık 15 darbe daha kaldırabileceğini düşünüyorsunuz.

// Ne yazık ki sizin için sürüşünüz çok inişli çıkışlı! Düz bir yol ("_") veya tümsekler ("n") gösteren bir dize verildiğinde, eve güvenli bir şekilde varıp varmayacağınıza çalışın. 15 veya daha az tümsek, "Woohoo!" döndürür, 15'ten fazla tümsek "Car Dead" döndürür.

// Samples:
// bump("_nnnnnnn_n__n______nn__nn_nnn") => "Car Dead"
// bump("______n___n_") => "Woohoo!"


//! solution of the problem

// function bump(str){
//     let car =str.split("").filter(a => a == "n");
//     return car.length <= 15 ? "Woohoo!" : "Car Dead";
// }

// Soru: Verilen bir dizide (array) tekrar eden bir elemanı bulma algoritması yazın.



//  function findDuplicate(arr) {
//     var count = {};
    
//     for (var i = 0; i < arr.length; i++) {
//       var element = arr[i];
      
//       if (count[element]) {
//         return element;
//       } else {
//         count[element] = true;
//       }
//     }
    
//     return null;
//   }
  
//   var arr = [2, 3, 4, 5, 2, 6, 7, 4];
//   var duplicate = findDuplicate(arr);
//   console.log(duplicate);
  

// function findMax(arr){
//     return Math.max(...arr);

// };
// let arr =[36,32,34,45];
// let maxNumber = findMax(arr);
// console.log(maxNumber);


// var obj = { a: 1, b: 2, c: 3 };
// var arr = Object.keys(obj);
// console.log(arr);


// var obj = { a: 1, b: 2, c: 3 };
// var arr = Object.values(obj);
// console.log(arr);


// var obj = { a: 1, b: 2, c: 3 };
// var arr = Object.entries(obj);
// console.log(arr);

function tekSayılarınToplami(dizi) {
  let toplam = 0;

  for(let i = 0; i<dizi.length; i++ ){
    if( dizi[i] % 2 ===1  ){
      toplam += dizi[i];
    }
  }
  return toplam;

};

const sayilar = [25,32,12,11,15];
const sonuc = tekSayılarınToplami(sayilar)
console.log( "tek sayilarin toplamı :", sonuc);



//!! Soru: Bir dizedeki karakterleri tersine çeviren bir JavaScript algoritması yazın

function tersDizi(dizi) {
  let toplam  = dizi.split("").reverse().join("").toUpperCase();
 return toplam;
}

const metin = "hello world";
const tersKelime = tersDizi(metin)

console.log( "ters kelime sonucu :", tersKelime);





