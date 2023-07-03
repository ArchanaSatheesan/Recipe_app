//importing
const express=require ('express');
const recipeModel = require('./Model/Recipedb');
const app=new express();
const cors=require ('cors');
//middleware
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//api creation


//post
app.post('/addrecipe',async(req,res)=>{
    console.log(req.body)
    var data=await recipeModel (req.body);
    data.save();
    res.send({status:"data saved"})
})
//view
app.get('/viewrecipes',async(req,res)=>{
    var data=await recipeModel.find();
    res.json(data);
})
app.get('/viewrecipes/:id',async(req,res)=>{
    let id=req.params._id;
    var data=await recipeModel.findOne(id);
    data.save();
    console.log("data view");
    res.send({status:"data viewed"})
    res.json(data);
   
})
//update
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id;
    try{
        var data=await recipeModel.findByIdAndUpdate(id,req.body)
        res.json({status:"updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})




//delete cuisine
app.delete('/deleterecipes/:id',async(req,res)=>{
    console.log("delete")
    console.log(req.params)
    let id=req.params.id;
    await recipeModel.findByIdAndDelete(id);

    res.json({status:"deleted"})

})
//port
app.listen(3008,()=>{
    console.log("app running in port 3008");
})
