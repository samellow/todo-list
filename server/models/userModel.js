const mongoose =require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'please enter first name']
    },
    lastName: {
        type: String,
        required: [true, 'please enter last name']
    },
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
        minlength: [6, 'minimum password length is 6 characters']
    },
    confirmPassword: {
        type: String,
        required: [true, 'please confirm password '],
        minlength: [6, 'minimum password length is 6 characters']

    }
},{timestamps: true})

userSchema.pre('save', async function (next){
  if(this.password === this.confirmPassword){
    const salt =  await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
  }
  else {
    throw Error ('passwords do not match')
  }

  next()
})

userSchema.statics.login= async function(email, password ) {
  const user = await this.findOne({email})
  if(user) {
    const auth = await bcrypt.compare(password, user.password)
    if(auth) {
      return user
    }
    throw Error('incorrect password')
  }
  throw Error('incorrect email')
}

const User = mongoose.model('User', userSchema)

module.exports = User