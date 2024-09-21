// const fiyatlar = [100, 250, 50, 89];

// const yeniFiyatlar = fiyatlar.map((deger, indis) => {
//   const yeniDeger = deger + (deger * 10 / 100);
//   console.log(`${indis}. iterasyon: ${yeniDeger}`);
//   return yeniDeger;
// });

// console.log(yeniFiyatlar);

// const fiyatlar  = [100,250 ,50 ,89,555,650];

// const yeniFiyatlar = fiyatlar.map((deger,index)=>{
//   const yeniDeger = deger+deger*10/100;
//   console.log(`${index}  ${deger} ==> yeni değeri ${yeniDeger}`)
//   return yeniDeger
// })

// console.log(yeniFiyatlar);

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.
//* const kucuk250 = fiyatlar.filter((f) => f<250)

//* console.log(kucuk250);
//*-------------- ÖDEV -------------------
//* fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

//* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.
//* const maaslar = [3000, 5000, 4000, 6000, 6500];

// ??
// Bu fonksiyon 1'den 100'e kadar olan sayıları konsola yazdırmalı. Ancak şu kurallara dikkat edilmesi gerekiyor:

// Eğer sayı 3 ile bölünüyorsa, sayının yerine "Fizz" yazdırılmalı.
// Eğer sayı 5 ile bölünüyorsa, sayının yerine "Buzz" yazdırılmalı.
// Eğer sayı hem 3 hem de 5 ile bölünüyorsa, sayının yerine "FizzBuzz" yazdırılmalı.
// Diğer durumlarda sayının kendisi yazdırılmalı.
// Fonksiyonun adı fizzBuzz olmalı ve herhangi bir parametre almamalıdır.

// Bu görevi gerçekleştirmek için gerekli olan kodu yazınız.

// const  FizzBuzz = (params) => {
//     if (params % 3 === 0 && params % 5 ===0) {
//         console.log("fizzBuzz")
//     } else if (params % 3  === 0) {
//         console.log("fiz")
//     } else if  (params % 5  === 0){
//         console.log("buzz")
//     }else {
//         console.log(params);
//     }
//     return params
// }

// for (let i = 1; i < 100; i++) {

//     const result = FizzBuzz(i)
// }

// ??
// const isPalindrome = (str) => {
//   let text = "ata";
//   let part = text.split("").reverse().join("");
//   const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  //let part2 = part.trim();
//   let meta = part.length
//   let meta2 = part2.length
//   let meta3 = text.length
//   console.log("part 1:",part);
//   console.log("part:",part);
//   console.log("text:",text);
//   if (text == part) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
//   return str;
// };
// isPalindrome("mehmet");
const sum = (a,b)=>{
  
  return a+b
}
console.log(sum(5, 6));