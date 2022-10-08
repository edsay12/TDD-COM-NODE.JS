const express = require('express')
const routes = require('./routes.js')



class AppController{
    constructor() {
        this.express = express();
        this.middleares();
        this.routes();
    }

    middleares(){
        this.express.use(express.json());
        this.express.use(express.urlencoded({extended:false}))
    }

    routes(){
        this.express.use(routes)
        
    }


}
module.exports = new AppController().express
