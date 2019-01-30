import { Component, OnInit } from '@angular/core';
import { PayslipService } from '../payslip.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employeepayslip',
  templateUrl: './employeepayslip.component.html',
  styleUrls: ['./employeepayslip.component.css']
})
export class EmployeepayslipComponent implements OnInit {
  dataforpayslips:any[]=[];
  hikesforempolyee:any={};
  searchTerm:string;
  p:number;
  constructor(private payslipservice:PayslipService,private router:Router) { }

  ngOnInit() {
    this.payslipservice.dataSendTopayslipComponent().subscribe(temp=>{
      if(temp['message']=='Token is not valid'){
        this.router.navigate(['home/login']);
      }
      else{
        this.dataforpayslips=temp;
        console.log(this.dataforpayslips);
        
      }
    });
    
  }
  hikes(i)
  {
    this.hikesforempolyee=i;
   
 }

 generate(i)
 {
   this.payslipservice.generatePaySlip(i).subscribe(temp=>alert(temp));

 }
 updateHikes(){
  this.payslipservice.updateEmployeeDetails(this.hikesforempolyee).subscribe(temp=>alert(temp));
 }
}
