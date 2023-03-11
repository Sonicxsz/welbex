const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const formatNumber = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
};


const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    clearInterval(intervalId); 

    const remainSec = seconds;

    const updateTimer = () => {
      const hours = Math.floor(remainSec / 3600);
      const minutes = Math.floor((remainSec % 3600) / 60);
      const seconds = remainSec % 60;
     
      const formattedTime = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
      timerEl.textContent = formattedTime;

      if (remainSec === 0) {
        clearInterval(intervalId);
      } else {
        remainSec--;
      }
    };
    
    updateTimer();

    intervalId = setInterval(updateTimer, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  animateTimer(Number(inputEl.value));
  inputEl.value = '';
});
