const fotos = [

    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",

];

function iniciarHomenagem(){

    let nome =
    document.getElementById("nomePai").value;

    if(nome.trim() === ""){

        alert("Digite seu nome");

        return;
    }

    document.querySelector(".container")
    .style.display = "none";

    explosao();

    setTimeout(() => {

        iniciarSlideshow();

    }, 1500);
}

function explosao(){

    const duracao = 3000;

    const fim =
    Date.now() + duracao;

    const intervalo =
    setInterval(() => {

        if(Date.now() > fim){

            clearInterval(intervalo);

            return;
        }

        confetti({

            particleCount:5,

            angle:60,

            spread:70,

            origin:{x:0}

        });

        confetti({

            particleCount:5,

            angle:120,

            spread:70,

            origin:{x:1}

        });

    },200);
}

function iniciarSlideshow(){

    const slide =
    document.getElementById("slideshow");

    slide.style.display = "block";

    let indice = 0;

    const timer =
    setInterval(() => {

        if(indice >= fotos.length){

            clearInterval(timer);

            slide.style.display = "none";

            document
            .getElementById("carta")
            .style.display = "block";

            return;
        }

        let img =
        document.createElement("img");

        img.src = fotos[indice];

        img.className = "foto";

        slide.appendChild(img);

        setTimeout(() => {

            img.remove();

        },5000);

        indice++;

    },4500);
}