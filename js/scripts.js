function lettersOnly(sentence) {
  const letters = /^[A-Za-z]+$/;
  if(sentence.match(letters)) {
    return true;
  }
  else {
    return false;
  }
}

function checkIfVowel(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  for(let i = 0; i < vowels.length; i++ ) {
    if (letter === vowels[i]) {
      return true;
    }
  }
  return false;
}

function consonantChange(sentence) {
  if(checkIfVowel(sentence.slice(1,2))) {
    return sentence.slice(1) + sentence.slice(0,1) + "ay";
  }
  else if (checkIfVowel(sentence.slice(2,3))) {
    return sentence.slice(2) + sentence.slice(0, 2) + "ay";
  }
  else {
    return sentence;
  }
}

function toPigLatin(sentence) {
  if (checkIfVowel(sentence.slice(0,1))) {
    return sentence + "way";
  }
  else { 
    return consonantChange(sentence);
  }
  
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const userInput = $("#sentence").val();
    // const consonant = ["b","c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"]

    let pigLatinSentence = "";
    if(lettersOnly(userInput)) {
      pigLatinSentence = toPigLatin(userInput);
    }
    else {
      pigLatinSentence = userInput;
    } 
    $("#outPut").text(pigLatinSentence);
    $("#outPut").show();
  });
});