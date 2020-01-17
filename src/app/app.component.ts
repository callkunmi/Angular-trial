import { Component } from '@angular/core';
import {CATS} from "./catTypes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Akin';
  cats = CATS;
  catLength = CATS.length;
}
