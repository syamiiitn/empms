import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {

  constructor(private profileservice:ProfileService) { }
  arr:any[]=[];
 data:any={};
  name:string;
  id:string;
  role:string;
  salary:string;
  phonenum:string;
  gmail:string;
  password:string;
  aadhar:string;
  banknum:string;

  ngOnInit()
   {
     this.profileservice.dataSendToProfile().subscribe(temp=>{
       this.arr=temp;
      //  console.log(this.arr);
       
       
     });
   }
   update(i)
   {
     this.data=i;
   }
   emp()
   {
  this.profileservice.datafromempprofile(this.data);
  this.name="";
  this.id="";
  this.role="";
  this.salary="";
  this.phonenum="";
  this.gmail="";
  this.password="";
  this.aadhar="";
  this.banknum="";
  
   }
   

}

