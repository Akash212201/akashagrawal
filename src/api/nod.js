const express =require('express');
const Server=express();
const cors=require('cors');
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
Server.use(cors());
Server.use(bodyParser.json())
main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/contact')
    console.log("DB Connected")
}
const MessageSchema=new mongoose.Schema({
    Name: String,
    email: String,
    message: String
})
const User=mongoose.model('User',MessageSchema)


Server.post('/demo',async(req,resp)=>{
    let user=new User();
    user.Name=req.body.Name;
    user.email=req.body.email;
    user.message=req.body.message;
    const doc= await user.save()
    console.log(doc)
    resp.json(doc);
})
Server.listen(8000,()=>{
    console.log("Server Connected")
})