import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado-viajes-chofer',
  templateUrl: './listado-viajes-chofer.component.html',
  styleUrls: ['./listado-viajes-chofer.component.css']
})
export class ListadoViajesChoferComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  id_chofer: number;
  viajeSeleccionado: Viaje;
  estadoViaje: any;
  visible: boolean = true;
  inicio: string;
  destino: string;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number = 14;

  public latitude1: number;
  public longitude1: number;

  public latitude2: number;
  public longitude2: number;

  public lat: Number;
  public lng: Number;

  public dir: any = undefined;

  public OriplaceGmaps: google.maps.places.PlaceResult;
  public AuxPlaceGmaps: google.maps.places.PlaceResult;
  public DestplaceGmaps: google.maps.places.PlaceResult;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private miServicioViaje: ViajesService,
    private datosUsuario: DatosUsuarioService, private rute: Router) {


    this.id_chofer = this.datosUsuario.getIdUsuario();
    this.miServicioViaje.traerViajesPorChofer(this.id_chofer)
      .then(data => {
        this.datosTabla = data;
      })
  }

  ngOnInit() {
    this.cols = [
      { field: 'id_cliente', header: 'N° cliente' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'mail', header: 'Mail' },
      { field: 'inicio', header: 'Inicio' },
      { field: 'destino', header: 'Destino' },
      { field: 'costo', header: 'Costo' },
      { field: 'distancia', header: 'Distancia (m)' },
      { field: 'estado', header: 'Estado' }
    ];
    this.estadoViaje = [
      { label: 'Ver Todos', value: null },
      { label: 'Pendientes', value: '0' },
      { label: 'Aceptados', value: '-1' },
      { label: 'En viaje', value: '-2' },
      { label: 'Realizados', value: '-3' },
      { label: 'Canc chofer', value: '-4' },
      { label: 'Canc cliente', value: '-5' }
    ];
    this.searchControl = new FormControl();
  }

  calcular() {
    this.dir = {
      origin: { lat: this.latitude1, lng: this.longitude1 },
      destination: { lat: this.latitude2, lng: this.longitude2 }
    }
    //////////////////
    let servicio = new google.maps.DistanceMatrixService();
    let mode = google.maps.TravelMode['DRIVING'];
    let origen = new google.maps.LatLng(this.latitude1, this.longitude1);
    let destino = new google.maps.LatLng(this.latitude2, this.longitude2);
    servicio.getDistanceMatrix({
      origins: [origen],
      destinations: [destino],
      travelMode: mode,
      unitSystem: google.maps.UnitSystem.METRIC,
      durationInTraffic: true,
      avoidHighways: false,
      avoidTolls: false
    }, (responseDis, status) => {
      if (status !== google.maps.DistanceMatrixStatus.OK) {
        console.log("error", status);
      } else {
        var distancia = responseDis.rows[0].elements[0].distance.value;
        var tiempo = responseDis.rows[0].elements[0].duration.value;
      }
    });
  }
  //////////////////

  verMapa(viaje) {
    console.log(viaje);
    this.visible = false;
    this.latitude1 = viaje.latitud_inicio;
    this.longitude1 = viaje.longitud_inicio;
    this.latitude2 = viaje.latitud_destino;
    this.longitude2 = viaje.longitud_destino;
    this.inicio = viaje.inicio;
    this.destino = viaje.destino;
    
    this.calcular();
  }

  volver() {
    this.visible = true;
  }

  onRowSelect(event) {
    //console.log(this.viajeSeleccionado.id_viaje);
    //this.display = true;
  }

  onRowUnselect(event) {

  }

  aceptar(id_viaje) {
    this.cambiarEstadoViaje(id_viaje, -1, "Viaje Aceptado!");
    /*this.miServicioViaje.cambiarEstadoViaje(id_viaje, -1)
      .then(data => {
        console.log(data);
        swal("Viaje Aceptado!");
        this.rute.navigate(['chofer']);
      })*/
  }

  cancelar(id_viaje) {
    this.cambiarEstadoViaje(id_viaje, -4, "Viaje Cancelado!");
    /*this.miServicioViaje.cambiarEstadoViaje(id_viaje, -4)
      .then(data => {
        console.log(data);
        swal("Viaje Cancelado!");
        this.rute.navigate(['chofer']);
      })*/
  }

  enViaje(id_viaje) {
    this.cambiarEstadoViaje(id_viaje, -2, "Viaje en curso!");
  }

  confirmar(id_viaje) {
    this.cambiarEstadoViaje(id_viaje, -3, "Viaje Relizado!");
  }

  cambiarEstadoViaje(id, estado, mensaje) {
    this.miServicioViaje.cambiarEstadoViaje(id, estado)
      .then(data => {
        console.log(data);
        swal(mensaje);
        this.rute.navigate(['chofer']);
      })
  }
}
