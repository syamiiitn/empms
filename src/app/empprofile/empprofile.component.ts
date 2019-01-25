import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {

  constructor(private profileservice:ProfileService) { }
  arr:object={};
 data:any[];

  ngOnInit()
   {
     this.profileservice.dataSendToProfile().subscribe(temp=>{
       console.log(temp);
       this.arr=temp;
       console.log(this.arr);
       
       
     });
   }
   update(i)
   {
     this.data=i;
   }
   emp()
   {
  this.profileservice.datafromempprofile(this.data);
   }
   

}

