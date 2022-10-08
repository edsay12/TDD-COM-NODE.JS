const express = require('express')
const routes = express.Router();
const {User} = require('./app/models')



routes.get('/',(req,res)=>{
    console.log(User)
    User.create({name:'edvan',email:'edvandearaujo2@hotmail.com',password_hash:'001123adadsa23'})
})



module.exports =  routes