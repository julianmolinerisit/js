var estudiantes = ["Maria" , "Sergio" , "Rosa" , "Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

// Mientras la variable i sea menor a la longitud de estudiantes
// va a ejecutar la funcion saludarEstudiantes y se va a incrementar 
// en uno de esta forma va a pasar por todos los elementos hasta el final.


for( var i = 0; i < estudiantes.lenght; i++){
    saludarEstudiantes(estudiantes[i]);
}


// Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

// for - recorre un bloque de código varias veces

// for/in - recorre las propiedades de un objeto

// for/of - recorre los valores de un objeto iterable

// while - recorre un bloque de código mientras se cumple una condición específica

// do/while - también recorre un bloque de código mientras se cumple una condición específica