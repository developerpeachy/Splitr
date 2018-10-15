const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

var db

//new server link for mlab
//change to: mongodb://XXXX:XXXXX@XXXXX.mlab.com:XXXXX/XXXX when publishing!!!!
MongoClient.connect('insert UR OWN LINK HERE ', (err, database) => {
	if (err) return console.log(err)
	db = database
	app.listen(process.env.PORT || 3000, () => {
    	console.log('listening on 3000')
  	})
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

//routes 
app.post('/splitr', (req, res) => {
  db.collection('people').save(req.body, (err, result) => {
    if (err)return console.log(err)
    console.log('saved in db')
    res.redirect('/splitr')
  })
})


