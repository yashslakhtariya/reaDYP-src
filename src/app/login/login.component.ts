import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    users: any[] = [];
    username: string = '';
    password: string = '';
    isLoggedIn: boolean = false; // add this line
  
    constructor(private router: Router) {}
  
    login() {
      // Check if the user exists in the list
      const user = this.users.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        // alert('Login successful!');
        this.isLoggedIn = true; // set the isLoggedIn variable to true
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password');
      }
    }
    signup() {
      // Add the new user to the list
      const un =/^[A-Z][a-z]+$/;
      const pwd = /^[A-Za-z]+[@#]+[0-9]+$/;
      if(un.test(this.username) && pwd.test(this.password)){
      this.users.push({
        username: this.username,
        password: this.password
      });
      // alert('Signup successful!');
    }
      else{
        alert("Kindly check the format again")
      }
    }
  }
