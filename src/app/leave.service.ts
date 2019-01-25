import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient) { }
   //  data leaveform to dataservice
  leaveMethodTodataservice(v):Observable<any>
  {
    console.log(v);
    return this.http.post<any>("user/leave",v);
  } 
   //leavedata request to admin
   requestLeaveToAdmin():Observable<any>
   {
   return this.http.get<any>("admin/empolyeeleave");
   }
   getDataEmployeeLeaveDetails():Observable<any>
   {
   return this.http.get<any>("user/leave");
   }

   receiveFromLeave(v)
   {
    this.http.put('admin/employeeleave',v).subscribe(temp=>alert(temp));
   }

}
