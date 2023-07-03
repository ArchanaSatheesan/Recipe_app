const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://archanasatheesan:archanasatheesan@cluster0.zb7ujpa.mongodb.net/Recipeapp?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let Schema=mongoose.Schema;
const recipeSchema=new Schema({
    Name:String,
    duration:String,
    number:Number,
    image:String
    
});
var recipeModel=mongoose.model("recipes",recipeSchema);
module.exports=recipeModel;