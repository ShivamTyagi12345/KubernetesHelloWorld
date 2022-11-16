const e = require('express')
const express = require('express')
const app = express()
const port =  3000


 // app.get(route , callback )
 // callback :  They can be a middleware or an array of them
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,(err)=>{
    if(err)
        console.log(err)
    console.log(`App is running on port ${port}`)

})