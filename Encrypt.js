
const secretNumber = 13;
let receivedNumber = 13;
const toBeEncrypted = "I hate PAINTING! 32 times#@";



let answer = [];
const primeOne = 29;
const modPrime = 1087;

let myNumEncrypt = function (num) {
    let newNum = Math.pow(primeOne, num);
    if (newNum === Infinity) {
        throw console.error("Cannot mod infinity");
    } else {
        newNum = newNum % modPrime;
    }
    return newNum;
}
console.log(myNumEncrypt(13));
let theirNumEncrypt = function (receivedNum, secretNum) {
    let workingNum = Math.pow(receivedNum, secretNum);
    if (workingNum === Infinity) {
        throw console.error("Cannot mod infinity");
    } else {
        workingNum = workingNum % modPrime;
    }
    return workingNum;
}


let passedNumber = myNumEncrypt(secretNumber);
if (receivedNumber === 0) {
    const randomNum = getRandomInt(250);
    console.log(`The other person's secret number is : ${randomNum}`);
    receivedNumber = myNumEncrypt(randomNum);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let encrypt = function (string, num) {
    const stringLength = string.length;
    if (stringLength === 0) {
        return;
    } else {
        encrypt(string.substr(1), num);
    }
    encode(string.slice(0, 1), num, primeOne, modPrime);
    /*Removes first element that has been decoded */
}
let encode = function (char, num, primeOne, primeTwo) {
    /*Y^X(mod P) = the number to mod by*/
    modNumber = modPrime;
    if (modNumber < 128) {
        /*Check that result is't too small to use */
        console.log(modNumber);
        throw console.error("result too small");
    }
    let charNumber = convert(char);
    charNumber += charNumber * (modNumber * getRandomInt(99999999));
    answer.push(charNumber);
    /*
    https://www.youtube.com/watch?v=rLiEA06Bcic 
    Y^X(mod P)
    Needs to return array with each char an element repped by a value that when modded fits the class
    */
}
let convert = function (char) {
    /*
    Function converts the character into the desired number by the previously agreed upon
    eg. A=1
    Could use ANSI character set
    */

    const dataTable = [];
    for (let i = 0; i < 127; i++) {
        dataTable.push(String.fromCharCode(i));
    }
    let charNumber = dataTable.indexOf(char);
    return charNumber;
}
encrypt(toBeEncrypted, receivedNumber);
console.log(answer);
// numberGen(247);