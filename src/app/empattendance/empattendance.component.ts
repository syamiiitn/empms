import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-empattendance',
  templateUrl: './empattendance.component.html',
  styleUrls: ['./empattendance.component.css']
})
export class EmpattendanceComponent implements OnInit {

  attendance:object[]=[];
  status:string="pending...";
  constructor(private attendanceservice:AttendanceService) { }

    ngOnInit() 
    {
      this.attendanceservice.gettingEmpolyeeAttendance().subscribe(temp=>{this.attendance=temp})
    }
 //apply attendance
 attendanceApply(v){
  this.attendanceservice.attendanceApplyToAdmin(v).subscribe(temp=>{this.attendance=temp});
 }


}
