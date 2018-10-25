function moveConsonants(word){
  var wordArray = word.split('');

  var lastCharMoved;

  for ( var i = 0 ; i < wordArray.length; i++){
    if(isConsonant(wordArray[0]) || (!lastCharMoved && isY(wordArray[0]))) {
      lastCharMoved = moveFirstCharToEnd(wordArray);
    } else if((wordArray[0] == "u") && (lastCharMoved === "q")) {
      moveFirstCharToEnd(wordArray);
    }
  }

  return wordArray.join("") + "ay" ;
}



// function LessThanThree(number){
//   if (number <= 3) {
//     return true;
//   }
//   return false;
// }
//
// function divisibleByTen(number){
//   if (number > 10) {
//    return "X" + divisibleByFive(number % 10)
//   }
//   return false;
// }
//
// function divisibleByFive(number){
//   if (number > 5 && number < 10) {
//    return "V" + addI(number % 5)
//   }
//   return false;
// }
//
// // working function for less than 3
// function addI(number){
//   var firstArray = [];
//    for( var i = 0 ; i < number; i++) {
//     if (LessThanThree(number)) {
//       firstArray.push("I");
//       console.log("firstarray", firstArray);
//     }
//   }
//   return  firstArray.join('');
// }

function convertNumber (number) {
  if (number <= 0) {
    return "There are no Roman Numeral equivalents for 0 or negative numbers"
  } else if (addI(number)) {
    return addI(number)
  } else if (divisibleByFive(number)) {
    return divisibleByFive(number)
  } else if (divisibleByTen(number)) {
    return divisibleByTen(number)
  }
}

function LessThanThree(number){
  if (number <= 3) {
    return true;
  }
  return false;
}

function remainderOfTen (remainder) {
  if (remainder < 5) {
    addI(remainder)
  } else if (remainder > 5) {
    divisiblebyFive(remainder)
  }
}

function divisibleByTen(number){
  if (number >= 10) {
   return "X" + divisibleByFive(number % 10)
  }
  return false;
}

function divisibleByFive(number){
  if (number >= 5 && number < 10) {
   return "V" + addI(number % 5)
  }
  return false;
}

// working function for less than 3
function addI(number){
  var firstArray = [];
   for( var i = 0 ; i < number; i++) {
    if (LessThanThree(number)) {
      firstArray.push("I");
      console.log("firstarray", firstArray);
    }
  }
  return  firstArray.join('');
}
