const btnStart = document.querySelector(".btn--start");
const btnStop = document.querySelector(".btn--stop");
const btnReset = document.querySelector(".btn--reset");

const time = document.querySelector(".time");

let intervalId;

let counter = 0;

function startTime() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    // counter += Number((0.1).toFixed(10));
    counter += 0.01;
    time.innerHTML = counter.toFixed(2);
    console.log(counter.toFixed(2));
  }, 10);
}

function stopTime() {
  clearInterval(intervalId);
}

function resetTime() {
  clearInterval(intervalId);
  counter = 0;
  time.innerHTML = counter;
}

btnStart.addEventListener("click", () => {
  startTime();
});

btnStop.addEventListener("click", () => {
  stopTime();
});

btnReset.addEventListener("click", () => {
  resetTime();
});
