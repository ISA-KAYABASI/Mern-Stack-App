require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutsRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')



// express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutsRoutes)
app.use('/api/user', userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
     // listen for requests
    app.listen(process.env.PORT, () => {
    console.log('connected to db and listening on port ', process.env.PORT)
})
})
.catch((error) => {
    console.log(error)
})
 



// mongodb+srv://isakayabasi:<password>@isakayabasi.cle5i6s.mongodb.net/?retryWrites=true&w=majority