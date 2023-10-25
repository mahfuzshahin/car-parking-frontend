import {Component, OnInit} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'car-parking-frontend';
  constructor(public service: AuthService, private router: Router, private toastr: ToastrService,) {
  }
  ngOnInit(){}

  logout() {
    this.service.logout().subscribe({
      next: (result) => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.toastr.error(error);
      }
    });
  }
}
