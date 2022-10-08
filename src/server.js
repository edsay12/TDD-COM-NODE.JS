const app = require('./app.js')

app.listen(process.env.port || 8081,()=>{
    console.log('server iniciado na porta 8081')
    
}) 