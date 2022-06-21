//*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//* The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
// BINARYFUNDAMENTALS


//! solution of the problem

function addBinary(a,b) {
    let x = a+b;
    let y = [],z =[],i=0;
    let statu = false;

    while(statu!= true){
        if(i==0){
            y[i] = parseInt(x/2);
            z[i] = parseInt(x%2);
        }else {
            y[i] = parseInt(y[i-1]/2);
            z[i] = parseInt(y[i-1]%2);
        }

        if(y[i] ==1){
            statu =true;
        }

        i++;
    }
      let binary = "";
      for (let j =y.length;j>=0;j--){
        if(j==y.length){
            binary +=y[y.length-1];
        }else {
            binary += z[j]; 
        }
      }
      return binary
}


 //! solution of the codewars

 function addBinary(a,b){
    return (a+b).toString(2)
  }