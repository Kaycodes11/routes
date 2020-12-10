import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(id: string) {
    if (id === '1') {
      return {
        id: '1',
        name: 'zack',
      };
    } else {
      return {
        id: '2',
        name: 'zoey',
      };
    }
  }
}
