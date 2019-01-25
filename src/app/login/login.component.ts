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
  this.dataservice.logindetailsToDataservice(v).subscribe(temp=>{
    this.s=temp;
    if(temp=="Invalid username"){
      this.router.navigate(['/home/login'])
    }
    else if(temp=="wrong password"){
      this.router.navigate(['/home/login'])
    }
    else if(temp=="logged in successfully"){
      alert(temp);
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
