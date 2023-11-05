const msg_btn = document.querySelector('#message_btn');

msg_btn.addEventListener('click', (e) => {
   let textarea_value = document.getElementById("exampleFormControlTextarea1").value;
   if (textarea_value.length >= 5) alert("THANKS FOR FEED BACK!")
})
$(function () {
    $("#tooltip-icon").hover(
       function () {
          $("#tooltip-text").fadeIn();
       },
       function () {
          $("#tooltip-text").fadeOut();
       }
    );
 });