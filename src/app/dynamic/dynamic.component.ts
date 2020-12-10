import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: ` <p>dynamic works!</p> `,
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
