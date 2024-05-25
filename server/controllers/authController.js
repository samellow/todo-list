const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const handleErrors = (err) => {
    
    console.log(err.message, err.code)
    let errors = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }

    if(err.code === 11000){
        errors.email = "email already registered"
        return errors
    }
    if(err.message === 'incorrect password'){
        errors.password = "incorrect  password" 
    }

    if(err.message === 'incorrect email'){
        errors.email = "incorrect email"
    }

    if(err.message === 'passwords do not match'){
        errors.password = "passwords do not match"
    }

    if(err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}

const maxAge = 60 * 60 * 24
const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET, {
        expiresIn: maxAge
    } )

}

const signup = async(req,res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body
        const user = await User.create({ firstName, lastName, email, password, confirmPassword})
        const token = createToken(user._id)
        res.cookie('jwt', token, { maxAge: maxAge * 1000, httpOnly: true})
        res.status(201).json({ user: user._id })        
    } catch (error) {
        const errors = handleErrors(error)
        res.status(400).json({ errors })
    }
}

const login = async (req, res) => {
    try {
        const {email, password } = req.body
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { maxAge: maxAge * 1000, httpOnly: true})
        res.status(200).json({ user: user._id })
    } catch (error) {
        const errors = handleErrors(error)
        res.status(400).json({ errors })
    }
}
 const logout = async (req, res) => {
    res.cookie('jwt', '', {maxAge: 1})
    res.redirect('/login')
 }

 module.exports = {
    signup,
    login,
    logout
}

