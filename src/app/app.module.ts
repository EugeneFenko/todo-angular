import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonInputComponent } from './person/input/person-input.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

const MatModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonInputComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MatModules
  ],
  exports: [...MatModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
