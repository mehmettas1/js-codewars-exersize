export const userValidation = (str) => {
    if (
        str.length >= 4 && str.length <= 25 &&(/[a-zA-Z]/).test(str.slice(0,1)) && (/^\w+$/).test(str)
    ) {
        return true
    } else {
        return false
    }

}

// rules

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.


// u_hello_word123