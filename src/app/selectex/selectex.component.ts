import { 
  Directive, 
  ElementRef, 
  HostListener, 
  OnInit,
  Input, 
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Component
} from '@angular/core';

import { Select } from '../controls/select';
import { Item } from './item';

@Component({
  selector: 'app-selectex',
  templateUrl: './selectex.component.html',
  styleUrls: ['./selectex.component.css']
})
export class SelectexComponent implements OnInit {
  private plugin:Select;
  
  @Input() data: Item[];
  @Output() onSelect = new EventEmitter<Item>();
  @Output() selected:Item;

  constructor(private el: ElementRef) {
    
  }


  ngOnInit() { 
    
    let options = {
      data: this.data,
      onSelect: (item:Item) => {
        this.onSelect.emit(item);
        this.selected = item;
      }
    }

    this.plugin = new Select(this.el.nativeElement, options);
    console.log(this.plugin.getValue())

  }

  ngOnDestroy() { 
    this.plugin.destroy();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      // console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      if (propName == 'data' && this.plugin) {
        this.plugin.setData(chng.currentValue);
      }
    }
  }

}
