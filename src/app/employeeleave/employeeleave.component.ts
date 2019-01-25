import { Component, OnInit } from '@angular/core';

import { LeaveService } from '../leave.service';
@Component({
  selector: 'app-employeeleave',
  templateUrl: './employeeleave.component.html',
  styleUrls: ['./employeeleave.component.css']
})
export class EmployeeleaveComponent implements OnInit {
  requestleave:object={};
  leavedetails:any[];
  
  constructor(private leaveservice:LeaveService) { }
   p:number;
   searchTerm:string;
  ngOnInit() {
    this.leaveservice.requestLeaveToAdmin().subscribe(temp=>{this.requestleave=temp;console.log(this.requestleave)});
  }

  leaveconfirmation(v){
  this.leavedetails=v;
  console.log(v);
  }
  confirm(){
    this.leaveservice.receiveFromLeave(this.leavedetails);
    
  }

}
  