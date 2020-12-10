import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    // this.unsubscribin$.unsubscribe();
  }
}
