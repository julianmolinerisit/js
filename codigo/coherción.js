// Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
// Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
// Coerción explicita = es cuando obligamos a que cambie el tipo de valor.


//Ejemplos de Coerción:

var a = 4 + "7"; //Convierte a 4 en un string y lo concatena con el "7", por esto regresa un string de valor "47"

4 * "7"; //Convierte al "7" en un número y realiza la operación, por esto devuelve 28

var a = 20;
var b = a + ""; //Aquí concatenamos para convertir la variable a string (coerción implícita)
console.log(b); 

var c = String(a); //Aquí obligamos a la variable a convertirse en string (coerción explícita)
console.log(c);

var d = Number(c); //Aquí obligamos a la variable a convertirse en número (coerción explícita)
console.log(d);





// ¿Que tipos por default son verdaderos y falsos?

// Usamos la función de JS que es Boolean() dentro del paréntesis ponemos el valor y nos dice si el mismo el False o True.

// –> Falsy 

Boolean() —>false
Boolean(0) —> false
Boolean(null) —> false
Boolean(NaN) —> false // NaN es Not and Number
Boolean(Undefined) —> false
Boolean(false) —> false
Boolean("") —> false

// –> Truthy

Boolean(1) —> true //cualquier numero que no sea igual a cero es true
Boolean(“a”) —> true
Boolean(" ") —> true // siendo un espacio el valor es true
Boolean([]) —> true // un array nos da un true
Boolean({}) —> true // un objeto nos da el valor de true
Boolean(function() {}) —> true //una funcion tambien es true
Boolean(true) —> true


// OPERADORES

// ARITMETICOS

+ // Suma a + b,  afirmación unitaria +a : Positivo, concatenación "a" + "la" : "ala"
- // Resta a - b, negación unitaria -a : Negativo
* // Producto a * b
/ // Divisor a / b
% // Residuo a % b
** // Potencia a ** b, a elevado a b
++ // Incremento (suma uno) a++ : a = a + 1
-- // Decremento (resta uno) a-- : a = a - 1

// ASIGNACIÓN

= // Asignación a = b
+= // Asignación de adición  a += b : a = a + b
-= // Asignación de sustracción  a -= b : a = a - b
*= // Asignación de multiplicación  a *= b : a = a * b
/= // Asignación de división  a /= b : a = a / b
%= // Asignación de residuo  a %= b : a = a % b
**= // Asignación de potencia  a **= b : a = a ** b
<<= // Asignación de desplazamiento a la izquierda  a <<= b : a = a << b
>>= // Asignación de desplazamiento a la derecha  a >>= b : a = a >> b
>>>= // Asignación sin signo de desplazamiento a la derecha  a >>>= b : a = a >>> b
&= // Asignación AND  a &= b : a = a & b
^= // Asignación XOR  a ^= b : a = a ^ b
|= // Asignación OR  a |= b : a = a | b

// COMPARACIÓN

== // Igualdad a == b, a tiene el mismo valor que b
!= // Distinto a != b, a tiene un valor diferente a b
=== // Identidad a === b igual valor igual tipo de dato
!== // Sin Identidad a !== b igual valor o igual tipo de dato
> // Mayor que a > b
>= // Mayor o igual que a >= b
< // Menor que a < b
<= // Menor o igual que a <= b

// LOGICOS

&& // AND, Y, a && b : a y b
|| // OR, O, a || b : a o b
! // NOT, Negación, a = true : !a = false

// LOGICOS A NIVEL DE BITS

<< // Desplazamiento a la izquierda  a << b
>> // Desplazamiento a la derecha  a >> b
>>> // Desplazamiento a la derecha sin signo  a >>> b
& // AND  a & b
^ // XOR  a ^ b
| // OR  a | b
~ // NOT  a | b```