import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
//attendance details to server
  constructor(private http:HttpClient) { }
  attendanceApplyToAdmin(v):Observable<any>{
    return this.http.post<any>('user/attendance',v);
  }
  //getting data employeettendance to admin
  gettingEmployeeAttendanceToAdmin():Observable<any>{
return this.http.get<any[]>('admin/empolyeeattendance');
  }
  //confirmation of employee details
  confirmationEmployeeAttendance(v):Observable<any>{
    return this.http.put<any>('admin/empolyeeattendance',v);
  }
  //getting empolyee attendnce
  gettingEmpolyeeAttendance():Observable<any>
  {
     return this.http.get<any>("user/attendance");
  }
}
