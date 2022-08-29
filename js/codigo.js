const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let mokepones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputPiplup
let inputSandile
let inputLitten
let inputVolcanion
let inputSwampter
let inputHeatmor
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = "../assets/mokemap.png "
let  alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20 
const anchoMaximoDelMapa = 550

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa -20 
    
}

alturaQueBuscamos = anchoDelMapa * 600 / 800 
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vida,fotoMapa, x = 10 , y = 10 ) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40 
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
            )
    }
}

let piplup = new Mokepon ("Piplup", "../assets/piplup.png" , 5, "../assets/piplup.png")

let sandile = new Mokepon("Sandile", "../assets/sandile.png", 5 , "../assets/sandile.png")

let litten = new Mokepon("Litten", "../assets/litten.png", 5, "../assets/litten.png")

let volcanion = new Mokepon ("Volcanion", "../assets/volcanion.png", 5, "../assets/volcanion.png")

let swampter = new Mokepon ("Swampter", "../assets/swampert.png", 5, "../assets/swampert.png")

let heatmor = new Mokepon ("heatmor", "../assets/heatmor.png", 5, "../assets/heatmor.png") 


/// enemigos 

let piplupEnemigo = new Mokepon ("Piplup", "../assets/piplup.png" , 5, "../assets/piplup.png")

let sandileEnemigo = new Mokepon("Sandile", "../assets/sandile.png", 5 , "../assets/sandile.png")

let littenEnemigo = new Mokepon("Litten", "../assets/litten.png", 5, "../assets/litten.png" )

let volcanionEnemigo = new Mokepon ("Volcanion", "../assets/volcanion.png", 5, "../assets/volcanion.png")

let swampterEnemigo = new Mokepon ("Swampter", "../assets/swampert.png", 5, "../assets/swampert.png")

let heatmorEnemigo = new Mokepon ("heatmor", "../assets/heatmor.png", 5, "../assets/heatmor.png")


piplup.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

piplupEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

sandile.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)
sandileEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)
litten.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)
littenEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)
volcanion.ataques.push(
    { nombre: '💧', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-tierra' },
)

volcanionEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-tierra' },
)

swampter.ataques.push(
    { nombre: '💧', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-tierra' },
)

swampterEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-tierra' },
)

heatmor.ataques.push(
    { nombre: '🌱', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '🌱', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

heatmorEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '🌱', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(piplup,sandile,litten,volcanion,swampter,heatmor)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

   inputPiplup = document.getElementById("Piplup")
   inputLitten = document.getElementById("Litten")
   inputSandile = document.getElementById("Sandile")
   inputVolcanion = document.getElementById("Volcanion")
   inputSwampter = document.getElementById("Swampter")
   inputHeatmor = document.getElementById("Heatmor")


    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    
    

    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    
    //sectionSeleccionarAtaque.style.display = 'flex'
   
    
   
    
     if (inputPiplup.checked) {
        spanMascotaJugador.innerHTML = inputPiplup.id
        mascotaJugador = inputPiplup.id 
    } else if (inputLitten.checked) {
        spanMascotaJugador.innerHTML = inputLitten.id
        mascotaJugador = inputLitten.id
       
    } else if (inputSandile.checked) {
        spanMascotaJugador.innerHTML = inputSandile.id
        mascotaJugador = inputSandile.id
    } else if (inputVolcanion.checked) {
        spanMascotaJugador.innerHTML = inputVolcanion.id 
        mascotaJugador = inputVolcanion.id
    } else if (inputSwampter.checked) {
        spanMascotaJugador.innerHTML = inputSwampter.id
        mascotaJugador = inputSwampter.id
    } else if (inputHeatmor.checked){
        spanMascotaJugador.innerHTML = inputHeatmor.id
        mascotaJugador = inputHeatmor.id
    }else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    inciarMapa()
    
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
        
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'   
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    

}

function seleccionarMascotaEnemigo(enemigo) {
    //let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()

   
}


function ataqueAleatorioEnemigo() {
   console.log("ataque enemigo " , ataquesMokeponEnemigo);
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
            
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal


    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas(){

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage (
        mapaBackground,
        0 ,
        0 ,
        mapa.height,
        mapa.width
    )
    mascotaJugadorObjeto.pintarMokepon()
    piplupEnemigo.pintarMokepon()
    sandileEnemigo.pintarMokepon()
    littenEnemigo.pintarMokepon()
    volcanionEnemigo.pintarMokepon()
    swampterEnemigo.pintarMokepon()
    heatmorEnemigo.pintarMokepon()

    if (mascotaJugadorObjeto.velocidadX !== 0  || mascotaJugadorObjeto.velocidadY !== 0 ) {
        revisarColision(piplupEnemigo)
        revisarColision(sandileEnemigo)
        revisarColision(littenEnemigo)
        revisarColision(volcanionEnemigo)
        revisarColision(swampterEnemigo)
        revisarColision(heatmorEnemigo)
    }
    }
    
    function moverDerecha() {
        mascotaJugadorObjeto.velocidadX = 5 

    }

    function moverIzquierda() {
        mascotaJugadorObjeto.velocidadX = -5 
        
    }
    function moverAbajo() {
        mascotaJugadorObjeto.velocidadY = +5 
        
    }
    function moverArriba() {
        mascotaJugadorObjeto.velocidadY = -5
        
    }

    function detenerMovimiento (){
        
        mascotaJugadorObjeto.velocidadX = 0
        mascotaJugadorObjeto.velocidadY = 0
    }

    function sePreionoUnaTecla(event) {
        switch(event.key){
            case "ArrowUp":
                moverArriba()
                break;
            case "w":
                moverArriba()
                break;
            case "ArrowDown":
                moverAbajo()
                break;
            case "s":
                 moverAbajo()
                break;
            case "ArrowLeft":
                moverIzquierda()
                break;
            case "a":
                moverIzquierda()
                break;
            case "ArrowRight":
                moverDerecha()
                break;
            case "d":
                moverDerecha()
                break;
            default:
                break;

        }
    }

function inciarMapa() {
    //mapa.width = 500  mapa.height = 500
    mascotaJugadorObjeto =  obetenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", sePreionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obetenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }
}

function revisarColision (enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 
    
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x 

    if(
        abajoMascota < arribaEnemigo||
        arribaMascota > abajoEnemigo||
        derechaMascota < izquierdaEnemigo||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
  //  alert("Hay colision " + enemigo.nombre)
}
window.addEventListener('load', iniciarJuego)