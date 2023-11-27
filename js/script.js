window.addEventListener("scroll", () =>{
    const verticalScroll = window.scrollY;
    let header = document.querySelector("header")
    let btn = document.querySelector("#getStarted")

    if(verticalScroll > 380){
        header.style.backgroundColor = "white"
        btn.style.backgroundColor = "green"
    } else{
        header.style.backgroundColor = "#ffc017"
        btn.style.backgroundColor = "black"
    }
})

function MRandom() {
    let m = document.querySelectorAll("g");
    let randNumb = Math.floor(Math.random() * m.length);

    let hiddenM = m[randNumb];
    hiddenM.classList.add('randoM');

    setTimeout(() => {
      hiddenM.classList.remove('randoM');
    }, 1000);
  }

  setInterval(MRandom, 30);
