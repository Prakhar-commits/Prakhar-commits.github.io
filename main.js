const dynamicContent = document.getElementById("dynamic-text");
const phrases = ["Student...", "Psychology-enthusiast...", "Video-editor...", "<and I just love my Coffee...>"];
let phraseIndex =0;  
let letterIndex = 0;
const typingspeed = 100;
const erasingSpeed = 125;



function printletter(phrase){
    if(letterIndex == phrase.length){
        clearletter();
    }
    else if(letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function(){
            printletter(phrase);
        },typingspeed)
    }

}

function clearletter() {
    if(letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex = 0;
        printletter(phrases[phraseIndex])
    }
        else if(letterIndex > -1){
            let updatedphrase = "";
            for(let index = 0 ;index < letterIndex; index++) {
                updatedphrase += phrases[phraseIndex].charAt(index);

            }
            console.log(updatedphrase);
            dynamicContent.textContent = updatedphrase;
            letterIndex -= 1;
            setTimeout(clearletter, erasingSpeed);
        }
}

printletter(phrases[phraseIndex]);