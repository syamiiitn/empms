import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  
  
  constructor(private http:HttpClient) { }
 
  ngOnInit()
  {

  }
  //Adding employeedetails to data service component
  giveEmpDataToDataserivce(temp):Observable<any>
  {

    return this.http.post<any>('api/admin/empolyeedetails',temp);
  }
//data send to employeedetails component
  dataSendToEmployeeComponent():Observable<any>
  {
    return this.http.get<any>("api/admin/empolyeedetails");
  }
     
  //login details to dataservice
  logindetailsToDataservice(v):Observable<any>{
   return this.http.post('api/home/login',v);
  }

  // update Role In  EmployeeDetails
  updateRoleInEmployeeDetails(v):Observable<any>{
    return this.http.put<any>('api/admin/empolyeedetails',v);
  }

  //delete employee
  deleteEmployee(v):Observable<any>{
    var httpOptions={
      headers:new HttpHeaders({'content-Type':'application/json'}),
      body:v
    };
    return this.http.delete<any>("api/admin/employeedetails",httpOptions);
  }
}
