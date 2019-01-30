import { Component, OnInit, DoCheck } from '@angular/core';
import { LeaveService } from '../leave.service';
@Component({
  selector: 'app-empleave',
  templateUrl: './empleave.component.html',
  styleUrls: ['./empleave.component.css']
})
export class EmpleaveComponent implements OnInit,DoCheck {
  
 
  constructor(private leaveservice:LeaveService) { }
  data:any[]=[];
  p:number;
  searchTerm:string;
  name:string;
  id:string;
  leaveoption:string;
  reasonforleave:string;
  leavedate:string;
  leavedateto:string;
  status:string="pending...";
  // sancation:string="waiting...";
  ngOnInit() {
      this.leaveservice.getDataEmployeeLeaveDetails().subscribe(temp=>{
      this.data=temp;
    })
  }
  
  
  ngDoCheck(){
  
  }
  leaveMethod(v)
  {
  console.log(v)
  this.leaveservice.leaveMethodTodataservice(v).subscribe(temp=>{
    alert(temp);
    this.name="";
    this.id="";
    this.leaveoption="";
    this.reasonforleave="";
    this.leavedate="";
    this.leavedateto="";
    this.status="";
    
  });
  
  }

}
