import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  getHeaders() {
    return [
        {key: 'name', label: 'Name'},
        {key: 'age', label: 'Age'},
        {key: 'job', label: 'Job'},
    ];
  }

  getData() {
    return [
      {
        name: 'Jakub',
        age: 33,
        job: 'Programmer'
      },
      {
        name: 'Michał',
        age: 13,
        job: 'Worker'
      }
    ];
  }
}
