const express = require('express')
const router = express.Router()

const Exercise = require('../models/Exercise') // change these, obviously
//const User = require("../models/Users");

router.post('/FinishExercise', async (req, res) => {
	const newExercise = new Exercise({
		exercises: {
			exercise1: req.body.exercise1,
			exercise2: req.body.exercise2,
			exercise3: req.body.exercise3,
		},
	}) 
	
  newExercise.save().catch((err) => console.log(err))
  res.sendStatus(200)
})

router.get('/getAllExercises', (req, res) => {
  
  Exercise.find({}, (err, exercises)=>{
    res.send(exercises)
  })
})

/*router.get("/GetExercise", async (req, res) => {
  Exercise.find({});
});*/

router.get('/test', (req, res) => {
	res.sendStatus(200)
})

module.exports = router
