var exp=require('express');
var app=exp();
var path=require('path');
var bodyparser=require('body-parser');
//install and import bcrypt
var bcrypt=require('bcryptjs');
//getting mongodbclient object
//here MongoClient is property of mongodb and it returns mongodbclient object
//here mongoclient is variable have a object of mongodbclient
var mongoclient=require('mongodb').MongoClient;
//we have to create a variable for database and we have to declare in outside of method to visible enter program
var dbo;
var s;

var mongoose=require('mongoose');
//url of database (or) path of database
var url="mongodb://employeemanagement:karimulla123@ds261644.mlab.com:61644/employeemanagement";

mongoclient.connect(url,(err,client)=>{
    if(err){
        console.log('err in db collection')
    }
    else{
        //get object of employeemanagement database
        dbo=client.db('employeemanagement');
        console.log('connect with db');
    }
})

app.use(bodyparser.json());
//connect server with angular app
app.use(exp.static(path.join(__dirname,'dist/meanproject')));
//post server employeedetails
app.post('/admin/empolyeedetails',(req,res,next)=>{
    console.log('working');
    console.log(req.body);
    //in express we can call db by following method
    // dbo.collection('employeedetails').insert(req.body);
    dbo.collection('employeedetails').find({name:req.body.name}).toArray((err,data)=>{
        //if user is not found then insert user document
        if(data.length===0){
            //we have to change password in hashcode
           bcrypt.hash(req.body.password,10,(err,hashcode)=>{
               if(err){
                   console.log(err);
               }
               else{
                   //while converting hashcode it call back
                  dbo.collection('employeedetails').insertOne({"name":req.body.name,
                                                               "id":req.body.id,
                                                               "role":req.body.role,
                                                               "salary":req.body.salary,
                                                               "hikes":req.body.hikes,
                                                               "phonenum":req.body.phonenum,
                                                               "gmail":req.body.gmail,
                                                               "password":hashcode,
                                                               "aadhar":req.body.aadhar,
                                                               "banknum":req.body.banknum,
                                                                "gender":req.body.gender   },
                                                                 (err,success)=>{
                                                                   res.json("success registration in database")
                                                               })
               }
           })
        }
        //if user is existed,send response to client to choose anthoer name
        else{
            res.json("employee is already existed .. choose other")
        }
    })
})


//CHECK Login details with DB POST METHOD

app.post('/home/login',(req,res,next)=>{
    s=req.body.name;
  dbo.collection('employeedetails').find({name:req.body.name}).toArray((err,data)=>{
      if(err){
          console.log(err)
      }
      else if(data.length===0){
          res.json("Invalid username")
      }
      else{
          bcrypt.compare(req.body.password,data[0].password,(err,success)=>{
              if(err){
                  console.log(err);
              }
              else if(success===true){
                  res.json("logged in successfully");
              }
              else if(success===false)
              {
                  res.json("wrong password")
              }
          })
      }
  })
})


//GET Employee Details collection from database
app.get('/admin/empolyeedetails',(req,res,next)=>{
    dbo.collection('employeedetails').find({name:{$ne:"admin"}}).toArray((err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})

//Add employee leave Details in Data base
app.post("/user/leave",(req,res,next)=>{
    console.log(req.body)
    dbo.collection('employeeleave').insertOne({
        "name":req.body.name,
        "id": req.body.id,
        "leaveoption":req.body.leaveoption,
        "reasonforleave":req.body.reasonforleave,
        "leavedate":req.body.leavedate,
        "leavedateto":req.body.leavedateto,
        "status":req.body.status 
    },(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json("successfully apply leave")
        }
    })
})

// get method for employee leave

app.get('/user/leave',(req,res,next)=>{
    dbo.collection('employeeleave').find({name:this.s}).toArray((err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(data);
        }
    })
})

//get emp leave in admin

app.get('/admin/empolyeeleave',(req,res,next)=>{
    dbo.collection('employeeleave').find({}).toArray((err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            // console.log(data);
            res.send(data);
        }
    })
})

//Emp profile get method data
app.get('/user/profile',(req,res,next)=>{
    dbo.collection('employeedetails').find({name:s}).toArray((err,data)=>{
        if(err){
            console.log("error for getting data to employee profile"+err);
        }
        else{
          
            res.send(data);
        }
    })
})


//Getting employee details from db to payslip
app.get('/admin/empolyeepayslip',(req,res,next)=>{
    dbo.collection('employeedetails').find({name:{$ne:"admin"}}).toArray((err,data)=>{
        if(err){
            console.log(err);
        }
        else{
             res.send(data);
           
        }
    })
})

//Put Employee Leave Details 
app.put('/admin/employeeleave',(req,res)=>{

    var objectid=new mongoose.Types.ObjectId(req.body._id)
    dbo.collection('employeeleave').update({_id:objectid},{$set:{
    "status":req.body.status }},(err,success)=>{
        if(err){
            console.log('err in update')
        }
        if(success){
            res.json("success updated leave confirmation");
        }
    })
})


//Post Payslip Details to PayslipCollection

app.post("/admin/empolyeepayslip",(req,res,next)=>{

    
    dbo.collection('employeepayslip').insertOne({
        "name":req.body.name,
        "id": req.body.id,
        "salary": req.body.salary,
        "hikes": req.body.hikes,
    },(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json("successfully apply generate")
        }
    })
})

//GET Payslip Details to Employee 

app.get('/user/payslip',(req,res,next)=>{
    dbo.collection('employeepayslip').find({name:s}).toArray((err,data)=>{
        console.log(this.s)
        if(err){
            console.log(err);
        }
        else{
            
            res.send(data);
           
        }
    })
})

//Update the Employee Details Collection Of Hikes
app.put('/admin/empolyeepayslip',(req,res)=>{

    var objectid=new mongoose.Types.ObjectId(req.body._id)
    dbo.collection('employeedetails').update({_id:objectid},{$set:{
    "hikes":req.body.hikes }},(err,success)=>{
        if(err){
            console.log('err in update')
        }
        if(success){
            res.json("success updated in payslip hikes");
        }
    })
})

  // update Role In  EmployeeDetails
  app.put('/admin/empolyeedetails',(req,res)=>{

    var objectid=new mongoose.Types.ObjectId(req.body._id)
    dbo.collection('employeedetails').update({_id:objectid},{$set:{
    "role":req.body.role }},(err,success)=>{
        if(err){
            console.log('err in update')
        }
        if(success){
            res.json("success updated in role");
        }
    })
})


//Delete Employee In DataBase
app.delete('/admin/employeedetails',(req,res)=>{
     console.log(req.body)
    var objectid=new mongoose.Types.ObjectId(req.body._id)
    dbo.collection('employeedetails').remove({_id:objectid},(err,success)=>{
        if(err){
            console.log('err in delete')
        }
        if(success){
            res.json("success delete in employeeDetails");

            //Getting Details after removing

            // dbo.collection('employeedetails').find({}).toArray((err,data)=>{
            //     if(err){
            //         console.log(err);
            //     }
            //     else{
            //         res.send(data); 
            //     }
            // })

        }
    })
})

//update profile
app.put('/user/profile',(req,res)=>{
    var objectid=new mongoose.Types.ObjectId(req.body._id)
    dbo.collection('employeedetails').update({_id:objectid},{$set:{name:req.body.name,
                                                                   id:req.body.id,
                                                                   role:req.body.role,
                                                                    salary:req.body.salary,
                                                                    phonenum:req.body.phonenum,
                                                                    gmail:req.body.gmail,
                                                                    aadhar:req.body.aadhar,
                                                                    banknum:req.body.banknum}},(err,success)=>{
        if(err){
            console.log('err in update')
        }
        if(success){
            res.json("success updated in profile");
        }
    })
})


//Add Attendance Details for Update 
 app.post('/user/attendance',(req,res)=>{
    console.log(req.body);
dbo.collection("attendancedetails").insertOne({name:req.body.name,
    id: req.body.id,
     date: req.body.date,
      attd: req.body.attd,
        time: req.body.time,
      status: req.body.status
      

   },(err,sucess)=>
   {
      if(err)
      {
          console.log("err while add empolyee attendance to attendancecollection "+err)
      }
      else
      {     
          // res.json("sucessfully add the employee atendance to empolyee colecction ")
           dbo.collection("attendancedetails").find({name:this.s}).toArray((err,data)=>
           {
               if(err)
                 {
                     console.log("err while getting data from attendance collection");
                 }
                 else
                 {
                      res.send(data)
                  
                 }
               
           })
      }
   }
   )
})

//GETTING ATTENDANCE DEATILS FRPM ATTENDANCE COLLECTION To Admin
     app.get("/admin/empolyeeattendance",(req,res)=>
                  {    
     dbo.collection("attendancedetails").find({}).toArray((err,data)=>
                 {
            if(err)
               {
            console.log(err);
              }
            else
              {
                 res.send(data);
             }

            }
            )
            }
            )


            //UPDATE  THE EMOLOYEE ATTENDANCE  IN ATTENDANCECOLLECTION  (CONFIRMATION ATTENDANCE) TO ADMIN

  app.put("/admin/empolyeeattendance",(req,res)=>
  { 
  
//coonverting stringid to object id
 var objectid =new mongoose.Types.ObjectId(req.body._id);
 
 //updating document to database
 dbo.collection("attendancedetails").update({_id:objectid},{$set:{status:req.body.status}},(err,success)=>
        {
           if(err)
           {
               console.log(err);
           }
           else
           {
               res.json("sucessfully confirmed and update in attendance collection");  
           }
        }
 )
}
)
//GETTING ATTENDANCE DEATILS FRPM ATTENDANCE COLLECTION TO USER/EMPOLYEEATTENDANCE
app.get("/user/attendance",(req,res)=>
{
    dbo.collection("attendancedetails").find({name:this.s}).toArray((err,data)=>
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                
             res.send(data);
             console.log(data);
          
            }

        }
    )
}
)



app.listen(process.env.PORT||8080,()=>{
    console.log('server listning on port 8080...')
})
