/**
 * Las interfaces no son extendibles; sin embargo, se pueden agrupar para así ser importadas desde su agrupacion
 * Cómo todo recurso a utilizar de manera modular, la interfaz a ser utilizada, deberá ser exportada
 */

export interface Villain {
    name: string;
    dangerLevel: number;
}