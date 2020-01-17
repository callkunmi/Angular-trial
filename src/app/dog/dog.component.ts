import {Component, OnInit} from '@angular/core';
import {colors} from '@angular/cli/utilities/color';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

// @ts-ignore
  doggies = [{
    name: 'German Sheperd',
    color: 'black '
  },

  {
     name: 'Bulldog',
     color: 'brown'
   }];
     /*{
       name: 'Pomarian',
       color: 'green'
     }
   ];*/

  fetchDoggos() {
    this.doggies.push({name: 'snoppydoogy', color: 'Res'});
    this.doggies.push({name: 'Bulldog', color: 'black'});
    this.doggies.push({name: 'Puppy', color: 'brown'});
  }

  onButtonClick() {
    alert('LALA WOO');
  }

  addNewDog() {
    const newDog = {
     name: 'Aja',
      color: 'White',
      }

    ;
    this.doggies.push(newDog);
  }

  ngOnInit(): void {
    alert ('I am executed on start');
  }
}
