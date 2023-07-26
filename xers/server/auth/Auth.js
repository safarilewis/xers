const mentor = require('./mentor');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwtSecret = 'bbd106011e8f12bff0d60fd3b7c4290240cb6cb33583c8c37de0163cd5867dc284d530'

exports.registerMentor = async (req, res, next) => {
    const { email, password, firstName, lastName, cohort, role, description, title } = req.body
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
            role,
            description,
            title
        })
            .then((Mentor) => {
                const maxAge = 3 * 60 * 60;
                const token = jwt.sign(
                    { id: Mentor._id, email, role: Mentor.role },
                    jwtSecret,
                    {
                        expiresIn: maxAge, // 3hrs in sec
                    }
                );
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000, // 3hrs in ms
                });
                res.status(200).json({
                    message: "User created successfully",
                    Mentor
                })

            })
            .catch((error) => {
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
                if (result) {
                    const maxAge = 3 * 60 * 60;
                    const token = jwt.sign(
                      { id: mentors._id, email, role: mentors.role },
                      jwtSecret,
                      {
                        expiresIn: maxAge, // 3hrs in sec
                      }
                    );
                    res.cookie("jwt", token, {
                      httpOnly: true,
                      maxAge: maxAge * 1000, // 3hrs in ms
                    });
                    res.status(201).json({
                      message: "User successfully Logged in",
                      user: mentors._id,
                    });
                  } else {
                    res.status(400).json({ message: "Login not succesful" });
                  }
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}
exports.getMentors = async (req, res, next) => {
    await mentor.find({})
      .then(users => {
        const userFunction = users.map(user => {
          const container = {}
          container.email = user.email
          container.firstName = user.firstName
          container.lastName = user.lastName
          container.description = user.description
          container.title = user.title
          container.cohort = user.cohort
          return container
        })
        res.status(200).json({ user: userFunction })
      })
      .catch(err =>
        res.status(401).json({ message: "Not successful", error: err.message })
      )
  }