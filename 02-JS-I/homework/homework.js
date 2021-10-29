// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  //console.log(str);
  return str;
}


function suma(x, y) {
  var sumar = x + y;
  return sumar;
  
}
suma(4,5);
console.log(suma);

function resta(x, y) {
  var restar = x - y;
  return restar;
  
}
resta(5,3);

function multiplica(x, y) {
  var producto = x * y;
  return producto;
}
multiplica(5,5);

function divide(x, y) {
  var cociente = x/y;
  return cociente;
}
divide(8/4);

function sonIguales(x, y) {
  if (x === y) {
    return true;
  }else{
    return false
  }
}
sonIguales(5,5);

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length){
    return true;
  }else{
    return false;
  }
}
tienenMismaLongitud(1,1);

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90){
    return true;
  }
  else{
    return false;
  }
}
menosQueNoventa(5);


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num>50){
    return true;
  }
  else{
    return false;
  } 
}
mayorQueCincuenta(60); 


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x % y;
  return resto;  
}
obtenerResto(21,7);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2==0){
    return true;
  }
  else{
    return false;
  }
}
esImpar(2);

function esImpar(num) {
  if (num%3==0){
    return true;
  }else{
    return false;
  }
}
esImpar(3);

function elevarAlCuadrado(num) {
  var cuadrado = num * num;
  return cuadrado;
}
elevarAlCuadrado(2);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var cubo = num * num * num;
  return cubo;
}
elevarAlCubo(2);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var resultado =  Math.pow(num, exponent);
  return resultado;
}
elevar(2);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var numeroRedon = Math.round(num);
  return numeroRedon;
}
redondearNumero(6.4);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var NumberUp = Math.ceil(num);
  return NumberUp;
}
redondearHaciaArriba(6,1);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var numero = Math.random();
  return numero;
}
numeroRandom(0,1);

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0){
    console.log('Es positivo');
  } else if (numero < 0){
    console.log('Es negativo');
  } else{
    return false;
  }
  esPositivo(5);

  
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var signo = '!';
  console.log(str + '!');
  return 'hola' + signo;
}


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + apellido
}
combinarNombres ('Leonardo' ,'sanchez');

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = 'hola ' + nombre;
  return saludo;
}
obtenerSaludo('Leonardo');



function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var areaTriagulo = alto*ancho;
  return areaTriagulo;
}
obtenerAreaRectangulo(4,5);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetroCuadrado = 4 * lado;
  return perimetroCuadrado;
}
retornarPerimetro(5);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var areaTriangle = (base*altura)/2;
  return areaTriangle;
}
areaDelTriangulo(2,3);


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var cambioEnDolares = euro + 0.20;
  return cambioEnDolares;
}
deEuroAdolar(2);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra >= 2){
    return 'Dato incorrecto';
  }else if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
    return 'Es vocal';
  }else if(letra !== 'a' || letra !== 'e' || letra !== 'i' || letra !== 'o' || letra !== 'u'){
    return 'Dato incorrecto';
  }
}
esVocal('z');



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
