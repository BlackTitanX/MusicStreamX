const express = require('express');
const JWT = require("jsonwebtoken");

const authorization = async (req, res, next)=>{
   try{
   const token = req.cookies.jwt;

   if(!token){
    res.status(401).json("you are not logged");
   }else if(token){
      
      const user = await JWT.verify(token, "superSecret")
      if(user){
      req.user = user;
      next()
      }else{
         res.status(401).json('unathorized')
      }
      

   }
}catch(e){

   console.log('Please Log in')
}
     
}

module.exports = authorization;