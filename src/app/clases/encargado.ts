/*export class Encargado {

    id_encargado: number;
    nombre: string;
    apellido: string;
    dni: number;
    telefono: number;
    legajo: number;

    constructor() { }
}*/

import { Usuario } from './usuario';

export class Encargado extends Usuario {

    id_encargado: number;
    id_usuario: number;
    legajo: number;

    constructor() { super() }
}