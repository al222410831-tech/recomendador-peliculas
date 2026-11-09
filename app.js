
// ============================================
// CINEMÁGICO
// RECOMENDADOR DE PELÍCULAS
// Autor: Mario Daniel Jacinto Arista
// ============================================


// ============================================
// BASE DE DATOS SIMULADA
// ============================================

const peliculas = [

    // ========================================
    // PELÍCULAS INFANTILES
    // ========================================

    {
        titulo: "Toy Story",
        genero: "Animación",
        edad: "infantil",
        descripcion: "Un grupo de juguetes cobra vida y vive increíbles aventuras."
    },
    {
        titulo: "Shrek",
        genero: "Comedia",
        edad: "infantil",
        descripcion: "Un ogro emprende una divertida aventura para recuperar su tranquilidad."
    },
    {
        titulo: "Coco",
        genero: "Aventura",
        edad: "infantil",
        descripcion: "Un niño descubre la importancia de la familia y la música."
    },
    {
        titulo: "Matilda",
        genero: "Fantasía",
        edad: "infantil",
        descripcion: "Una niña extraordinaria descubre que tiene habilidades especiales."
    },
    {
        titulo: "Los increíbles",
        genero: "Acción",
        edad: "infantil",
        descripcion: "Una familia de superhéroes enfrenta una gran aventura."
    },
    {
        titulo: "Intensamente",
        genero: "Drama",
        edad: "infantil",
        descripcion: "Una historia sobre las emociones y el crecimiento personal."
    },
    {
        titulo: "WALL-E",
        genero: "Ciencia ficción",
        edad: "infantil",
        descripcion: "Un pequeño robot descubre una aventura en el espacio."
    },
    {
        titulo: "Zootopia",
        genero: "Crimen",
        edad: "infantil",
        descripcion: "Una coneja policía investiga un misterioso caso."
    },
    {
        titulo: "Sing",
        genero: "Musical",
        edad: "infantil",
        descripcion: "Un grupo de animales participa en un concurso de canto."
    },


    // ========================================
    // PELÍCULAS JUVENILES
    // ========================================

    {
        titulo: "Hotel Transylvania",
        genero: "Animación",
        edad: "juvenil",
        descripcion: "Un hotel lleno de monstruos vive divertidas situaciones."
    },
    {
        titulo: "Escuela de Rock",
        genero: "Comedia",
        edad: "juvenil",
        descripcion: "Un músico forma una banda con un grupo de estudiantes."
    },
    {
        titulo: "Jumanji",
        genero: "Aventura",
        edad: "juvenil",
        descripcion: "Un juego transforma una aventura en una experiencia extraordinaria."
    },
    {
        titulo: "Harry Potter y la piedra filosofal",
        genero: "Fantasía",
        edad: "juvenil",
        descripcion: "Un joven descubre que pertenece a un mundo lleno de magia."
    },
    {
        titulo: "Spider-Man: Un nuevo universo",
        genero: "Acción",
        edad: "juvenil",
        descripcion: "Miles Morales descubre sus poderes y conoce otras versiones de Spider-Man."
    },
    {
        titulo: "Wonder",
        genero: "Drama",
        edad: "juvenil",
        descripcion: "Un niño enfrenta nuevos retos al comenzar una etapa escolar."
    },
    {
        titulo: "Volver al futuro",
        genero: "Ciencia ficción",
        edad: "juvenil",
        descripcion: "Un adolescente viaja accidentalmente al pasado."
    },
    {
        titulo: "Enola Holmes",
        genero: "Crimen",
        edad: "juvenil",
        descripcion: "Una joven detective investiga la desaparición de su madre."
    },
    {
        titulo: "El gran showman",
        genero: "Musical",
        edad: "juvenil",
        descripcion: "Una historia musical sobre los sueños y el espectáculo."
    },


    // ========================================
    // PELÍCULAS PARA ADULTOS
    // TODOS LOS GÉNEROS DISPONIBLES
    // ========================================

    {
        titulo: "Spider-Man: Un nuevo universo",
        genero: "Animación",
        edad: "adulto",
        descripcion: "Una aventura animada sobre héroes de diferentes universos."
    },
    {
        titulo: "¿Qué pasó ayer?",
        genero: "Comedia",
        edad: "adulto",
        descripcion: "Un grupo de amigos intenta reconstruir una noche inolvidable."
    },
    {
        titulo: "Interestelar",
        genero: "Aventura",
        edad: "adulto",
        descripcion: "Un grupo de exploradores emprende una misión más allá de la Tierra."
    },
    {
        titulo: "El señor de los anillos",
        genero: "Fantasía",
        edad: "adulto",
        descripcion: "Una gran aventura en un mundo lleno de magia y criaturas extraordinarias."
    },
    {
        titulo: "Mad Max: Fury Road",
        genero: "Acción",
        edad: "adulto",
        descripcion: "Una intensa aventura de supervivencia en un mundo postapocalíptico."
    },
    {
        titulo: "En busca de la felicidad",
        genero: "Drama",
        edad: "adulto",
        descripcion: "Un padre enfrenta dificultades mientras busca un futuro mejor."
    },
    {
        titulo: "El origen",
        genero: "Ciencia ficción",
        edad: "adulto",
        descripcion: "Un especialista entra en los sueños para realizar una misión extraordinaria."
    },
    {
        titulo: "El padrino",
        genero: "Crimen",
        edad: "adulto",
        descripcion: "Un drama sobre una familia involucrada en el mundo del crimen organizado."
    },
    {
        titulo: "La La Land",
        genero: "Musical",
        edad: "adulto",
        descripcion: "Dos jóvenes persiguen sus sueños en el mundo de la música y el cine."
    }

];


// ============================================
// VARIABLES DE SELECCIÓN
// ============================================

let categoriaSeleccionada = "";
let generoSeleccionado = "";


// ============================================
// ELEMENTOS DEL HTML
// ============================================

const campoEdad = document.getElementById("edad");

const resultado = document.getElementById("resultado");


// ============================================
// SELECCIÓN DE CATEGORÍA
// ============================================

document.querySelectorAll(".edad").forEach(boton => {

    boton.addEventListener("click", () => {

        categoriaSeleccionada = boton.dataset.categoria;

        document.querySelectorAll(".edad").forEach(elemento => {

            elemento.classList.remove("activa");

        });

        boton.classList.add("activa");

        resultado.classList.add("oculto");

    });

});


// ============================================
// SELECCIÓN DE GÉNERO
// ============================================

document.querySelectorAll(".genero").forEach(boton => {

    boton.addEventListener("click", () => {

        generoSeleccionado = boton.dataset.genero;

        document.querySelectorAll(".genero").forEach(elemento => {

            elemento.classList.remove("activa");

        });

        boton.classList.add("activa");

        resultado.classList.add("oculto");

    });

});


// ============================================
// OBTENER CATEGORÍA SEGÚN LA EDAD
// ============================================

function obtenerCategoria(edad) {

    if (edad >= 2 && edad <= 12) {
        return "infantil";
    }

    if (edad >= 13 && edad <= 17) {
        return "juvenil";
    }

    if (edad >= 18 && edad <= 120) {
        return "adulto";
    }

    return "";

}


// ============================================
// FUNCIÓN PRINCIPAL DEL RECOMENDADOR
// ============================================

function recomendarPelicula() {

    const edad = Number(campoEdad.value);


    // VALIDAR EDAD

    if (
        campoEdad.value.trim() === "" ||
        !Number.isInteger(edad) ||
        edad < 2 ||
        edad > 120
    ) {

        alert("Ingresa una edad válida entre 2 y 120 años.");

        campoEdad.focus();

        return;

    }


    // VALIDAR CATEGORÍA

    if (categoriaSeleccionada === "") {

        alert("Selecciona una categoría de edad.");

        return;

    }


    // VALIDAR GÉNERO

    if (generoSeleccionado === "") {

        alert("Selecciona tu género favorito.");

        return;

    }


    // COMPROBAR QUE LA EDAD COINCIDA CON LA CATEGORÍA

    const categoriaReal = obtenerCategoria(edad);

    if (categoriaSeleccionada !== categoriaReal) {

        alert("La categoría seleccionada no corresponde a tu edad.");

        return;

    }


    // BUSCAR PELÍCULAS POR EDAD Y GÉNERO

    const recomendaciones = peliculas.filter(pelicula => {

        return pelicula.edad === categoriaReal &&
               pelicula.genero === generoSeleccionado;

    });


    // VALIDAR QUE EXISTAN PELÍCULAS

    if (recomendaciones.length === 0) {

        alert("No hay películas registradas para esta combinación.");

        resultado.classList.add("oculto");

        return;

    }


    // SELECCIONAR UNA PELÍCULA ALEATORIAMENTE

    const indice = Math.floor(Math.random() * recomendaciones.length);

    const pelicula = recomendaciones[indice];


    // MOSTRAR INFORMACIÓN DE LA PELÍCULA

    document.getElementById("tituloPelicula").textContent =
        pelicula.titulo;

    document.getElementById("descripcionPelicula").textContent =
        pelicula.descripcion;

    document.getElementById("categoriaPelicula").textContent =
        "Categoría: " + categoriaSeleccionada;

    document.getElementById("generoPelicula").textContent =
        "Género: " + generoSeleccionado;

    document.getElementById("edadPelicula").textContent =
        "Edad registrada: " + edad + " años";


    // ========================================
    // GENERAR ENLACE DEL TRÁILER EN YOUTUBE
    // ========================================

    const nombrePelicula = pelicula.titulo;

    const busquedaTrailer = encodeURIComponent(
        nombrePelicula + " tráiler oficial"
    );

    document.getElementById("linkTrailer").href =
        "https://www.youtube.com/results?search_query=" + busquedaTrailer;


    // ========================================
    // GENERAR ENLACE PARA JUSTWATCH MÉXICO
    // ========================================

    const busquedaPelicula = encodeURIComponent(nombrePelicula);

    document.getElementById("linkPelicula").href =
        "https://www.justwatch.com/mx/buscar?q=" + busquedaPelicula;


    // ========================================
    // MOSTRAR RESULTADO
    // ========================================

    resultado.classList.remove("oculto");

    resultado.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


// ============================================
// EVENTO DEL BOTÓN RECOMENDAR
// ============================================

document
    .getElementById("btnRecomendar")
    .addEventListener("click", recomendarPelicula);


// ============================================
// MENSAJES DE INICIO
// ============================================

console.log("CineMágico iniciado correctamente.");

console.log("Películas registradas:", peliculas.length);
