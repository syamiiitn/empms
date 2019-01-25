import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
   //data send to employee profile
   dataSendToProfile():Observable<any>
   {
     return this.http.get<any>("user/profile");
   }
   datafromempprofile(v)
   {
    this.http.put('user/profile',v).subscribe();
   }
}
