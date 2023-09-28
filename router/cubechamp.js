const express=require('express')
const router = express.Router()

// import Controller
const {createStudent}=require('../controller/createStudent')

const {createTeacher}=require('../controller/createTeacher')

const {getVisitorCount}=require('../controller/CheckVisiter')




// mappings for routes
router.post("/createUser",createStudent)
router.post("/createTeacher",createTeacher)

router.get("/",getVisitorCount);




// exports
module.exports = router;