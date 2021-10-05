// Javascript-fil

//Kontaktskjema her kanskje?


function visHistorie() {
    var x = document.getElementById("historie");
    var y = document.getElementById("historieKnapp");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerText = "X";
    } else {
      x.style.display = "none";
      y.innerText = "Jeg vil vite mer!";
    }
  }