import random from "./random.js";
import ocultarModal from "./ocultarModal.js";

var player1; //true o false
var nuevoJuego = false; //Primer juego

const sortearPartida = document.querySelector("#ranGame");
const comenzar = document.querySelector("#start");

sortearPartida.onclick = () => {
    player1 = random(nuevoJuego);
}

comenzar.onclick = () => {
    ocultarModal();
}

window.addEventListener("click",
    function(e){
        let modal = this.document.querySelectorAll(".modal")[0];
        let modal_container = this.document.querySelectorAll(".modal-container")[0];

        if(e.target === modal_container){
            modal.classList.toggle("modal-close");
            setTimeout(
                function(){
                    modal_container.style.opacity = "0";
                    modal_container.style.visibility = "hidden";    
                },
                1000)
        }
    }
)