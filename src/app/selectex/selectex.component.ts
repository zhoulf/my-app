import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-selectex',
  templateUrl: './selectex.component.html',
  styleUrls: ['./selectex.component.css']
})
export class SelectexComponent implements OnInit {
  @Input() data: Item[];
  selected: Item;
  constructor() {

  }

  ngOnInit() {
    
  }

}
