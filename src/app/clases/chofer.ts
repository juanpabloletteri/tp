/*export class Chofer {

    id_chofer: number;
    nombre: string;
    apellido: string;
    dni: number;
    telefono: number;
    legajo: number;

    constructor() { }
}*/

import { Usuario } from './usuario';

export class Chofer extends Usuario {

    id_chofer: number;
    id_usuario: number;
    id_vehiculo:number;
    legajo: number;

    constructor() { super() }
}