const express = require('express')
var cors = require('cors')
const { MongoClient, ObjectId } = require('mongodb');

const port = 3000
const app = express()
app.use(cors())

const client = new MongoClient("mongodb://0.0.0.0:27017/");

async function mongoStart() {
  await client.connect()
  console.log("connected")
}

const db = client.db('newspaper');
const articles = db.collection('article');

app.use(express.json());


app.get('/', async (req, res) => {

  let results = await articles.find({})
    .toArray();

  res.send(results);


})
app.post('/create', async (req, res) => {

  await articles.insertOne(req.body.form)

  res.send("Статья сохранена");
})
app.post('/delete', async (req, res) => {
  await articles.deleteOne ({ "_id" : new ObjectId(req.body.id) })
  res.send("Статья удалена");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoStart()


