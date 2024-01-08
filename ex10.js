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
const kucuk250 = fiyatlar.filter((f) => f<250)

console.log(kucuk250);
//*-------------- ÖDEV -------------------
//* fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

//* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];

