import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayslipService {

  constructor(private http:HttpClient) { }

     //data for payslip generate
     dataSendTopayslipComponent():Observable<any>
     {
     return this.http.get<any>("admin/empolyeepayslip");
     }
     //generate pay slip to dataservices
     generatePaySlip(i):Observable<any>
     {
     return  this.http.post<any>('admin/empolyeepayslip',i);
     }
     //payslip Downloading Details
     payslipDetailsToEmployee():Observable<any>{
       return this.http.get<any>("user/payslip")
     }
     //update Employee Details
     updateEmployeeDetails(i):Observable<any>{
       return this.http.put("admin/empolyeepayslip",i);
       
     }
}
