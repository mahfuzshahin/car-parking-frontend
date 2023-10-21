import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user = new User();
  returnUrl!: string;
  constructor(private service: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }
  onSubmit() {
    this.service.postLogin(this.user).subscribe((response:any)=>{
      if (response) {
        this.router.navigate(['/profile'])
      }
    })
  }
}
