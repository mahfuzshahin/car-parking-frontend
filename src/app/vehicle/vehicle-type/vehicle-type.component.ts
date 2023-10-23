import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.css']
})
export class VehicleTypeComponent implements OnInit{
  vehicleTypes:any=[];

  constructor(private service: AuthService) {
  }
  ngOnInit(){
    this.getVehicleType();
  }

  getVehicleType(){
    this.service.getVehicleType().subscribe((response:any)=>{
      this.vehicleTypes = response.data;
    })
  }
}
