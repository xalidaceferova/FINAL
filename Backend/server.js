const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://xalide:xalide2001@cluster0.lbiijj0.mongodb.net/").then(()=>{
    console.log("connected")
})

const countrySchema=mongoose.Schema({
       name:{
        type:String,
        required:true
       },
       price:{
        type:Number,
        required:true
       }

})

const Country=mongoose.model("country",countrySchema)

app.get("/",async(req,res)=>{
    const data= await Country.find()
    res.send(data)
})

app.get("/:id",async(req,res)=>{
    const {id}=req.params
    const findId= await Country.findById(id)
    res.send(findId)
})

app.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const deleteditem= await Country.findByIdAndDelete(id)
    res.send(deleteditem)
})

app.post("/",async(req,res)=>{
    const newcountry= new Country({
        ...req.body
    })
     await newcountry.save()
     res.send(newcountry)
})
app.listen(8080)