const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express()
const port = 5000

app.use(express.static('./public'))

async function connection(diff){
  const url = "mongodb://localhost:27017/"

  const client = new MongoClient(url)

  try{
    await client.connect();
    return await readData(client,diff)
  } catch (e) {
    console.log('error')
  } finally {
    await client.close();
  }
}

connection().catch(console.error)

async function readData(client,diff) {
  
  const result = await client.db("Exercise-Tracker").collection("Exercises").find({"Exercise Type": `${diff}`}).toArray()

  if(result){
    return result
  }
}

app.get('/',(req, res) => {
  res.sendFile('D:/MyData/node-test/mongo-tut/public/try.html')
})

app.get('/api/:diff',(req, res) => {
  connection(req.params.diff).catch(console.error).then((result)=>{
    //console.log(result)
    res.json(result)
  })
})

app.all('*',(req,res)=>{
  res.status(404).send('<h1>Not found</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
