const msgEl = document.getElementById("msg");

let randomNumber = getRandomNumber();

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function onSpeak(e) {
  console.log(e);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// console.log(recognition);
recognition.addEventListener("result", onSpeak);
