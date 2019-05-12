import { Component, OnInit } from '@angular/core';
import { PersonService } from './persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personList: string[];
  // private PersonService: PersonService;

  constructor(private prsService: PersonService){
    // this.personList = prsService.persons;
  }

  ngOnInit(): void {
    this.personList = this.prsService.persons;
    this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    })
  }
  removePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
}
