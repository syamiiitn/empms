import { Component, OnInit, DoCheck } from '@angular/core';
import { LeaveService } from '../leave.service';
@Component({
  selector: 'app-empleave',
  templateUrl: './empleave.component.html',
  styleUrls: ['./empleave.component.css']
})
export class EmpleaveComponent implements OnInit,DoCheck {
  
 
  constructor(private leaveservice:LeaveService) { }
  data:any;
  // status:string="pending...";
  // sancation:string="waiting...";
  ngOnInit() {}
  
  
  ngDoCheck(){
    this.leaveservice.getDataEmployeeLeaveDetails().subscribe(temp=>{
      this.data=temp;
    })
  }
  leaveMethod(v)
  {
  console.log(v)
  this.leaveservice.leaveMethodTodataservice(v).subscribe(temp=>{
    alert(temp);
  });
  
  }

}
