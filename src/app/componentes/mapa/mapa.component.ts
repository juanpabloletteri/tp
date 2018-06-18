import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

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
  }
  destino() {
    this.latitude2 = this.latitude;
    this.longitude2 = this.longitude;
    console.log("2. " + this.latitude2);
    console.log("2. " + this.longitude2);
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
    }, this.response_data);
    //////////////////
  }
  response_data(responseDis, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK || status != "OK") {
      console.log("error", status);
    } else {

      swal(
        'Resultado:',
        'Distancia: ' + responseDis.rows[0].elements[0].distance.text +
        ' - Tiempo: ' + responseDis.rows[0].elements[0].duration.text,
        'success'
      )
      console.log(responseDis);
    }
  }

}
