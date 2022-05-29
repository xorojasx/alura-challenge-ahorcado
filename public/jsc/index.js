var logo = document.getElementById("logo");
var tablero = document.getElementById("tablero");
var botones = document.getElementById("botones");
var btnStart = document.getElementById("btnStart");
var resetear = document.getElementById("first");
var cancelar = document.getElementById("fourth");
var divJuego = document.getElementById("juego");
var divGuiones = document.getElementById("guiones");
var ingresoLetras = document.getElementById("ing-letras");
var letrasIngresadas = document.getElementById("lerasIngresadas");
var cantIntentos = document.getElementById("cnt-intentos");
var muertes = 0;
var vidas = 11;
var arrayPalabras = ['ABAJO','ACCUMSAN','ACTIVO','ADOLESCENTES','ADORNAN','ADORNAR','AENEAN','AGARRARLAS','AGRADA','AGRADABLE','AHORA','AL','ALGO','ALGUN','ALGUNOS','ALIQUET','ALJABA','ALMACENAMIENTO','AMADA','AMET','AMOR','AMORTIGUAR','ANTE','ANTES','APROVECHAR','ARCO','ASEGURAR','ASEQUIBLES','AT','AUCTOR','AUGUE','AUTOR','BEBAMOS','BEBE','BEBER','BIENES','CADA','CAMA','CAMARA','CAPA','CASAS','CASINO','CLARO','COCINA','COMO','COMPENSACION','COMPOSICION','CON','CONDIMENTUM','CONGUE','CONSECUENCIA','CONSECUENCIAS','CONTRATAR','CONVALLIS','CONVENIENCIA','CONVIENE','CORRECTO','CRAS','CRECERAN','CUALQUIER','CUALQUIERA','CUANTO','CUELLO','CURABITUR','CURSO','DE','DEBE','DECORAR','DEL','DESARROLLARON','DESDE','DESGRACIA','DESHONRA','DETENERSE','DICHO','DICTUM','DIGNISSIM','DIJE','DIJERON','DIOSES','DISPONIBLE','DIVERSOS','DOLOR','DUI','DUIS','DURO','ECONOMIA','EGET','EJECUTAR','EL','EL','ELEIFEND','ELIT','EMBARAZADA','EMBARAZADAS','EMPEZAR','EN','ENEAS','ENFERMEDADES','ENIM','ENTERO','ENTORNO','ENTRADA','EROS','ES','ESA','ESCENARIO','ESO','EST','ESTA','ESTAR','ESTE','ESTE','ESTO','ET','EU','EUISMOD','EXCEPTO','EXTREMOS','FACIL','FACTORES','FACTURAS','FALDA','FALTA','FANATICOS','FAUCIBUS','FELIS','FERMENTACION','FEUGIAT','FIN','FINAL','FINANCIACION','FLECHAS','FREESTYLE','FRINGILLA','FRONTERAS','FUE','FUSCE','GARGANTA','GATO','GOLOSINAS','GRANDE','GRANDES','GRATIS','GRATUITA','HA','HABIA','HALAGADOR','HASTA','HAY','HECHA','HENDRERIT','HONESTO','HORA','IACULIS','ID','IMPORTA','IMPORTANTE','IMPORTANTES','IN','INCLUSO','INFERIOR','INMOBILIARIA','INMUNOLOGICO','INSTALACIONES','INTEGER','INVERTIR','JUGADORES','JUSTO','LA','LACINIA','LACUS','LAGO','LAOREET','LAS','LAZOS','LE','LECHO','LECTUS','LEON','LIBERO','LIBERTAD','LIBRES','LLEVA','LO','LOREM','LOS','LUGAR','MAMAS','MANERA','MAQUILLAJE','MARGEN','MAS','MASA','MASAJEA','MASIVAS','MASSA','MAURIS','MAYORIA','MECENAS','MEJORAR','MENOS','MESA','MI','MIEDO','MIEMBROS','MIS','MISMO','MOLESTIE','MOMENTO','MONTAÑAS','MUCHA','MUCHO','MUJER','MUY','NACERA','NACERAN','NADA','NECESIDAD','NECESIDADES','NECESITA','NECESITAMOS','NECESITAN','NECESITE','NECESITEN','NECESITO','NEQUE','NI','NIBH','NINGUNA','NIÑOS','NISI','NISL','NO','NON','NORMAL','NULLA','O','OA','OBJETIVOS','ODIAR','ODIO','OFICINA','OLIMPIADAS','ORCI','ORCO','ORCOS','PALA','PARA','PARAR','PARTE','PARTIR','PELICULA','PELLENTESQUE','PELOTA','PEQUES','PERFECTO','PERO','PERSONA','PHARETRA','PHASELLUS','PILDORA','PLACERAT','PLANIFICACION','PLATAFORMA','PLATANOS','POBREZA','POCO','POR','PRAESENT','PRINCIPAL','PROMEDIO','PROPAGANDA','PROTEINAS','PUEDE','PUEDEN','PUERTA','PUES','PUESTO','PURO','PUROS','PURUS','QUAM','QUE','QUIEN','QUIEN','QUIERE','QUIS','RAICES','RATON','REIR','RHONCUS','RIDICULO','RISA','RUTRUM','SABIO','SABIOS','SABOR','SALSA','SALUD','SAPIEN','SCELERISQUE','SE','SEA','SED','SELECCIONA','SEM','SEMANA','SENTARSE','SER','SI','SI','SIEMPRE','SIN','SISTEMA','SIT','SOFA','SOLA','SOLLICITUDIN','SOLO','SOLO','SON','SONREIR','SUAVE','SUPUESTO','SUS','TAL','TAMBIEN','TAMPOCO','TAN','TECLADO','TEMPOR','TEMPUS','TENGA','TIEMPO','TIENE','TIENES','TIERRA','TINCIDUNT','TIRO','TOMA','TORTOR','TORTURADOR','TRISTE','TRISTEZA','UE','ULLAMCORPER','ULTRICIES','UN','UNO','URNA','USAR','UT','VALLE','VARIADOS','VARIAN','VARIOS','VARIUS','VECES','VEHICULA','VEHICULOS','VEL','VENENOSO','VENGATIVA','VENGATIVO','VENGATIVOS','VER','VERGONZOSOS','VERSATIL','VESTIBULO','VESTIBULUM','VEZ','VIAJE','VIDA','VITAE','VIVIENDA','VIVIR','VIVO','VOLUTPAT','VUELVEN','Y','YA','ZOOM','ZAPATO','ZAPATILLA','ZARAGOZA','ZORRO'];
var cantWord = arrayPalabras.length;
var letraGuion = "";
var palabra = "";
var copiaPalabra = [];
var palabraAcertar = [];



const setInicio = () =>{
    // SE EJECUTA AL MOMENTO DE CARGAR LA PAGINA
    tablero.style.display = 'none';
    botones.style.display = 'none';
    ingresoLetras.value = "";
    letrasIngresadas.value = "";
    btnStart.addEventListener("click",iniJuego,false);
    resetear.addEventListener("click",resetJuego,false);
    cancelar.addEventListener("click",cancelarJuego,false);
    ingresoLetras.addEventListener("keyup",buscaLetra,false);
}

const resetJuego = () => {
    // SE RESTABLECE EL TABLERO
    let divHtml;
    divHtml = '<div id="juego" ><img id="fondo" src="./public/img/fondo000.png" ></div>';
    divJuego.innerHTML = divHtml;
    tablero.style.display = "";
    botones.style.display = "";
    btnStart.style.display = "none";
    logo.style.display = "none";
    palabra = palabraRandom();
    copiaPalabra = palabra;
    palabraAcertar = palabra.split("");
    letraGuion = guionesInciales(palabra);
    muestraGuiones(letraGuion);
    cantIntentos.value = "0";
    letrasIngresadas.value = "";
    ingresoLetras.focus();

}

const registraLetra = (reg) => {
    // REGISTRA LAS LETRAS INGRESADAS
    letrasIngresadas.value += reg + ", ";
}

const buscador = () => {
    // REALIZA LA BUSQUEDA DE LA LETRA EN LA PALABRA RANDOM
    let letra = ingresoLetras.value.toUpperCase();
    let acierto = 0;
    muertes += 1;
    for (i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            acierto += 1;
        }
    }
    return acierto
}

const setImagen = (nro) => {
    // SE MUESTRA LA IMAGEN QUE CORRESPONDE AL INTENTO
    let divHtml;
    if (nro < 10) {
        divHtml = '<div id="juego" ><img id="fondo" src="./public/img/fondo00' + nro + '.png" ></div>';
    }else{
        divHtml = '<div id="juego" ><img id="fondo" src="./public/img/fondo0' + nro + '.png" ></div>';
    }
    return divHtml;
}

const juegoTerminado = () => {
    // SE MUESTRA LA IMAGEN DE GAME OVER
    let divHtml;
    divHtml = '<div id="juego" ><img id="fondo" src="./public/img/GAME-OVER01.png" onclick="resetJuego()"></div>';
    divJuego.innerHTML = divHtml;
}

const ganaste = () => {
    // SE MUESTRA LA IMAGEN DE FELICIDADES
    let divHtml;
    divHtml = '<div id="juego" ><img id="fondo" src="./public/img/FELICIDADES01.gif" ></div>';
    divJuego.innerHTML = divHtml;
}

const cancelarJuego = () => {
    location.reload();
}


const palabraRandom = () => {
    // SE ESTABLECE UN NUMERO RANDOM ENTRE 0 Y EL TOTAL DE PALABRAS
    // Y SE DEVUELVE LA PALABRA QUE CORRESPONDE SEGUN EL NUMERO RANDOM
    let num = Math.floor(Math.random() * (cantWord - 0)) + 0;
    let wordRandom = arrayPalabras[num];
    return wordRandom;
}



const intentos = () => {
    // REGISTRA INTENTOS FALLIDOS
    var nro = parseInt(cantIntentos.value);
    if (isNaN(nro)){
        nro = 0;
    }else{
        nro += 1
    }
    if(nro > 11){
        // SE TERMINAN LOS INTENTOS Y SE PIERDE EL JUEGO
        juegoTerminado();
    }else{
        cantIntentos.value = nro;
        divJuego.innerHTML = setImagen(nro);
    }
}

function reemplazaGuion(caracter){
    // SE REEMPLAZA EL GUION POR LA LETRA ENCONTRADA
    let reemplazo = "";
    for (x = 0; x < palabra.length; x++) {
        if (caracter == palabraAcertar[x]){
            copiaPalabra[x] = palabraAcertar[x];
        }
    }
    for (x = 0; x < copiaPalabra.length; x++) {
        if (copiaPalabra[x] == "_"){
            reemplazo += copiaPalabra[x] + " ";
        }else{
            reemplazo += copiaPalabra[x];
        }
    }
    //console.log(reemplazo);
    return reemplazo;
}


function buscaLetra (event) {
    // DEPENDE DE LA TECLA PRESIONADA, SE EJECUTA O NO EL JUEGO
    let mostrarAciertos = "";
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        // PROCESA EL JUEGO
        let letra = ingresoLetras.value.toUpperCase();
        registraLetra(letra);
        var acierto = buscador();
        if (acierto < 1) {
            // SE REGISTRA EL INTENTO Y SE DIBUJA EL AHORCADO
            intentos();
        }else{
            // SE DIBUJA LA LETRA EN SU UBICACION
            mostrarAciertos = reemplazaGuion(letra);
            muestraGuiones(mostrarAciertos);
            if(mostrarAciertos == palabra){
                // JUEGO GANADO
                //alert("Ganaste");
                ganaste();
            }
        }
        ingresoLetras.value = "";
        ingresoLetras.focus();
    }else{
        ingresoLetras.value = "";
        ingresoLetras.focus();
    }
}


function iniJuego(event){
    // SE SETEA EL TABLERO PARA COMENZAR EL JUEGO
    tablero.style.display = "";
    botones.style.display = "";
    btnStart.style.display = "none";
    logo.style.display = "none";
    divJuego.innerHTML = setImagen(muertes);
    palabra = palabraRandom();
    copiaPalabra = palabra;
    palabraAcertar = palabra.split("");
    letraGuion = guionesInciales(palabra);
    muestraGuiones(letraGuion);
    cantIntentos.value = "0";
    ingresoLetras.focus();
    //console.log(`La palabra es ${palabra} con ${palabra.length} letras, su copia es: ${palabraAcertar} con ${palabraAcertar.length} letras, y los guiones son: ${letraGuion}`);
}

function muestraGuiones(guionesAmostrar){
    // SE DIBUJAN LA CANTIDAD DE GUIONES DE ACUERDO A LA CANTIDAD DE LETRAS DE LA PALABRA
    divGuiones.innerHTML = guionesAmostrar;
}


function guionesInciales(word){
    /* SE CREA UNA CADENA CON GUIONES SEGUN LA CANTIDAD DE LETRAS EN LA PALBRA
     Y SE CREA UN ARRAY CON LA MISMA CANTIDAD DE GUIONES QUE LA PALABRA
     COINCIDIENDO LOS INDICES CON LA LETRA DE LA PALABRA RANDOM */
    let letras = word.split("");
    let arrGuiones = [];
    let guion = "";
    for (ind = 0; ind < word.length; ind ++){
        guion += "_ ";
        arrGuiones.push("_");
    }
    copiaPalabra = arrGuiones;
    return guion;
}

window.onload = setInicio(); // AL CARGAR LA PAGINA SE ESTABLECEN LOS LISTENNER PARA CADA BOTON