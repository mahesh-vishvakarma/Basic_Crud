import { user } from "../model/usermodel.js";

//post data
export const userPost = async(req,res)=>{
  try {
    const{firstname,lastname,email,password} = req.body;
    let data = await user.create({firstname,lastname,email,password});
    if(!data){
      return res.json({success:false,message:"data not created"})
    }
    await data.save();
    res.json({success:true,message:"data update successfully",data})
  } catch (error) {
    res.json({success:false,message:"error"})
    console.log(error);
  }
}

//find all data
export const findData = async(req,res)=>{
  try {
    let data = await user.find();
    if(!data){
      return res.json({success:false,message:"data not found"})
    }
    res.json({success:true,message:"crud data is......!",data})
  } catch (error) {
    res.json({success:false,message:"error"})
    console.log(error);
  }
};

export const getOne = async(req,res)=> {
  try {
    const {id} = req.params;
    let data = await user.findById(id);
    if(!data){
      return res.json({success:false,message:"data not found"})
    }
    res.json({success:true,message:"crud dataOne......!",data})
  } catch (error) {
    res.json({success:false,message:"error"})
    console.log(error);
  }
}

export const updateData = async(req,res)=> {
  try {
    const{firstname,lastname,email} = req.body;
    const {para} = req.params;
    let data = await user.findByIdAndUpdate(para,{firstname,lastname,email},{
      new:true
    });
    if(!data){
      return res.json({success:false,message:"data not found"})
    }
    await data.save();
    res.json({success:true,message:"crud data updated......!",data})
  } catch (error) {
    res.json({success:false,message:"error"})
    console.log(error);
  }
}

export const deleteData = async(req,res)=> {
  try {
    
    const {para} = req.params;
    let data = await user.findByIdAndDelete(para);
    if(!data){
      return res.json({success:false,message:"data not found"})
    }
    res.json({success:true,message:"crud data deleted successfully......!"})
  } catch (error) {
    res.json({success:false,message:"error"})
    console.log(error);
  }
}
