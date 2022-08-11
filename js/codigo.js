let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego (){
    let sectionSelectAtaque = document.getElementById("select-attack")
    sectionSelectAtaque.style.display = "none" 

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonPets = document.getElementById("boton-pets");
    botonPets.addEventListener("click", seleccionarMascotaJugador)

    let botonWater =document.getElementById("boton-water") 
    botonWater.addEventListener("click", ataqueAgua)
    
    let botonFire   = document.getElementById("boton-fire")
   botonFire.addEventListener("click" ,ataqueFuego)

    let botonSand = document.getElementById("boton-sand")
    botonSand.addEventListener("click" , ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener ("click" , reiniciarJuego)

}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('select-pet')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSelectAtaque = document.getElementById("select-attack")
    sectionSelectAtaque.style.display = "block"

    

    let inputPiplup = document.getElementById("Piplup")
    let inputSandile = document.getElementById("Sandile")
    let inputLitten = document.getElementById("Litten")
    let inputVolcanion = document.getElementById("Volcanion")
    let inputSwampter = document.getElementById("Swampter")
    let inputHeatmor = document.getElementById("Heatmor")
    let spanMascotajugador = document.getElementById("mascota-jugador")


    if (inputPiplup.checked){
        spanMascotajugador.innerHTML = "Piplup"
   } else if  (inputSandile.checked) {
        spanMascotajugador.innerHTML = "Sandile"
   } else if (inputLitten.checked){
    spanMascotajugador.innerHTML = "Litten"
   } else if (inputVolcanion.checked) {
    spanMascotajugador.innerHTML = "Volcanion"

   }else if (inputSwampter.checked) {
    spanMascotajugador.innerHTML = "Swampter"
   } else if (inputHeatmor.checked) {
    spanMascotajugador.innerHTML = "heatmor"
   } else {
    spanMascotajugador.innerHTML = "NINGUNO"
   }

   seleccionarMascotaEnemigo ()

}

function seleccionarMascotaEnemigo (){
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Piplup"
    }else if (mascotaAleatorio==2){
        spanMascotaEnemigo.innerHTML = "Sandile"
    }else if (mascotaAleatorio==3) {
        spanMascotaEnemigo.innerHTML = "Litten"
    }else if (mascotaAleatorio==4){
        spanMascotaEnemigo.innerHTML = "Volcanion "
    }else if (mascotaAleatorio==5){
        spanMascotaEnemigo.innerHTML = "Swampter"
    } else {
        spanMascotaEnemigo.innerHTML = "Heatmor"
    }
    
}



function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}


    
function ataqueAleatorioEnemigo(){
    ataqueAleatorio = azar(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"

    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"

    } else {
        ataqueEnemigo ="TIERRA"
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById ("vidas-jugador")
    let spanVidasEnemigo = document.getElementById ("vidas-enemigo")

    if  (ataqueEnemigo == ataqueJugador) {
        crearMensaje ("empate") 
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("ganaste") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }else if (ataqueJugador == "TIERRA"&& ataqueEnemigo == "AGUA"){
        crearMensaje("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo        
    }else {
        crearMensaje("perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }
 
        revisarVidas()
 
    
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        //GANAMOS
        crearMensajeFinal("GANASTE EL JUEGO")
    } else if (vidasJugador== 0) {
        //PERDISTE
        crearMensajeFinal("PERDISTE, INTENTALO DE NUEVO")
    } 
}

function crearMensaje(resultado) {
    let sectionmessages = document.getElementById("messages") 
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + " , la mascota del enemigo con " + ataqueEnemigo + "  " +  resultado + " 😁🎉"
    sectionmessages.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionmessages = document.getElementById("messages") 
    let parrafo2 = document.createElement("p")
    parrafo2.innerHTML = resultadoFinal
    sectionmessages.appendChild(parrafo2)

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

    let botonPets = document.getElementById("boton-pets");
    botonPets.disabled = true

    let botonWater =document.getElementById("boton-water") 
    botonWater.disabled = true
    
    let botonFire   = document.getElementById("boton-fire")
   botonFire.disabled = true

    let botonSand = document.getElementById("boton-sand")
    botonSand.disabled = true

    
}
function reiniciarJuego() {
    location.reload()
}

    function azar(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) }

window.addEventListener("load", iniciarJuego)
