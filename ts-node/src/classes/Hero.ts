/**
 * Cuando se trabaja con TypeScript en un ambiente modular, es donde se utiliza las exportaciones e importaciones
 * Export: Se añade la palabra 'export' cuanndo se desea que ese recurso pueda ser utilizado por otro
 * Import: Se añade la palabra 'import' para utilizar un recurso que ya ha sido exportado.
 */

// Llamado a una exportación por defecto
import powers from '../data/powers-export-default';

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power(): string {
        return powers.find( power => power.id === this.powerId )?.desc || 'not found';
    }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}

export const PI = 3.14;

export const miNombre = 'Alexander';