import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { AppRoutingModule } from './app-routing.module';
import { ManicureComponent } from './components/manicure/manicure.component';
import { FooterComponent } from './components/footer/footer.component';
import { HaistyleComponent } from './components/haistyle/haistyle.component';
import { MesotherapyComponent } from './components/mesotherapy/mesotherapy.component';
import { MicrobladingComponent } from './components/microblading/microblading.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfoComponent,
    ManicureComponent,
    FooterComponent,
    HaistyleComponent,
    MesotherapyComponent,
    MicrobladingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
