import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  fromHome: string = 'Home component';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log('data: ', data);
    });
    // this.inervalSubscription = interval(10).subscribe((count) => {
    //   console.log(count);
    // });
  }
  recieveGreet(name: string) {
    alert(name);
  }
  ngOnDestroy() {}
}

/* this.route.snapshot.data vs this.route.data :: when to use what??

"this.route.snapshot.data" only works for the first time when component gets intializied but if any data changes/new data emitted
 from the route after that then compoennt doesn't detect as nothing chagned within the component which is corrent from
 anuglar point of view and so to detect route's data changes/newly emiited route's data and use them within component;
 just need to subscribe "this.route.data.subscribe" as now whenever new value emiited from route's data subscribe will know/
 recieve it & then that value could be simply assigned to local property (if that already assigned then it'll just update as new value comes)

when using observable it can always watch/listen to the value & give the latest value to whatever it's assigned to

when angular gives observable like route, http : those are removed/destroyed on whenever moving to another; basically
"obseervable value given from angular are manged by angular no cleanup/unsubscribe needed"
however when observable maded from rxjs then it must be unsubscribed as it keeps going whether moved to another component or not


*/
