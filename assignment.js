// ÇALIŞMA SORULARI
// SORU1: Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin
// alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.


// SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu
// tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak
// sonuçları ana programa döndürmeli gerekmektedir.


// SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını
// hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression
// yöntemi ile yazınız. NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa
// VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.

//! 1.soru

//! 1.yöntem
// const alan = function(a,h){
//     let x = (a*h)/2;
//     return x
// }
// console.log(alan(6,12));

//! 2.yöntem
// const alan = function(a,h){
//     let x = (a*h)/2;
//    console.log(x)
// }
// console.log(alan(6,12));


//! 3.yöntem

// const alan = (a,h) => (a*h)/2;

// console.log(alan(4,6));


//! 2.soru

// const kareAl = (x,y) =>(x+y)**2;
// const kupAl = (x,y) =>(x+y)**3;
// const usAl = (x,y) =>(x**2)+(y**2);

// console.log(usAl(3,5));


//! 3.soru

// const aYıl = +prompt("yıl değeriniz giriniz:");

// if(aYıl/4 && aYıl/100 || aYıl/400) {
//     console.log(`${aYıl} artık yıldır`);

// }else{
//     console.log(`${aYıl} artık yıl değildir`);
// }

