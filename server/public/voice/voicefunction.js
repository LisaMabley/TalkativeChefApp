
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var commands = [ "next step", " next step", "next step ", "what's the next step", " what's the next step", "what's the next step ",
"first step", " first step", "first step ", "first first", "firs step", " firs step", "firs step ", "next", " next", "next ",
"first", " first", "first ", "step", " step", "step ", "firs", " firs", "firs ", "nex", " nex", "nex ", "next next", " next next",
"next next "];
var grammar = '#JSGF V1.0; grammar commands; public <next> = ' + commands.join(' | ') + ' ;';

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var recognizing = false;
//var hints = document.querySelector('.hints');

//var commands= '';
//commands.forEach(function(v, i, a){
  //console.log(v, i);
  //commandHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
//});
//hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try '+ colorHTML + '.';

var colorHTML= '';
commands.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
//hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try '+ colorHTML + '.';

speech = function(){
  responsiveVoice.speak("Let me know when you're ready.");
  recognizing = true;
  recognition.start();
  console.log('Ready to receive a command.');

}

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The [last] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object

  var last = event.results.length - 1;
  var command = event.results[last][0].transcript;

  //this is where we will call on the app to read the recipe
  // while(command.toLowerCase() != v.toLowerCase()){
  //   if(command.toLowerCase() != v.toLowerCase()){}
  //     console.log(command)
  //     }
  //   }
  // console.log("Next Step");
  //         break;
  //       }
  commands.forEach(function(v, i, a){
    // command.
    // //s/  +/ /g;
    if(command.toLowerCase() == v.toLowerCase()){
      responsiveVoice.speak("Heat oven to 275 degrees Fahrenheit, then toast pecans and walnuts");
      recognizing = false;
      recognition.stop();}
      else{
      console.log(command);
      return;
    }
});
//check that what we said is one of the recognized commands

//  diagnostic.textContent = 'Result received: ' + color + '.';
//  bg.style.backgroundColor = color;
  //console.log('Confidence: ' + event.results[0][0].confidence);
  //console.log(command);
}


recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that message.";
  //reset();
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  //recognition.stop();
}
