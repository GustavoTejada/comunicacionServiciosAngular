import { Component } from '@angular/core';
import { ComunicacionService } from './services/comunicacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comunicacionServicios';

  constructor(public _comunicacionService: ComunicacionService) {}
}
