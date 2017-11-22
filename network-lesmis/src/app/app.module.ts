import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClimaComponent } from './clima/clima.component';
import { NetworkComponent } from './network/network.component';
import { NodesComponent } from './nodes/nodes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClimaComponent,
    NetworkComponent,
    NodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
