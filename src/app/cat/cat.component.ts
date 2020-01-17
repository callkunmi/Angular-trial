import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../catTypes';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {
  @Input() catties: [Cat];
  @Input() numberofCats: number;
  }

