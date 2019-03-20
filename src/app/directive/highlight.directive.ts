/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input, OnChanges,
  SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  // template: '<input [(ngModel)]="hero">'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    
  }

  @Input() defaultColor: string;
  // @Input() border: string;
  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngOnInit() { 
    // console.log(this.el); 
  }

  ngOnDestroy() { 
    console.log('destroy'); 
    this.el.nativeElement.style.border = '2px solid red' 
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