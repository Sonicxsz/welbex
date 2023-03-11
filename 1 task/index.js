const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Функция для форматирования числа с ведущим нулем
const formatNumber = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
};

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    clearInterval(intervalId); // Очищаем предыдущий интервал, если он есть

    let remainingSeconds = seconds;

    const updateTimer = () => {
      const hours = Math.floor(remainingSeconds / 3600);
      remainingSeconds %= 3600;
      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;

      const formattedTime = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
      timerEl.textContent = formattedTime;

      if (remainingSeconds === 0) {
        clearInterval(intervalId);
      } else {
        remainingSeconds--;
      }
    };

    updateTimer(); // Отображаем таймер сразу после запуска

    intervalId = setInterval(updateTimer, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
