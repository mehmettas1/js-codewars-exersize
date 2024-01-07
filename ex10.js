// const fiyatlar = [100, 250, 50, 89];

// const yeniFiyatlar = fiyatlar.map((deger, indis) => {
//   const yeniDeger = deger + (deger * 10 / 100);
//   console.log(`${indis}. iterasyon: ${yeniDeger}`);
//   return yeniDeger;
// });

// console.log(yeniFiyatlar);


const fiyatlar  = [100,250 ,50 ,89];

const yeniFiyatlar = fiyatlar.map((deger,index)=>{
  const yeniDeger = deger+deger*10/100;
  console.log(`${index}  ${deger} ==> yeni değeri ${yeniDeger}`)
  return yeniDeger
})

console.log(yeniFiyatlar);