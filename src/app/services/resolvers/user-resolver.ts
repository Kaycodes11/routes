import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

interface User {
  id: string;
  name: string;
}

@Injectable()
export class UserResolveService implements Resolve<User> {
  constructor(private userService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    let id = route.params['id'];
    // no need to subscribe as resolve will always be watching the route params
    let details = this.userService.getUser(id);
    return details;
  }
}

/* service can have another service within itself; for that it must use injectable & since it doesn't have to be provided at
 root level and just need to be injected within this service only so just use injectable (no property is needed) and then
 since service is now injected then make an instance of it within constructor */
