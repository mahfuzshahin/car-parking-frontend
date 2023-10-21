import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user: any={};
  vehicleTypes:any=[];
  constructor(private service: AuthService, private actRoute: ActivatedRoute) {
  }
  ngOnInit(){
    this.profile();
    this.getVehicleType();
  }
  profile(){
    this.service.profile().subscribe((response:any)=>{
      this.user = response.data;
    })
  }
  getVehicleType(){
    this.service.getVehicleType().subscribe((response:any)=>{
      console.log(response.data)
      this.vehicleTypes = response.data;
    })
  }
}
