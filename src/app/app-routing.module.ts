import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonInputComponent } from './person/input/person-input.component';

const routes: Routes = [
  { path: '', component: PersonComponent},
  { path: 'add', component: PersonInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
