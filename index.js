const express =require("express")
const path =require("path");

const db =require("./config/mongoose");
const Form =require("./models/contact")

const port =5000;

const app =express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());
app.use(express.static("public"));


app.get("/",function(req,res){
    
    return res.render("home");
})



app.post("/profile",function(req,res){
    // for printing data in our console
    // console.log(req.body);
    Form.create({
        name:req.body.name,
        email:req.body.email,
        phoneno:req.body.phoneno
    },function(err,newentry){
        if(err){
            console.err("error due to data is not coming from server");
            return;
        }
        console.log("*****",newentry);
        return res.render("profile");

    })
    
})

app.listen(port,function(err){
    if(err){
        console.log("error due to connect sever is available at this port",port)
    }
    return console.log("server is running at ",port)
})