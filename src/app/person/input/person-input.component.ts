import { Component } from '@angular/core';
import { PersonService } from '../persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredName = '';
  constructor(private personService: PersonService) { }

  addUser() {
    console.log(`Name: ${this.enteredName}!`);
    this.personService.onPersonCreated(this.enteredName);
    this.enteredName = '';
  }
}
