//typewriter
new TypeIt(".multipleStrings", {
    strings: ["let aboutMe = {", "name: 'Kimberly',","from: 'Hong Kong',","current: 'Software engineering student'","};","console.log('Hello World!');"],
    speed: 80,
    waitUntilVisible: true,
    loop: true,
    loopDelay: 6000
  }).go();

//Top button
const topButton = document.querySelector("#btnTop");

window.onscroll = function(){
  if (document.documentElement.scrollTop > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
topButton.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

//scroll active
const sr = ScrollReveal({
  distance: '100px',
  duration: 2000,
  reset: true
});
sr.reveal('.about-container',{origin: 'top',delay: 300})
sr.reveal('.html',{origin: 'left'});
sr.reveal('.css',{origin: 'left'});
sr.reveal('.javascript',{origin: 'left'});
sr.reveal('.go',{origin: 'left'});
sr.reveal('.work-item',{origin: 'top', delay: 300, interval: 200})
sr.reveal('.image-container'),{origin:'top', interval: 100}

//Chat box
function showChatbox() {
  var chat = document.querySelector(".chatbox");
  if (chat.style.display == "block"){
    chat.style.display = "none"
  } else {
    chat.style.display = "block"
  }
}
function showContact() {
  var secondTalk = document.querySelector(".talk2");
  if (secondTalk.style.display == "block"){
    secondTalk.style.display = "none"
  } else {
    secondTalk.style.display = "block"
  }
}
function showPhone() {
  var phone = document.querySelector(".talk3");
  if (phone.style.display == "block"){
    phone.style.display = "none"
  } else {
    phone.style.display = "block"
  }
}