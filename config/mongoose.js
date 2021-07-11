const mongoose =require("mongoose")


mongoose.connect("mongodb://localhost/form_db")

const db =mongoose.connection;

db.on("error",console.error.bind(console,'error occured'))

db.once("open",function(){
    console.log("database is successfilly connected");
})