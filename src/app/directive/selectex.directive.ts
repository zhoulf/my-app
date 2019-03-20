import { 
  Directive, 
  ElementRef, 
  HostListener, 
  Input, 
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from '@angular/core';

import { Item } from '../selectex/item';
import { Select } from '../controls/select';


@Directive({
  selector: '[appSelectex]'
})
export class SelectexDirective {
  private plugin:Select;
  
  @Input() data: Item[];
  @Output() onSelect = new EventEmitter<Item>();
  @Output() selected:Item;

  constructor(private el: ElementRef) {
    
  }


  ngOnInit() { 
    // this.el.nativeElement.style.display = 'none';
    
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
    }
  }
}