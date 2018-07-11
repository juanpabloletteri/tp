import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../clases/cliente';
import { ClienteService } from '../../servicios/cliente.service';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
import { SelectItem } from 'primeng/api';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alta-viaje',
  templateUrl: './alta-viaje.component.html',
  styleUrls: ['./alta-viaje.component.css']
})
export class AltaViajeComponent implements OnInit {

  tipo: number;
  cols: any[];
  clienteSeleccionado: Cliente = null;
  datosTabla: any = null;

  date: Date;
  invalidDates: Array<Date>;
  es: any;

  types: SelectItem[];
  formaPago: number = null;

  constructor(public rute: Router, private miViaje: Viaje, private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService, private miServicioCliente: ClienteService) {

    this.tipo = this.datosUsuario.getTipo();

    if (this.tipo == 1) {
      this.cols = [
        { field: 'id_cliente', header: 'N° cliente' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'apellido', header: 'Apellido' },
        { field: 'telefono', header: 'Telefono' },
        { field: 'dni', header: 'Dni' },
        { field: 'domicilio', header: 'Domicilio' }
      ];
      this.miServicioCliente.traerTodosLosClientes()
        .then(data => {
          this.datosTabla = data;
        })
    }

  }

  onRowSelect(event) {
    console.log(this.clienteSeleccionado.nombre);
  }

  ngOnInit() {
    //CALENDARIO
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];

    //FORMA DE PAGO
    this.types = [
      { label: 'Paypal', value: '10', icon: 'fa fa-fw fa-cc-paypal' },
      { label: 'Visa', value: '20', icon: 'fa fa-fw fa-cc-visa' },
      { label: 'MasterCard', value: '30', icon: 'fa fa-fw fa-cc-mastercard' }
    ];

  }

  viaje() {
    //SI ESTA ACTIVO EL ENCARGADO
    if (this.tipo == 1) {
      this.miServicioViaje.setIdEncargado(this.datosUsuario.getIdUsuario());
      this.miServicioViaje.setIdCliente(this.clienteSeleccionado.id_usuario);
    }
    //SI EL TIPO ES CLIENTE
    else if (this.tipo == 3) {
      this.miServicioViaje.setIdEncargado(0);
      this.miServicioViaje.setIdCliente(this.datosUsuario.getIdUsuario());
    }
    //VERIFICACION POR FALTA DE DATOS
    if (this.miServicioViaje.getDistancia() == null) {
      swal("falta mapa");
      return 1;
    }
    else if (this.miServicioViaje.getIdVehiculo() == null) {
      swal("falta vehiculo");
      return 1;
    }
    else if (this.miServicioViaje.getIdCliente() == null) {
      swal("falta cliente");
      return 1;
    }
    ///VERIFICACION FECHA
    //asigno fecha de salida solicitada al servicio
    this.miServicioViaje.setFechaSalida(this.date);
    //establezco la fecha actual en la variable dia 
    let dia: Date = new Date();
    //verifico que la fecha seleccionada no sea anterior a la actual
    if (this.miViaje.fecha_salida < dia) {
      swal("La fecha seleccionada no puede ser anterior a la actual");
      return 1;
    }
    //FORMA DE PAGO
    this.miServicioViaje.setFormaPago(this.formaPago);
    if (this.formaPago == null) {
      swal("Por favor seleccione una forma de pago");
      return 1;
    }

    console.log("miViaje:" + this.miViaje);
    //al cargar el servicio automaticamente carga la variable miViaje
    this.miServicioViaje.agregarViaje(this.miViaje)
      .then(data => {
        console.log(data);
        this.miServicioViaje = null;

        //SI ESTA ACTIVO EL ENCARGADO
        if (this.tipo == 1) {
          this.rute.navigate(['encargado']);
        }
        //SI EL TIPO ES CLIENTE
        else if (this.tipo == 3) {
          this.rute.navigate(['cliente']);
        }
      })

  }

}
