const StudentEnrollment=require("../model/Student")

exports.createStudent = async(req,res)=>{
    try{

        console.log("request body: ", req.body)

        // extract parentName,email,phoneNumber,childName,age,experience,country from request body
        const {parentName,email,phoneNumber,childName,age,experience,country,additionalInfo} = req.body;
        if (!parentName || !email || !phoneNumber || !childName || !age || !experience || !country) {
            console.log("not all fields filled...");
            return res.status(400).json({
              status: 400,
              message: "Please fill all fields",
            });
        }


        //create new object and insert into the mongoDB collection 
        const response = await StudentEnrollment.create({parentName,email,phoneNumber,childName,age,experience,country,additionalInfo})

        return res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Student enrollment created successfully.' 
            });
    }
    catch (error) {
        console.log("error", error);
        return res.status(500).json(
        {
            success: false,
            data:"Internal Server Problem",
            status: 500,
            message: error.message,
        });
      }
}