
const express = require('express')
const app = express()

const PORT =  3000
const HOST = '0.0.0.0'


 // Syntax is app.get(route , callback )
 // callback:They can be a middleware or an array of them
app.get('/dukaan',(req,res)=>{
    res.send('Hello World')
})

app.listen(PORT,HOST,(err)=>{
    if(err)
        console.log(err)
    console.log(`App is running on ${HOST} and port ${PORT}`)

})