import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-nieto-b',
  templateUrl: './nieto-b.component.html',
  styleUrls: ['./nieto-b.component.scss']
})
export class NietoBComponent implements OnInit {
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
