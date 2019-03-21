import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  color: string;

  selectData = [
    { text: 'A', value: 'a' },
    { text: 'B', value: 'b' }, 
    { text: 'C', value: 'c' }
  ];

  public selected = { text: 'C', value: 'c' };

  onSelect(item: any) {
    console.log(item);
    this.selected = item;
  }
}
