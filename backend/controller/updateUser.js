const userModel = require("../models/userModel")

const updateUser = async(req, res)=>{
    try {
        const sessionUser = req.userId
        const { userId, name, email, role } = req.body
        const payload = {
            ...(name && {name : name}),
            ...(email && {email : email}),
            ...(role && {role : role}),
        }
        const user = await userModel.findById(sessionUser)
        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        res.json({
            data: updateUser,
            message: "User Updated",
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

module.exports = updateUser