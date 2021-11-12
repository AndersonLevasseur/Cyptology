const messageArr = [ 4002322590912,  3747170674345,
    4666190390265,  6860013797286,
    9827845064492,   285748500240,
   11555570960988,  1280723296480,
    1653255964600,  2404198357617,
    1997074140672,  1139015665359,
    2554585634844,  3219404118918,
    5791479948918,  5303417545692,
    4179604636272,  2450628911526,
    4567205969040,   228261651920,
    1337848642272, 10729746449966,
     277562032588,  4647672040847,
    6789157329448,  1111135400192,
    1156858863881 ];
const secretNumber = 511;
let receivedNumber = 511;


const primeOne = 29;
const modPrime = 1087;
let finalString = "";


let theirNumDecrypt = function (receivedNum, secretNum) {
    let workingNum = Math.pow(receivedNum, secretNum);
    if (workingNum === Infinity) {
        throw console.error("Cannot mod infinity");
    } else {
        workingNum = workingNum % modPrime;
    }
    return workingNum;
}


let decrypt = function(arr, myNum, receivedNum) {
    if (arr.length === 0) {
        return
    } else {
        let arrNum = arr.pop();
        decode(arrNum, modPrime);
        decrypt(arr, myNum, receivedNum);
    }
    return finalString;
}

let decode = function(arrNum, num) {
    const charNum = arrNum % num;
    finalString += convert(charNum);

    
}

let convert = function(arrNum) {
    let charNum = arrNum % modPrime;
    const dataTable = [];
    for (let i = 0; i < 127; i++) {
        dataTable.push(String.fromCharCode(i));
    }
    char = dataTable[charNum];
    return char;
}
console.log(decrypt(messageArr, secretNumber, receivedNumber));