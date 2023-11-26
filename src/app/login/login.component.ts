import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserLoginService } from '../user-login.service';
import { SharedService } from '../shared.service';
import { ChangeDetectorRef } from '@angular/core';

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

  constructor(private router: Router, private userService: UserService, private userLoginService: UserLoginService, public sharedService: SharedService, private cdr: ChangeDetectorRef) { }

  login() {
    const credentials = { username: this.username, password: this.password };

    this.userLoginService.login(credentials)
      .subscribe({
        next: (response: any) => {
          console.log('Login successful:', response);
          this.isLoggedIn = true; // set the isLoggedIn variable to true
          alert('Login successful!');
          this.sharedService.setusername(this.username);
          this.cdr.detectChanges();
          this.router.navigate(['/home']);
          // Handle success (e.g., redirect to another page)
        },
        error: (error: any) => {
          console.error('Error during login:', error);
          alert('Invalid username or password');
          // Handle error (e.g., display an error message)
        },
        complete: () => {
          // Handle completion if needed
        }
      });
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
