import userModel from "../models/userModel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const createToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

const loginUser = async(req, res) => {

}

const registerUser = async(req, res) => {
  try {
    const {name, email, password} = req.body

    // Check user exist or not using email
    const existUser = await userModel.findOne({email})

    if(existUser){
      return res.json({
        success: false,
        message: 'User exists in our database'
      })
    }

    // check password and email validation
    if(!validator.isEmail(email)){
      return res.json({
        success: false,
        message: 'Invalid email'
      })
    }

    if(password.length < 8){
      return res.json({
        success: false,
        message: 'Password is weak, Password must has 8 Characters'
      })
    }

    // encode user password
    const salt = await bcrypt.genSalt(8)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id)

    res.json({
      success: true, token
    })

  }
   catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message
    })
  }
}

const adminLogin = async(req, res) => {

}

export {loginUser, registerUser, adminLogin}