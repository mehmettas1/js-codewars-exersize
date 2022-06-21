//*Complete the solution so that it reverses the string passed into it.


function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);