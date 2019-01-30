import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  password:string;
  constructor(private router:Router,private dataservice:DataService) { }
  s:string;
  ngOnInit() {
  }
onSubmit(v){
  
  console.log(v);
  this.dataservice.logindetailsToDataservice(v).subscribe(res=>{
    alert(res);
   
    localStorage.setItem("idToken",res["idToken"])
    if(res=="Invalid username"){
      this.router.navigate(['/home/login'])
    }
    else if(res=="wrong password"){
      this.router.navigate(['/home/login'])
    }
    else{
      alert(res);
      if(v.name=="admin" && v.password=="Karimulla"){
        this.router.navigate(['/admin'])
      }
      else{
        this.router.navigate(['/user'])
      }
      
    }
  });
}
}
