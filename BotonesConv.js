let mostrar = document.getElementById('mostrar');

/*--------------------------------------------------------*/
/*-------------1 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const but1_1 = document.getElementById('but1_1');
but1_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels * 1.8000) + 32;
    mostrar.innerHTML = resultado.toFixed(1) + "F°";
});

const but1_2 = document.getElementById('but1_2');
but1_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels * 1.8000) + 491.67; 
    mostrar.innerHTML = resultado.toFixed(1) + "Ra°";
});

const but1_3 = document.getElementById('but1_3');
but1_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = 4*(cels / 5);
    mostrar.innerHTML = resultado.toFixed(1) + "R°";
});

const but1_4 = document.getElementById('but1_4');
but1_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = cels + 273.15;
    mostrar.innerHTML = resultado + "K°";
});

/*--------------------------------------------------------*/
/*-------------2 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const but2_1 = document.getElementById('but2_1');
but2_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 32) / 1.8000;
    mostrar.innerHTML = resultado.toFixed(1) + "C°";
});

const but2_2 = document.getElementById('but2_2');
but2_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 32) + 491.67;
    mostrar.innerHTML = resultado.toFixed(1) + "Ra°";
});

const but2_3 = document.getElementById('but2_3');
but2_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = 4*(cels - 32) / 9;
    mostrar.innerHTML = resultado.toFixed(1) + "R°";
});

const but2_4 = document.getElementById('but2_4');
but2_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 32) / 1.8000 + 273.15;
    mostrar.innerHTML = resultado.toFixed(1) + "K°";
});

/*--------------------------------------------------------*/
/*-------------3 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const but3_1 = document.getElementById('but3_1');
but3_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 491.67) + 32;
    mostrar.innerHTML = resultado.toFixed(1) + "F°";
});

const but3_2 = document.getElementById('but3_2');
but3_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 491.67) / 1.8000;
    mostrar.innerHTML = resultado.toFixed(1) + "C°";
});

const but3_3 = document.getElementById('but3_3');
but3_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 491.67) * 0.44444;
    mostrar.innerHTML = resultado.toFixed(1) + "R°";
});

const but3_4 = document.getElementById('but3_4');
but3_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 491.67) / 1.8000 + 273.15;
    mostrar.innerHTML = resultado.toFixed(1) + "K°";
});

/*--------------------------------------------------------*/
/*-------------4 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const but4_1 = document.getElementById('but4_1');
but4_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels * 2.2500) + 32;
    mostrar.innerHTML = resultado.toFixed(1) + "F°";
});

const but4_2 = document.getElementById('but4_2');
but4_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels*3);
    mostrar.innerHTML = resultado.toFixed(1) + "C°";
});

const but4_3 = document.getElementById('but4_3');
but4_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels * 2.2500) + 491.67;
    mostrar.innerHTML = resultado.toFixed(1) + "Ra°";
});

const but4_4 = document.getElementById('but4_4');
but4_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels / 0.80000) + 273.15;
    mostrar.innerHTML = resultado.toFixed(1) + "K°";
});

/*--------------------------------------------------------*/
/*-------------4 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const but5_1 = document.getElementById('but5_1');
but5_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 273.15) * 1.8000 + 32;
    mostrar.innerHTML = resultado.toFixed(1) + "F°";
});

const but5_2 = document.getElementById('but5_2');
but5_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 273.15);
    mostrar.innerHTML = resultado.toFixed(1) + "C°";
});

const but5_3 = document.getElementById('but5_3');
but5_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = ((cels - 273.15) * 1.8000) + 491.67;
    mostrar.innerHTML = resultado.toFixed(1) + "Ra°";
});

const but5_4 = document.getElementById('but5_4');
but5_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseInt(document.getElementById('textConver').value);
    let resultado = (cels - 273.15) * 0.80000;
    mostrar.innerHTML = resultado.toFixed(1) + "R°";
});