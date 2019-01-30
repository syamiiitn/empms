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
    return this.http.post<any>("api/user/leave",v);
  } 
   //leavedata request to admin
   requestLeaveToAdmin():Observable<any>
   {
   return this.http.get<any>("api/admin/empolyeeleave");
   }
   getDataEmployeeLeaveDetails():Observable<any>
   {
   return this.http.get<any>("api/user/leave");
   }

   receiveFromLeave(v)
   {
    this.http.put('api/admin/employeeleave',v).subscribe(temp=>alert(temp));
   }

}
