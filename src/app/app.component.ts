import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reaDYP';
  constructor(private router: Router,
    public sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.username$.subscribe((username) => {
      this.user = username.charAt(0).toUpperCase() + username.slice(1);
    });
  }
  user: any;

  showNavbar(): boolean {
    const currentRoute = this.router.url;
    return !currentRoute.includes('/login');
  }
}
