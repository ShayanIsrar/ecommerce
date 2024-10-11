const jwt = require('jsonwebtoken')


const authToken = async(req, res, next)=>{
    try {
        const token = req.cookies?.token

        // console.log("Token", token)
        if(!token){
            return res.status(400).json({
                message: "User not Login",
                error: true,
                success: false
            })
        }

        // jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded){
        //     console.log(err)
        //     console.log('Decoded', decoded)
        // })

        // if(err){
        //     console.log("Error Auth", err)
        //     return res.status(401).json({
        //         message: "Invalid token",
        //         error: true,
        //         success: false,
        //     })
        // }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
              // Token is invalid or expired
              return res.status(401).json({
                message: "Invalid or expired token",
                error: true,
                success: false,
              });
            }

        req.userId = decoded?._id
        next()
    })

    } catch (err) {
        res.status(500).json({
            message : err.message ||"Something went wrong",
            data : [],
            error : true,
            success : false
        })
    }
}

module.exports = authToken