import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:
    '<app-dynamic-datatable [data]="dataSource"></app-dynamic-datatable>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'intro-storybook-angular-template';

  dataSource = [
    {
      number: 1,
      name: 'Name 1',
      date: new Date().toLocaleDateString(),
      test: 'test1',
      random: Math.trunc(Math.random() * 10) + 1,
    },
    {
      number: 2,
      name: 'Name 2',
      date: new Date().toLocaleDateString(),
      test: 'test2',
      random: Math.trunc(Math.random() * 20) + 1,
    },
    {
      number: 3,
      name: 'Name 3',
      date: new Date().toLocaleDateString(),
      test: 'test3',
      random: Math.trunc(Math.random() * 30) + 1,
    },
    {
      number: 4,
      name: 'Name 4',
      date: new Date().toLocaleDateString(),
      test: 'test4',
      random: Math.trunc(Math.random() * 40) + 1,
    },
    {
      number: 5,
      name: 'Name 5',
      date: new Date().toLocaleDateString(),
      test: 'test5',
      random: Math.trunc(Math.random() * 50) + 1,
    },
    {
      number: 6,
      name: 'Name 6',
      date: new Date().toLocaleDateString(),
      test: 'test6',
      random: Math.trunc(Math.random() * 60) + 1,
    },
  ];
}
