const mongoose = require('mongoose')
//here import mongoose for connecting mongodb
const connectionpath = process.env.Connectionpath

mongoose.connect(connectionpath).then((res)=>{
    console.log('mongodb connected succesfully');
}).catch((err)=>{
    console.log('while an error occur in connection mongodb');
})