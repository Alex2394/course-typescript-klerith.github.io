/*
* Si se desea ejecutar este código desde el index.ts, renombrar el archivo a: index.ts
*/

import { getPokemon } from './generics/get-pokemon';

getPokemon( 1 )
.then( ( pokemon => { console.log( pokemon.sprites.front_default ) } ) )
.catch( ( error => { console.error( error ) } ) )
.finally( () => console.log( ' Finalizó getPokemon' ) );