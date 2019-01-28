import { Component, OnInit, Inject } from '@angular/core';
import * as jsPDF from 'jspdf';
import { PayslipService } from '../payslip.service';
@Component({
  selector: 'app-emppayslip',
  templateUrl: './emppayslip.component.html',
  styleUrls: ['./emppayslip.component.css'],
  providers:[{provide:'Window',useValue:window}]
})
export class EmppayslipComponent implements OnInit {

  constructor(@Inject('Window') private window:Window, private payslipservice:PayslipService) { }
  dataforpayslips:object[]=[];
  p:number;
  searchTerm:string;
  ngOnInit() {
    //getting payslip details
    this.payslipservice.payslipDetailsToEmployee().subscribe(temp=>{this.dataforpayslips=temp})
  }
  
  
downloadPdf(){
  var doc=new jsPDF();
  //save the doc
 
  //add text to pdf document
   doc.text(20,40,'welcome');
   doc.save('test.pdf');
}

}