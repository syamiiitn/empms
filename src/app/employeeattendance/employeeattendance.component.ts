import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-employeeattendance',
  templateUrl: './employeeattendance.component.html',
  styleUrls: ['./employeeattendance.component.css']
})
export class EmployeeattendanceComponent implements OnInit {

  constructor(private attendanceservice:AttendanceService) { }
  attendance:any[]=[];
  checking:any={};
  p:number;
  searchTerm:string;
  ngOnInit() 
  {
  this.attendanceservice.gettingEmployeeAttendanceToAdmin().subscribe(temp=>{this.attendance=temp})
  }
//assign value to modal
confirm(v){
  this.checking=v;
}
 //confirm the attendance
 confirmation(){
   console.log(this.checking);
   this.attendanceservice.confirmationEmployeeAttendance(this.checking).subscribe(temp=>{alert(temp)})
 }


}
