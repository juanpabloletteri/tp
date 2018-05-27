import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
 
  title: string = 'My first AGM project';
  lat: number = -34.662224;
  lng: number = -58.364532;
  
  constructor() { }

  ngOnInit() {
  }

}
