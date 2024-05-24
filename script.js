document.addEventListener('DOMContentLoaded', (event) => {
    const myCarousel = new bootstrap.Carousel('#carouselExampleFadeAutoplay', {
        interval: 3000, // Cambiar cada 3 segundos
        ride: 'carousel'
    });

    const progressBars = document.querySelectorAll('.progress-bar');

    // Function to reset the animation
    function resetAnimation(element) {
        element.style.animation = 'none';
        void element.offsetWidth; // Trigger reflow
        element.style.animation = null;
    }

    // Escuchar el evento slide.bs.carousel para actualizar las barras de progreso
    document.querySelector('#carouselExampleFadeAutoplay').addEventListener('slide.bs.carousel', function (e) {
        // Remover clase 'active' de todas las barras de progreso
        progressBars.forEach(bar => {
            bar.classList.remove('active');
            resetAnimation(bar);
        });

        // Añadir clase 'active' a la barra de progreso correspondiente al nuevo slide
        progressBars[e.to].classList.add('active');
    });

    // Inicializar la primera barra de progreso
    progressBars[0].classList.add('active');
});


//Variables
const modal_Nombre = document.querySelector( '#exampleModal  input[type="text"]' );
const modal_Mail = document.querySelector( '#exampleModal  input[type="email"]' );
const input_Nombre = document.getElementById("Nombre");
const input_Mail = document.getElementById("Mail");
const input_submit = document.getElementById("enviar");
const input_obtener = document.getElementById("obtener");
console.log(input_Nombre);
console.log(input_submit);
//
input_submit.addEventListener("click", enviarformulario);
input_obtener.addEventListener("click", guardardatos);
function enviarformulario(event) {
    event.preventDefault();
    //mostrar con enviar
    modal_Nombre.value = input_Nombre.value;
    modal_Mail.value = input_Mail.value;
    //valor al span
    document.getElementById("Nombre-placeholder").textContent = input_Nombre.value;
}
function guardardatos (event){
    window.location.href='gracias.html';
}
