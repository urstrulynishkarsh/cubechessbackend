const express=require('express')
const router = express.Router()

// import Controller
const {createStudent}=require('../controller/createStudent')

const {createTeacher}=require('../controller/createTeacher')




// mappings for routes
router.post("/createUser",createStudent)
router.post("/createTeacher",createTeacher)






// exports
module.exports = router;