import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './shared/login-modal/login-modal.component'; // Caminho correto
import { RegisterModalComponent } from './shared/register-modal/register-modal.component'; // Caminho correto

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent, // Declare o componente aqui
    RegisterModalComponent // Declare o componente aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
