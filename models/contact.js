const mongoose =require("mongoose");


const formSchema=new mongoose.Schema({
    name:{
        type:String,
        reuired:true
    },
    email:{
        type:String,
        require:true
    },
    phoneno:{
        type:Number,
        require:true

    }
})

const Form =mongoose.model("contact",formSchema);


module.exports =Form;