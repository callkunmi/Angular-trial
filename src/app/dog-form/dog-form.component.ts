import {Component, Input} from '@angular/core';
import {Dog} from "../dogTypes";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent {
   dogs = [
     {
       name: 'Aja'
     }
   ];

  onSubmit(f: NgForm) {
this.dogs.push({name: f.value.name});
  }
}
