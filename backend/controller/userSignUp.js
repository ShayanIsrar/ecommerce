const userModel = require("../models/userModel")

const bcrypt = require('bcryptjs');


const userSignUpController = async (req, res)=>{
    try {
        const {name, email, password} = req.body

        const user = await userModel.findOne({email})
        console.log("User", user)
        if(user){
            throw new Error("Already User Exist")
        }

        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!name){
            throw new Error("Please provide name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        }

        const userData = new userModel(payload) // also {email, password, name} and also (req.body)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User Created Successfully!"
        })
        

    } catch (err) {
       
        res.json({
            message: err.message || err,
            error :true,
            success : false
        })
    }
}

module.exports = userSignUpController