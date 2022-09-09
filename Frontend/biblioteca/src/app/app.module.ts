import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorListarComponent } from './autor-listar/autor-listar.component';
import { AutorVerComponent } from './autor-ver/autor-ver.component';
import { AutorModificarComponent } from './autor-modificar/autor-modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorListarComponent,
    AutorVerComponent,
    AutorModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
