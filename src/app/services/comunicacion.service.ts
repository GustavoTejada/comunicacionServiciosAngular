import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  public mensaje: string = '';
  private enviarMensajeSubject = new Subject<string>();
  public enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  constructor() {}

  enviarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
}
