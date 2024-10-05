/*
* Si se desea ejecutar este código desde el index.ts, renombrar el archivo a: index.ts 
*/

// Funciones genéricas que recibe cualquier argumento

import { printObject } from './generics/generics';

printObject( 123 );
printObject( new Date() );
printObject( { a: 1, b: 2, c: 3 } );
printObject( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );
printObject( 'Hola Mundo' );

// Una función que recibe any. Pero se desconoce el comportamiento de los datos asociados a su tipo. Por lo que no tenemos acceso a sus propiedades

import { genericFunction } from './generics/generics';

const name = 'Alexander';

//console.log( genericFunction( 3.141618.toFixed(2) ));
//console.log( genericFunction( name.toUpperCase() ));
//console.log( genericFunction( new Date().getDate() ));


// Una función genérica que reconoce las propiedades acorde al tipo de los datos ingresados. Ej: toFixed para números | toUpperCase para strings | etc...

//import { genericFunctionArrow } from './generics/generics';

//console.log( genericFunctionArrow( 3.141618.toFixed(2) ));
//console.log( genericFunctionArrow( name.toUpperCase() ));
//console.log( genericFunctionArrow( new Date().getDate() ));


/*
* Uso de interfaces para funciones genéricas
*/

import { Hero, Villain } from './interfaces';
import { genericFunctionArrow } from './generics/generics';

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
};

console.log( genericFunctionArrow<Hero>( deadpool ).realName);
console.log( genericFunctionArrow<Villain>( deadpool ).dangerLevel);