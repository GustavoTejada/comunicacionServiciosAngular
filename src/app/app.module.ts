import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoAComponent } from './components/hijo-a/hijo-a.component';
import { HijoBComponent } from './components/hijo-b/hijo-b.component';
import { NietoAComponent } from './components/nieto-a/nieto-a.component';
import { NietoBComponent } from './components/nieto-b/nieto-b.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HijoAComponent,
    HijoBComponent,
    NietoAComponent,
    NietoBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
