import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CarrersComponent } from './carrers/carrers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Profile } from 'selenium-webdriver/firefox';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { EmpattendanceComponent } from './empattendance/empattendance.component';
import { EmpleaveComponent } from './empleave/empleave.component';
import { EmppayslipComponent } from './emppayslip/emppayslip.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeattendanceComponent } from './employeeattendance/employeeattendance.component';
import { EmployeeleaveComponent } from './employeeleave/employeeleave.component';
import { EmployeepayslipComponent } from './employeepayslip/employeepayslip.component';
import { Home1Component } from './home1/home1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{path:'home',component:HomeComponent,
                        children:[ {path:'home1',component:Home1Component},
                        {path:'login',component:LoginComponent},
                        {path:'aboutus',component:AboutusComponent},
                        {path:'carrers',component:CarrersComponent},
                        {path:'contactus',component:ContactusComponent},
                        // {path:'home1/contactus',component:ContactusComponent},
                        // {path:'home1/carrers',component:CarrersComponent},
                        // {path:'home1/login',component:LoginComponent},
                        // {path:'home1/aboutus',component:AboutusComponent},
                        // {path:'home1/home1',component:Home1Component},
                        // {path:'login/home1',component:Home1Component}
                      ]   
                        },
                           {path:'user',component:EmployeeComponent,
                            children:[ 
                              {path:"profile",component:EmpprofileComponent}, 
                            {path:"attendance",component:EmpattendanceComponent},
                          {path:"leave",component:EmpleaveComponent},
                          {path:"payslip",component:EmppayslipComponent},
                          {path:"",redirectTo:"profile",pathMatch:"full"}
                        ]
                       },
                        
                       {path:'admin',component:AdminComponent,
                        children:[{path:"empolyeedetails",component:EmployeedetailsComponent},
                        {path:"empolyeeattendance",component:EmployeeattendanceComponent},
                        {path:"empolyeeleave",component:EmployeeleaveComponent},
                      {path:"empolyeepayslip",component:EmployeepayslipComponent},
                      {path:"",redirectTo:"empolyeedetails",pathMatch:"full"}
                    ]
                   },             
                    
                      
                    
                    
                     
{path:"",redirectTo:"home/home1",pathMatch:"full"},
{path:"**",component:PagenotfoundComponent}
                  ]
                     

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
