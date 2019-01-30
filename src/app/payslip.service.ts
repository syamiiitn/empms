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
     return this.http.get<any>("api/admin/empolyeepayslip");
     }
     //generate pay slip to dataservices
     generatePaySlip(i):Observable<any>
     { 
     return  this.http.post<any>('api/admin/empolyeepayslip',i);
     }
     //payslip Downloading Details
     payslipDetailsToEmployee():Observable<any>{
       return this.http.get<any>("api/user/payslip")
     }
     //update Employee Details
     updateEmployeeDetails(i):Observable<any>{
       return this.http.put("api/admin/empolyeepayslip",i);
       
     }
}
