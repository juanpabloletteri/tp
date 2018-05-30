/*export class Cliente {

    id_cliente: number;
    nombre: string;
    apellido: string;
    dni: number;
    telefono: number;
    domicilio: number;

    constructor() { }
}*/

import { Usuario } from './usuario';

export class Cliente extends Usuario {

    id_cliente: number;
    id_usuario: number;
    domicilio: number;

    constructor() { super() }
}