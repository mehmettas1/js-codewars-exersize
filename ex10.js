// const fiyatlar = [100, 250, 50, 89];

// const yeniFiyatlar = fiyatlar.map((deger, indis) => {
//   const yeniDeger = deger + (deger * 10 / 100);
//   console.log(`${indis}. iterasyon: ${yeniDeger}`);
//   return yeniDeger;
// });

// console.log(yeniFiyatlar);


const fiyatlar  = [100,250 ,50 ,89,555,650];

const yeniFiyatlar = fiyatlar.map((deger,index)=>{
  const yeniDeger = deger+deger*10/100;
  console.log(`${index}  ${deger} ==> yeni değeri ${yeniDeger}`)
  return yeniDeger
})

console.log(yeniFiyatlar);


 
//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.
const kucuk250 = fiyatlar.filter((f) => f<250)

console.log(kucuk250);
