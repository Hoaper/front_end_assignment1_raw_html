const countDownDate = new Date(2023, 10, 18).getTime();
const countdown_body = document.querySelector('#countdown-body');

setInterval(function() {

  let now = new Date().getTime();
  let ration = countDownDate - now;

  let days = Math.floor(ration / (1000 * 60 * 60 * 24));
  let hours = Math.floor((ration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((ration % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ration % (1000 * 60)) / 1000);

  countdown_body.innerHTML = "УСПЕЙ ПОМОЧЬ! " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (ration < 0) {
    clearInterval(x);
    countdown_body.innerHTML = "EXPIRED";
  }
}, 1000);