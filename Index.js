const menu = document.getElementById('temperature');
const menuLong = document.getElementById('Longitudd');
const menuGeneral = document.getElementById('menu');
const seccionC = document.getElementById('seccionC');
const seccionF = document.getElementById('seccionF');
const seccionRA = document.getElementById('seccionRA');
const seccionRE = document.getElementById('seccionRE');
const seccionK = document.getElementById('seccionK');

const seccionKM = document.getElementById('seccionKM');
const seccionM = document.getElementById('seccionM');
const seccionDM = document.getElementById('seccionDM');
const seccionCM = document.getElementById('seccionCM');
const seccionMM = document.getElementById('seccionMM');

const seccionCalculator = document.getElementById('seccion');
const calculator = document.getElementById('Calculator');
const calc = document.getElementById('Calc');
const Temp = document.getElementById('Temp');
const Longi = document.getElementById('Longi');

menuGeneral.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cont_menu').style.display = 'none';
    document.getElementById('cont_menuLong').style.display = 'none';
    document.getElementById('Intro').style.display = 'none';
    document.getElementById('Juego').style.display = 'none';
    document.getElementById('Longitud').style.display = 'none';
    calculator.style.display = 'none';
    seccionCalculator.style.display = 'flex';
});

menu.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Juego').style.display = 'none';
    document.getElementById('cont_menu').style.display = 'flex';
    document.getElementById('Intro').style.display = 'block';
});

menuLong.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Longitud').style.display = 'none';
    document.getElementById('cont_menuLong').style.display = 'flex';
    document.getElementById('Long').style.display = 'block';
});

/*--------------------------------------------------------*/
/*----------Secciones del menu de temperaturas------------*/
/*--------------------------------------------------------*/
seccionC.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Juego').style.display = 'flex';
    document.getElementById('cont_menu').style.display = 'none';
    document.getElementById('Kelvin').style.display = 'none';
    document.getElementById('Reaumur').style.display = 'none';
    document.getElementById('Rankine').style.display = 'none';
    document.getElementById('Fahrenheit').style.display = 'none';
    document.getElementById('Celsius').style.display = 'grid';
});

seccionF.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Juego').style.display = 'flex';
    document.getElementById('cont_menu').style.display = 'none';
    document.getElementById('Kelvin').style.display = 'none';
    document.getElementById('Reaumur').style.display = 'none';
    document.getElementById('Rankine').style.display = 'none';
    document.getElementById('Celsius').style.display = 'none';
    document.getElementById('Fahrenheit').style.display = 'grid';
});

seccionRA.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Juego').style.display = 'flex';
    document.getElementById('cont_menu').style.display = 'none';
    document.getElementById('Kelvin').style.display = 'none';
    document.getElementById('Reaumur').style.display = 'none';
    document.getElementById('Celsius').style.display = 'none';
    document.getElementById('Fahrenheit').style.display = 'none';
    document.getElementById('Rankine').style.display = 'grid';
});

seccionRE.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Juego').style.display = 'flex';
    document.getElementById('cont_menu').style.display = 'none';
    document.getElementById('Kelvin').style.display = 'none';
    document.getElementById('Fahrenheit').style.display = 'none';
    document.getElementById('Rankine').style.display = 'none';
    document.getElementById('Celsius').style.display = 'none';
    document.getElementById('Reaumur').style.display = 'grid';
});

seccionK.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Juego').style.display = 'flex';
    document.getElementById('cont_menu').style.display = 'none';
    document.getElementById('Reaumur').style.display = 'none';
    document.getElementById('Fahrenheit').style.display = 'none';
    document.getElementById('Rankine').style.display = 'none';
    document.getElementById('Celsius').style.display = 'none';
    document.getElementById('Kelvin').style.display = 'grid';
});

/*--------------------------------------------------------*/
/*----------Secciones del menu de longitudes--------------*/
/*--------------------------------------------------------*/
seccionKM.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Longitud').style.display = 'flex';
    document.getElementById('cont_menuLong').style.display = 'none';
    document.getElementById('Metros').style.display = 'none';
    document.getElementById('Decimetros').style.display = 'none';
    document.getElementById('Centimetros').style.display = 'none';
    document.getElementById('Milimetros').style.display = 'none';
    document.getElementById('Kilometros').style.display = 'grid';
});

seccionM.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Longitud').style.display = 'flex';
    document.getElementById('cont_menuLong').style.display = 'none';
    document.getElementById('Kilometros').style.display = 'none';
    document.getElementById('Decimetros').style.display = 'none';
    document.getElementById('Centimetros').style.display = 'none';
    document.getElementById('Milimetros').style.display = 'none';
    document.getElementById('Metros').style.display = 'grid';
});

seccionDM.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Longitud').style.display = 'flex';
    document.getElementById('cont_menuLong').style.display = 'none';
    document.getElementById('Kilometros').style.display = 'none';
    document.getElementById('Metros').style.display = 'none';
    document.getElementById('Centimetros').style.display = 'none';
    document.getElementById('Milimetros').style.display = 'none';
    document.getElementById('Decimetros').style.display = 'grid';
});

seccionCM.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Longitud').style.display = 'flex';
    document.getElementById('cont_menuLong').style.display = 'none';
    document.getElementById('Kilometros').style.display = 'none';
    document.getElementById('Decimetros').style.display = 'none';
    document.getElementById('Metros').style.display = 'none';
    document.getElementById('Milimetros').style.display = 'none';
    document.getElementById('Centimetros').style.display = 'grid';
});

seccionMM.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('Longitud').style.display = 'flex';
    document.getElementById('cont_menuLong').style.display = 'none';
    document.getElementById('Kilometros').style.display = 'none';
    document.getElementById('Decimetros').style.display = 'none';
    document.getElementById('Centimetros').style.display = 'none';
    document.getElementById('Metros').style.display = 'none';
    document.getElementById('Milimetros').style.display = 'grid';
});

calc.addEventListener('click', (e) => {
    e.preventDefault();
    seccionCalculator.style.display = 'none';
    calculator.style.display = 'flex';
});

Temp.addEventListener('click', (e) => {
    e.preventDefault();
    seccionCalculator.style.display = 'none';
    document.getElementById('Kelvin').style.display = 'none';
    document.getElementById('Reaumur').style.display = 'none';
    document.getElementById('Rankine').style.display = 'none';
    document.getElementById('Fahrenheit').style.display = 'none';
    document.getElementById('Celsius').style.display = 'grid';
    document.getElementById('Juego').style.display = 'flex';
});

Longi.addEventListener('click', (e) => {
    e.preventDefault();
    seccionCalculator.style.display = 'none';
    document.getElementById('Milimetros').style.display = 'none';
    document.getElementById('Centimetros').style.display = 'none';
    document.getElementById('Decimetros').style.display = 'none';
    document.getElementById('Metros').style.display = 'none';
    document.getElementById('Kilometros').style.display = 'grid';
    document.getElementById('Longitud').style.display = 'flex';
});

/*--------------------------------------------------------*/
/*----------Funciones para la calculadora-----------------*/
/*--------------------------------------------------------*/
function val1() {
    document.calculator.cal.value += '1';
}
function val2() {
    document.calculator.cal.value += '2';
}
function val3() {
    document.calculator.cal.value += '3';
}
function val4() {
    document.calculator.cal.value += '4';
}
function val5() {
    document.calculator.cal.value += '5';
}
function val6() {
    document.calculator.cal.value += '6';
}
function val7() {
    document.calculator.cal.value += '7';
}
function val8() {
    document.calculator.cal.value += '8';
}
function val9() {
    document.calculator.cal.value += '9';
}
function val0() {
    document.calculator.cal.value += '0';
}
function valdec() {
    document.calculator.cal.value += ',';
}
function valmas() {
    document.calculator.cal.value += '+';
}
function valmenos() {
    document.calculator.cal.value += '-';
}
function valpor() {
    document.calculator.cal.value += '*';
}
function valdiv() {
    document.calculator.cal.value += '/';
}
function valequals() {
    document.calculator.cal.value = eval(document.calculator.cal.value);
}
