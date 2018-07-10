export class Viaje {

    id_viaje: number;
    id_encargado: number;
    id_cliente: number;
    id_chofer: number;
    id_vehiculo: number;

    latitud_inicio: number;
    longitud_inicio: number;

    latitud_destino: number;
    longitud_destino: number;

    inicio:string;
    destino:string;

    distancia: number;
    costo: number;
    forma_pago: number;
    fecha_salida: Date;
    fecha_llegada: Date;
    estado: number;


    constructor() { }
}