import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  
empdatacomponent:any[]=[];
empeditdetails:any={};
searchTerm:string;
gmail:string;
gender:string;
p:number;
name:string;
id:any;
role:string;
salary:any;
hikes:any;
phonenum:any;
email:string;
password:any;
aadhar:any;
banknum:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.dataSendToEmployeeComponent().subscribe(temp=>{this.empdatacomponent=temp;
    console.log(this.empdatacomponent)});
    
  }
empAddMethod(temp)
{
  this.dataservice.giveEmpDataToDataserivce(temp).subscribe(temp=>{this.empdatacomponent=temp;});
  this.name="";
  this.id="";
  this.role="";
  this.salary="";
  this.hikes="";
  this.phonenum="";
  this.gmail="";
  this.password="";
  this.aadhar="";
  this.banknum="";
  this.gender="";
}
//Edit for Employee Details
edit(v)
{
  this.empeditdetails=v;
}

//Update Role
updateRole(){
  this.dataservice.updateRoleInEmployeeDetails(this.empeditdetails).subscribe();
}
//Delete Employee
delete(v)
{
  this.dataservice.deleteEmployee(v).subscribe(temp=>alert(temp));
}
}
