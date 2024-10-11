const userModel = require("../models/userModel")

const allUsers = async(req,res)=>{
    try {
        console.log("All Users ", req.userId)

        const allUsers = await userModel.find()

        res.json({
            message: "All users",
            data: allUsers,
            success: true,
            error: false
        })
    } catch (err) {
        res.status(500).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = allUsers