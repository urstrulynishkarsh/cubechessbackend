const CoachHiring=require('../model/hiring')

exports.createTeacher = async(req,res)=>{
    try{

        console.log("request body: ", req.body)

        // extract parentName,email,phoneNumber,childName,age,experience,country from request body
        const {fullName,email,phoneNumber,city,state,address,country,experience,qualification, additionalInfo} = req.body;
        if (!fullName || !email || !phoneNumber || !city || !address || !state || !experience || !country || !qualification ) {
            console.log("not all fields filled...");
            return res.status(400).json({
              status: 400,
              message: "Please fill all fields",
            });
        }


        //create new object and insert into the mongoDB collection 
        const response = await CoachHiring.create({fullName,email,phoneNumber,city,address,state,country,experience,qualification, additionalInfo})

        return res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Coach hiring form submitted successfully.'
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
