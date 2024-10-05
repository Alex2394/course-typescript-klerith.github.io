/**
 * Las interfaces no son extendibles; sin embargo, se pueden agrupar para así ser importadas desde su agrupacion
 * Cómo todo recurso a utilizar de manera modular, la interfaz a ser utilizada, deberá ser exportada
 */

// Esto es una agrupación de interfaces. La importación contendrá el nombre de la interfaz, pero el recurso 'from' apuntará a este index.ts(Agrupación)

export { Hero } from './hero';
export { Villain } from './villain';
export { Pokemon } from './pokemon';