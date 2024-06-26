const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const handleErrors = require('../utils/handleErrors')


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
        res.status(201).json({ user: { 
            token: token,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            _id: user._id}})        
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
        res.status(201).json({ user: { 
            token: token,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            _id: user._id}})   
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

