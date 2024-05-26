const handleTaskErrors = (err) => {
    console.log(err.message, err.code)

    
        let taskErrors = {
            description: '',
            priority: '',
            category: '',
        }

        if( err.message.includes('Task validation failed')){
            Object.values(err.errors).forEach(({ properties }) => {
                taskErrors[properties.path] = properties.message
            })
        }
        return taskErrors
    
}

module.exports = handleTaskErrors