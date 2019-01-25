import { Component, OnInit } from '@angular/core';
import { PayslipService } from '../payslip.service';
@Component({
  selector: 'app-employeepayslip',
  templateUrl: './employeepayslip.component.html',
  styleUrls: ['./employeepayslip.component.css']
})
export class EmployeepayslipComponent implements OnInit {
  dataforpayslips:object[]=[];
  hikesforempolyee:object[]=[];
  p:number;
  constructor(private payslipservice:PayslipService) { }

  ngOnInit() {
    this.payslipservice. dataSendTopayslipComponent().subscribe(temp=>this.dataforpayslips=temp);
    console.log(this.dataforpayslips);
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
