function functionm() {
  var money = document.getElementById("money");
  if (money.style.display === "none") {
    money.style.display = "flex";
  } else {
    alert("vous avez déjà donné de l'argent 💶");
  }
}

function functionc() {
  var coeur = document.getElementById("coeur");
  if (coeur.style.display === "none") {
    coeur.style.display = "flex";
  } else {
    alert("vous avez déjà donné de l'amour 😊");
  }
}

function functiont() {
  var time = document.getElementById("time");
  if (time.style.display === "none") {
    time.style.display = "flex";

  } else {
    alert("vous avez déjà donné du temps 😏");
  }
}

/*window.addEventListener('scroll', () => {
	alert(window.scollY);
})

var vertical=-1;
setInterval(function() {
 if (window.scrollY != vertical) {
   vertical=window.scrollY;
   if(vertical >10){
   	var time = document.getElementById("time");
   	time.style.display = "block"
   	alert(vertical);
   }
 }
}, 500);*/
