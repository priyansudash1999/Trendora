import jwt from "jsonwebtoken"

const adminAuth = async(req, res, next) => {
  try {
    const {token} = req.headers
    if(!token){
      return res.json({
        success: false,
        message: "Not Authorized Login again"
      })
    }
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
    if(decodeToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
      return res.json({
        success: false,
        message: "Not Authorized Login again"
      })
    }
    next()
  } catch (error) {
    return res.json({
        success: false,
        message: error.message
      })
  }
}

export default adminAuth