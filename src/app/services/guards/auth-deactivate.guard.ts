import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserComponent } from 'src/app/edit-user/edit-user.component';

// interface should be first code after imports
export interface IDeactivateGuard {
  canExit: () => Boolean | Promise<boolean> | Observable<boolean>;
}

@Injectable({
  providedIn: 'root',
})
/* canExit written out of the constructor which means that it added to prototype of EditUserComponent and since that
 given to component parameter so to access any method from it simply component.method()/component.canExit() */
export class AuthDeactivateGuard implements CanDeactivate<EditUserComponent> {
  canDeactivate(
    component: EditUserComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canExit();
  }
}

/* It works on components; so whichever component needs to use it;
  just import that interface there and then use the method canExit() to return true/false and then go to route and whichever
  route that component is associated with apply canDeactiva guard there

 canDeactivate<> take a generic type & usually on whichever component it needs to be applied that component is passed
 and within that component simply import that method within that component to use it

 */
