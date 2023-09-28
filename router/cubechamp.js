const express=require('express')
const router = express.Router()

// import Controller
const {createStudent}=require('../controller/createStudent')

const {createTeacher}=require('../controller/createTeacher')

const {increment,getCount}=require('../controller/CheckVisiter')




// mappings for routes
router.post("/createUser",createStudent)
router.post("/createTeacher",createTeacher)

router.post("/increment",increment);
router.get("/getcount",getCount)



// exports
module.exports = router;