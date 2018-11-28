import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
   
  }
  logout() {
    this.dataservice.curUser.UserId = -1;
    this.router.navigate(['login']);
  }
}
