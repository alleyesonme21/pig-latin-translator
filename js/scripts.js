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
  let sentenceArray = sentence.split(''); //if sentence is "song" expected output should be ["s", "o","n", "g"]
  console.log(sentenceArray);
  if(checkIfVowel(sentenceArray[1])) { //if second letter is a vowel do this one
    if(sentenceArray[1] === "u" && sentenceArray[0] === "q") {
      return sentenceArray.slice(2).join('') + sentenceArray.slice(0,2).join('') + "ay";
    }
    else {
      return sentenceArray.slice(1).join('') + sentenceArray.slice(0,1).join('') + "ay";
    }
  }
  else if (checkIfVowel(sentenceArray[2])) { // if third letter is a vowel do this one
    if(sentenceArray[2] === "u" && sentenceArray[1] === "q") {
      return sentenceArray.slice(3).join('') + sentenceArray.slice(0,3).join('') + "ay";
    }
    else {
      return sentenceArray.slice(2).join('') + sentenceArray.slice(0, 2).join('') + "ay";
    }
  }
  else if (checkIfVowel(sentenceArray[3])) { // squeal= ealsquay
    if(sentenceArray[3] === "u" && sentenceArray[2] === "q"){
      return sentenceArray.slice(4).join('') + sentenceArray.slice(0,4).join('') + "ay";
    }
    else {
      return sentenceArray.slice(3).join('') + sentenceArray.slice(0,3).join('') + "ay";
    }
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