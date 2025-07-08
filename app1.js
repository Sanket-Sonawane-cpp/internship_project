const express = require('express')
const mongoose = require('mongoose')
const Exercise = require('./models/exercises.model')
const User = require('./models/users.model')
const app = express()
const port = 5000
const url = "mongodb://localhost:27017/Exercise-Tracker"
let user_id

const cors = require("cors")
app.use(cors())

app.use(express.static('./public'))
app.use(express.json())

app.get('/',(req, res) => {
  res.sendFile('D:/MyData/node-test/mongo-tut/public/login_page_v1.html')
})

app.get('/api/:diff/:focuus/:part',async (req, res) => {
  try {
    const { diff, part, focuus } = req.params
    let exercise
    if(focuus === 'Bone'){
      exercise = await Exercise.find({"Exercise Type":`${diff}`,"Target Body Part": `${part}`, "Focus Area": 'Bone Mobility'})
    } else {
      exercise = await Exercise.find({"Exercise Type":`${diff}`,"Target Body Part": `${part}`, "Focus Area": 'Muscle Strengthening' })
    }
    res.status(200).json(exercise)
  } catch(error) {
    res.status(500).json({message: error.message})
  }
})

app.get('/api/:diff',async (req, res) => {
  try {
    const { diff } = req.params
    const product = await Exercise.find({"Exercise Type":`${diff}`})
    res.status(200).json(product)
  } catch(error) {
    res.status(500).json({message: error.message})
  }
})

const authorize = async (req,res,next) => {
  try {
    const {name} = req.body
    const user = await User.find({"crede":{"name":`${name}`}})
    user_id = user[0]["_id"]

    if(user.length === 0){
      res.status(401).send('Unathourized')
      next()
    }
    else{
      res.status(200).send('Success')
      next()
    }
  } catch(error) {
    res.status(500).json({message: error.message})
  }

  
}

app.post('/submit',authorize, (req,res)=>{
  
})

app.get('/api/exer/:id',async (req, res) => {
  try {
    const { id } = req.params

    let user = await User.findOne({ [`progress.${id}`]: { $exists: true },_id : `${user_id}` })

    if(!user){
      user = await User.findByIdAndUpdate(user_id,{ [`progress.${id}.count`]:0 },{new:true})
    }

    let count = user.progress.get(id).count

    count += 1
    user.progress.get(id).count = count
    
    await user.save()

    

    res.status(200).send(String(count))
  } catch(error) {
    res.status(500).json({message: error.message})
  }
})

app.delete('/api/exer/:id',async (req, res) => {
  try {
    const { id } = req.params

    let user = await User.findOne({ [`progress.${id}`]: { $exists: true },_id : `${user_id}` })

    if(!user){
      user = await User.findByIdAndUpdate(user_id,{ [`progress.${id}.count`]:0 },{new:true})
    }
    
    user.progress.get(id).count = 0
    
    await user.save()

    res.status(200).send(String(count))
  } catch(error) {
    res.status(500).json({message: error.message})
  }
})

mongoose.connect(url).then(()=>{
  console.log('Connected to a database')
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
})
.catch(()=>{
  console.log("Connection failed!")
})