import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { log } from 'util';
import { IDeactivateGuard } from '../services/guards/auth-deactivate.guard';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit, IDeactivateGuard {
  user: { id: string; name: string };
  editUserDetails: { id: string; name: string };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      const { user } = data;
      console.log('data from edit user', user);

      {
        this.user = {
          id: user['id'],
          name: user['name'],
        };
        this.editUserDetails = { ...this.user }; // when using spread; it just copy all the properties & save a copy of it to a new obj
      }
    });
    //  as component gets intialized get the params and then keep on listening; then whenever value changes give that value to local property
    // this.route.params.subscribe((data: Params) => {
    //   this.user = {
    //     id: data['id'],
    //     name: data['name'],
    //   };
    //   this.editUserDetails = { ...this.user }; // when using spread; it just copy all the properties  within
    // }
    // );
  }

  // canExit written out of the constructor which means that it added to prototype of EditUserComponent
  canExit() {
    console.log(this.user); //values from route paramters
    console.log('leaving', this.editUserDetails); // value from input fields
    if (
      this.editUserDetails.id !== this.user.id ||
      this.editUserDetails.name !== this.user.name
    ) {
      // different user or value edited then show the confirm method to ask the user whther user should leave or not
      if (confirm('Data Unsaved? Are you sure to exit? ')) {
        return true; //move to whatever router user likes
      } else {
        return false;
      }
    } else {
      //value unedited so no need to show confirmation and just allow user to move to another route
      return true;
    }
  }
}
