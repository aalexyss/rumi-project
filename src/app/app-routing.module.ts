import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { ManicureComponent } from './components/manicure/manicure.component';
import { HomeComponent } from './components/home/home.component';
import { HaistyleComponent } from './components/haistyle/haistyle.component';
import { MesotherapyComponent } from './components/mesotherapy/mesotherapy.component';
import { MicrobladingComponent } from './components/microblading/microblading.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'info', component: InfoComponent},
  {path: 'manicure', component: ManicureComponent},
  {path: 'haistyle', component: HaistyleComponent},
  {path: 'mesotherapy', component: MesotherapyComponent},
  {path: 'microblading', component: MicrobladingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
