/**
 * Activar 'experimentalDecorators = true'
 */
import { PokemonDecorator } from './decorators/pokemon-decorator-class';


const pokemon_decorator = new PokemonDecorator('Chamander');

(PokemonDecorator.prototype as any).customName = 'Pikachu';

pokemon_decorator.savePokemonToDB( 5 );

pokemon_decorator.publicApi = 'https://fernando-herrera.com';

console.log( pokemon_decorator );