import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-nieto-a',
  templateUrl: './nieto-a.component.html',
  styleUrls: ['./nieto-a.component.scss']
})
export class NietoAComponent implements OnInit {
  mensaje: string = '';
  constructor(private _comunicacionService: ComunicacionService) { }

  ngOnInit(): void {
    this._comunicacionService.enviarMensajeObservable.subscribe(
      response => {
        this.mensaje = response;
      }
    )
  }

  cambioTexto(mensaje: string) {
    this._comunicacionService.enviarMensaje(mensaje);
  }

  getValue(event: Event) {
    this.cambioTexto((event.target as HTMLInputElement).value);
  }

}
