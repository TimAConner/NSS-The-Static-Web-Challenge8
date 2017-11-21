let happyNumbers = [];
let amntDesired = 143; //Output amntDesired happy numbers

let originalInteger = 3;//Integer that is being tested for happy/unhappiness.
let curTestingInteger = originalInteger;//Current square of sum of orignalInteger that the program is running through.


function findHappyNumbers(){
    let numberSequence = [];//The history of previous numbers checked

    while((happyNumbers.length+1) < amntDesired){
        let sum = squareSumDigitsofNumber(curTestingInteger);
        curTestingInteger = sum;
        numberSequence.push(curTestingInteger);//Add to number history

        if(sum === 1){//A happy number
            happyNumbers.push(originalInteger);
            document.getElementById("output").innerHTML += "<span>" + originalInteger + " </span>";
            incrementTestingInteger();
            resetSequence();
        } else if (checkSequenceHappy(numberSequence)){ //An unhappy number (the sequence has repeated)S
            resetSequence();
            incrementTestingInteger();
        }
    }
    console.log(happyNumbers);
}

function incrementTestingInteger(){
    originalInteger ++;
    curTestingInteger = originalInteger;
}

function resetSequence(){
    numberSequence = [];//Reset history
}

function squareSumDigitsofNumber(number){//replace the number by the sum of the squares of its digits
    let digits = number.toString().split("");
    let sum = 0;
    for(let x = 0; x < digits.length; x++){
        let square = digits[x]*digits[x];
        sum += +square;
    }
    return sum;
}

function checkSequenceHappy(sequence){
    let unhappySequence = [4, 16];//Sequence that repeats when the number is unhappy
    if((sequence[sequence.length-1] === unhappySequence[1]) && (sequence[sequence.length-2] === unhappySequence[0])) { //Check if last 2 element in sequence are equally to the unhappy sequence
        return true;
    }
    return false;
}


findHappyNumbers();