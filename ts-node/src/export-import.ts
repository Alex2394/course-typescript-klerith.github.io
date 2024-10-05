/*
* Si se desea ejecutar este código desde el index.ts, renombrar el archivo a: index.ts 
*/

//1. Import básico
import { Hero } from './classes/Hero';

//2. Alias a una importación
//import { Hero as SuperHero } from './classes/Hero';

// 3. Importar todos los recursos de un archivo
//import * as HeroClasses from './classes/Hero';

// Llamado a una exportacion independiente
import { powers } from './data/powers-export-independent';

// Llamado a una exportacion default
//import powers from './data/powers-export-default';

// 1.
const ironman = new Hero('Ironman', 1, 55);

// 2.
//const ironman = new SuperHero('Ironman', 1, 55);

// 3.
//const ironman = new HeroClasses.Hero('Ironman', 1, 55);

//console.log( ironman.power );