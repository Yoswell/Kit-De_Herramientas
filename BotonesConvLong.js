let mostrarLong = document.getElementById('mostrarLong');

/*--------------------------------------------------------*/
/*-------------1 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const long1_1 = document.getElementById('long1_1');
long1_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.0010000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "M";
});

const long1_2 = document.getElementById('long1_2');
long1_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.00010000; 
    mostrarLong.innerHTML = resultado.toFixed(1) + "DM";
});

const long1_3 = document.getElementById('long1_3');
long1_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.000010000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "CM";
});

const long1_4 = document.getElementById('long1_4');
long1_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.0000010000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "MM";
});

/*--------------------------------------------------------*/
/*-------------2 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const long2_1 = document.getElementById('long2_1');
long2_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 1000.0;
    mostrarLong.innerHTML = resultado.toFixed(1) + "KM";
});

const long2_2 = document.getElementById('long2_2');
long2_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.10000; 
    mostrarLong.innerHTML = resultado.toFixed(1) + "DM";
});

const long2_3 = document.getElementById('long2_3');
long2_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.010000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "CM";
});

const long2_4 = document.getElementById('long2_4');
long2_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.0010000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "MM";
});

/*--------------------------------------------------------*/
/*-------------3 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const long3_1 = document.getElementById('long3_1');
long3_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 10000.0;
    mostrarLong.innerHTML = resultado.toFixed(1) + "KM";
});

const long3_2 = document.getElementById('long3_2');
long3_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 10.000; 
    mostrarLong.innerHTML = resultado.toFixed(1) + "M";
});

const long3_3 = document.getElementById('long3_3');
long3_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.10000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "CM";
});

const long3_4 = document.getElementById('long3_4');
long3_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.010000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "MM";
});

/*--------------------------------------------------------*/
/*-------------4 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const long4_1 = document.getElementById('long4_1');
long4_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 100000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "KM";
});

const long4_2 = document.getElementById('long4_2');
long4_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 100.00; 
    mostrarLong.innerHTML = resultado.toFixed(1) + "M";
});

const long4_3 = document.getElementById('long4_3');
long4_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 10.000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "DM";
});

const long4_4 = document.getElementById('long4_4');
long4_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 0.10000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "MM";
});

/*--------------------------------------------------------*/
/*-------------5 Botones para la conversion---------------*/
/*--------------------------------------------------------*/
const long5_1 = document.getElementById('long5_1');
long5_1.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 1000000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "KM";
});

const long5_2 = document.getElementById('long5_2');
long5_2.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 1000.00; 
    mostrarLong.innerHTML = resultado.toFixed(1) + "M";
});

const long5_3 = document.getElementById('long5_3');
long5_3.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 100.00;
    mostrarLong.innerHTML = resultado.toFixed(1) + "DM";
});

const long5_4 = document.getElementById('long5_4');
long5_4.addEventListener('click', (e) => {
    e.preventDefault();
    let cels = parseFloat(document.getElementById('textConverLong').value);
    let resultado = cels / 10.000;
    mostrarLong.innerHTML = resultado.toFixed(1) + "CM";
});