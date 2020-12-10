import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: string; name: string };
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.route.params.subscribe((data: Params) => {
      console.log('data: ', data); // return an object with current router parameters
      // id and name are router parameters that are avaiable on data and these assigned to local properties
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });
    // rerieving queryParams and fragment from the current url
    this.route.queryParams.subscribe((data) => {
      console.log('queryParams: ', data);
    });
    this.route.fragment.subscribe((data) => console.log('fragment: ', data));
  }

  getRamaDetails() {
    this.router.navigate(['/users', 2, 'Rama'], {
      queryParams: { id: 2, search: 'sarching' },
      fragment: 'loading',
    });
  }
  onUserEdit() {
    // whatever the query params it had before navigating to this url; to keep it prserver else merge
    this.router.navigate(['/users', this.user.id, this.user.name, 'edit'], {
      queryParamsHandling: 'preserve',
    });
  }
}
/*
params property:--
Since the code is put within ngOnInit and it only run just once and that when the component first intialized;
so if any changes made to route paramters & that value needs to be shown within component's then "router.snapshot.params"
can't manage due to ngOnInIt runs the code within itself only the first time as component gets intialized

Params Method:--
So, to show changing values from router paramters and show that value within component:-
Need to use something that will constantly listen/watch route parameters emitted values and then whenver value changes simply
use Params method from angular router; then subscribe to it and the assign the data to whichever local property needed.

route direct methods mostly return Observable and since Observable constantly watch/listen to emiited value thus whenever
value changes that's applied to local property


*/
