import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personsChanged = new Subject<string[]>();
  persons: string[] = ['John', 'Muller', 'Oleg'];

  onPersonCreated(name: string) {
    if (name) {
      this.persons.push(name);
    }
    console.log(this.persons);
    this.personsChanged.next(this.persons);
  }
  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    console.log(this.persons);
    this.personsChanged.next(this.persons);
  }

}
