import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  authenticate(user: any) {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const userArray: any[] = JSON.parse(storedUsers);
      return userArray.find(p => p.userName === user.userName && p.password === user.password);
    }
    return null; 
  }
}