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



module.exports = handleErrors