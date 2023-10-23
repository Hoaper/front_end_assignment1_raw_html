const countdown_body = document.querySelector('#countdown-body');
const time_input_hours = document.querySelector('#time_input_hours');
const time_input_mins = document.querySelector('#time_input_mins');
const time_btn = document.querySelector('#time_btn');
let future = NaN

function getCurrentTimePlus() {
  if (future) { 
    return future;
  }
  future = new Date();
  future.setHours(future.getHours() + parseInt(time_input_hours.value), future.getMinutes() + parseInt(time_input_mins.value))
  return future;
}

time_btn.addEventListener("click", () => setInterval(function() {
    let nowMS = new Date().getTime();
    
    futureTime = getCurrentTimePlus();
    let ration = futureTime - nowMS;

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
  }, 1000)
);