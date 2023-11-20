// let tas1 = String(123231312315)
// console.log( tas );
// console.log( tas1 );


// let meta = "bu bir denemedir";

// let two = meta.split("").reverse().join("")


// let as = [1,2,3,4,5,8,2,4]

// let asas =as.slice().sort((a, b) => parseInt(b) - parseInt(a)).join("")

// console.log(asas);

//////////**************////////////****** */ */
//   function flickSwitch(arr) {
//     let shouldReturnTrue = true;
//     let result = [];
  
//     for (let item of arr) {
//       if (item === "flick") {
//         shouldReturnTrue = !shouldReturnTrue;
//       }
//       result.push(shouldReturnTrue);
//     }
  
//     return result;
//   }



// console.log(flickSwitch(  ['codewars', 'flick', 'code', 'wars']))
  

// function detectOperator(a) {
//     var op = "no info";
    
//     var operatorCodes = {
//       '039': 'Golden Telecom',
//       '050': 'MTS',
//       '063': 'Life:)',
//       '066': 'MTS',
//       '067': 'Kyivstar',
//       '068': 'Beeline',
//       '093': 'Life:)',
//       '095': 'MTS',
//       '096': 'Kyivstar',
//       '097': 'Kyivstar',
//       '098': 'Kyivstar',
//       '099': 'MTS Test'
//     };
  
//     var code = a.substring(1, 4);
//     if (operatorCodes.hasOwnProperty(code)) {
//       op = operatorCodes[code];
//     }
  
//     return op;
//   }
  

//   console.log(detectOperator('805067123456')); // Çıktı: "Kyivstar"
// console.log(detectOperator('80991234567')); // Çıktı: "MTS"
// console.log(detectOperator('80123456789')); // Çıktı: "no info"
