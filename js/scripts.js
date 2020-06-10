function lettersOnly(sentence) {
  const letters = /^[A-Za-z]+$/;
  if(sentence.match(letters)) {
    return true;
  }
  else {
    return false;
  }
}

function checkIfFirstLetterIsVowel(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  let sentenceArray = sentence.split('');
  for(let i = 0; i < vowels.length; i++ ) {
    if (sentenceArray[0] === vowels[i]){
      return true;
    }
  }
  return false;
}

function toPigLatin(sentence) {
  if (checkIfFirstLetterIsVowel(sentence)) {
    return sentence + "way";
  }
  else { 
    return sentence.slice(1) + sentence.slice(0,1) + "ay";
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