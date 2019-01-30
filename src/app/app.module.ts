import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeattendanceComponent } from './employeeattendance/employeeattendance.component';
import { EmployeeleaveComponent } from './employeeleave/employeeleave.component';
import { EmployeepayslipComponent } from './employeepayslip/employeepayslip.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { EmpattendanceComponent } from './empattendance/empattendance.component';
import { EmpleaveComponent } from './empleave/empleave.component';
import { EmppayslipComponent } from './emppayslip/emppayslip.component';
import { CarrersComponent } from './carrers/carrers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Home1Component } from './home1/home1.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './search.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthenticationService } from './authentication.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    AdminComponent,
    EmployeeComponent,
    EmployeedetailsComponent,
    EmployeeattendanceComponent,
    EmployeeleaveComponent,
    EmployeepayslipComponent,
    EmpprofileComponent,
    EmpattendanceComponent,
    EmpleaveComponent,
    EmppayslipComponent,
    CarrersComponent,
    ContactusComponent,
    Home1Component,
    SearchPipe,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthenticationService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
