const msgEl = document.getElementById("msg");

let randomNumber = getRandomNumber();
console.log(randomNumber);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function onSpeak(e) {
  const msg = e.results[0][0].transcript;
  // console.log(msg);
  writeMessage(msg);
  checkNumber(msg);
}

function writeMessage(msg) {
  msgEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
  `;
}

function checkNumber(msg) {
  const num = +msg;
  console.log(num);

  if (Number.isNaN(num)) {
    msgEl.innerHTML = `<div>This is not a valid number.</div>`;
    return;
  }

  if (num < 1 || num > 100) {
    msgEl.innerHTML += `<div>Number must be between 1 and 100.</div>`;
    return;
  }

  if (num === randomNumber) {
    document.body.innerHTML = `
      <h2>Congrats! You guessed the nuumber <br/> <br/> It is: ${num}</h2>
      <button class="play-again" id="play-again">Play Again</button>
    `;
  } else if (num > randomNumber) {
    msgEl.innerHTML += `<div>Go Lower...</div>`;
  } else {
    msgEl.innerHTML += `<div>Go Higher...</div>`;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// console.log(recognition);
recognition.addEventListener("result", onSpeak);

recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener("click", (e) => {
  if (e.target.id === "play-again") {
    window.location.reload();
  }
});
