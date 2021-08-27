class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start)
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  }

  pause = () => {
    clearInterval(this.interval);
  }

  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;
  }
}

const duration = document.querySelector('#duration');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');

const timer = new Timer(duration, start, pause);
