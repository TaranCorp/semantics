import { Component, Input } from '@angular/core';

interface Header {
  key: string;
  label: string;
}

interface Data {
  name: string,
  age: number,
  job: string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input('class') classNames = '';
  @Input() headers: Array<Header> = [];
  @Input() data: Array<Data> = []
}
