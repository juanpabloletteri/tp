import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit {

  /*title: string = 'My first AGM project';
  lat: number = -34.662224;
  lng: number = -58.364532;*/

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

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,
    private miViaje: Viaje, private miServicioViaje: ViajesService) { }

  ngOnInit() {
    //set google maps defaults
    // this.zoom = 4;
    //this.latitude = 39.8282;
    // this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
    });
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
  origen() {
    this.latitude1 = this.latitude;
    this.longitude1 = this.longitude;
    console.log("1. " + this.latitude1);
    console.log("1. " + this.longitude1);
    (<HTMLInputElement>document.getElementById('float-input')).value = " ";
    swal(
      'Inicio!',
      'Direccion de inicio confirmada!',
      'success'
    )
  }
  destino() {
    this.latitude2 = this.latitude;
    this.longitude2 = this.longitude;
    console.log("2. " + this.latitude2);
    console.log("2. " + this.longitude2);
    (<HTMLInputElement>document.getElementById('float-input')).value = " ";
    swal(
      'Destino!',
      'Direccion de destino confirmada!',
      'success'
    )
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
        var costo = (distancia / 1000) * 15;
        swal("Distancia: " + responseDis.rows[0].elements[0].distance.text + " - Tiempo: " + responseDis.rows[0].elements[0].duration.text + " - Costo del viaje: $" + costo);
        console.log(responseDis);
        console.log("DISTANCIA TEXTO: " + responseDis.rows[0].elements[0].distance.text);
        console.log("TIEMPO TEXTO: " + responseDis.rows[0].elements[0].duration.text);
        console.log("**");
        console.log("DISTANCIA EN METROS: " + responseDis.rows[0].elements[0].distance.value);
        console.log("TIEMPO EN SEGUNDOS: " + responseDis.rows[0].elements[0].duration.value);
        ////////////////
        this.miServicioViaje.setLatitudInicio(this.latitude1);
        this.miServicioViaje.setLongitudInicio(this.longitude1);

        this.miServicioViaje.setLatitudDestino(this.latitude2);
        this.miServicioViaje.setLongitudDestino(this.longitude2);

        this.miServicioViaje.setInicio(responseDis.originAddresses[0]);
        this.miServicioViaje.setDestino(responseDis.destinationAddresses[0]);

        this.miServicioViaje.setDistancia(responseDis.rows[0].elements[0].distance.value);
        this.miServicioViaje.setCosto(costo);
        //////////////////
      }
    });
    //////////////////

  }
  response_data(responseDis, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK || status != "OK") {
      console.log("error", status);
    } else {
      //////////// SWEET ALERT ////////////////
      let swalWithBootstrapButtons = (swal as any).mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true,
      })
      swalWithBootstrapButtons({
        position: 'top-end',
        title: 'Datos del viaje: ',
        text: 'Distancia: ' + responseDis.rows[0].elements[0].distance.text +
          ' - Tiempo: ' + responseDis.rows[0].elements[0].duration.text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Confirmar viaje!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons(
            'Felicidades!',
            'Su viaje ha sido confirmado',
            'success'
          )
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons(
            'Cancelado',
            'Su viaje ha sido cancelado',
            'error'
          )
        }
      })
      ////////////////////////////////

    }
  }

}
