const mentor = require('./mentor');
const bcrypt = require('bcrypt')

exports.registerMentor = async (req, res, next) => {
    const { email, password, firstName, lastName, cohort, role } = req.body
    if (password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" })
    }
    else if (!email && !firstName && !lastName && !lastName && !cohort && !role) {
        return res.status(400).json({ message: "Incorrect data" });
    }

    bcrypt.hash(password, 10).then(async (hash) => {
        await mentor.create({
            email,
            password: hash,
            firstName,
            lastName,
            cohort,
            role
        })
        .then((Mentor)=>{
            res.status(200).json({
                message: "User created successfully",
                Mentor
            })
            
        })
        .catch((error)=>{
            res.status(400).json({
                message: "User creation failed",
                error: error.message
            })
        })
    })
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    //Check if email and Password were provided.
    if (!email || !password) {
        return res.status(400).json({
            message: "Email or Password not present",
        })
    }
    try {
        const mentors = await mentor.findOne({ email })
        if (!mentors) {
            res.status(401).json({
                message: "Login not successful",
                error: "User not found",
            })
        } else {
            bcrypt.compare(password, mentors.password).then(function (result) {
                result
                  ? res.status(200).json({
                      message: "Login successful",
                      mentors,
                    })
                  : res.status(400).json({ message: "Login not succesful" })
              })
            }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}
