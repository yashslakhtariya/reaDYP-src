import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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

  constructor(private router: Router, private userService: UserService) { }

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
  signup2(){
    const un = /^[A-Z][a-z]+$/;
    const pwd = /^[A-Za-z]+[@#]+[0-9]+$/;
    if (un.test(this.username) && pwd.test(this.password)) {
      this.users.push({
        username: this.username,
        password: this.password
      });
      // alert('Signup successful!');
    }
    else {
      alert("Kindly check the format again")
    }
  }
  signup() {
    const data = { username: this.username, password: this.password };
    this.userService.signup(data)
      .subscribe({
        next: (response: any) => {
          console.log('Data inserted successfully:', response);
          alert('Signup successful!');
          // Handle success (e.g., redirect to another page)
        },
        error: (error: any) => {
          console.error('Error inserting data:', error);
          alert('Error signing up!');
          // Handle error (e.g., display an error message)
        },
        complete: () => {
          alert('You can login now!');
          // Handle completion if needed
        }
      });
  }
}
