const secondHand = document.querySelector('.secHand');
const minuteHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

function setDate() {
  const time = new Date();

  const seconds = time.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds + ' ' + 'seconds');

  const minutes = time.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  console.log(minutes + ' ' + 'minutes');

  const hours = time.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hours + ' ' + 'hours');
}


setInterval(setDate, 1000);
