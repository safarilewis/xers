const express = require('express');
const userModel = require('../utils/model')
const projectModel = require('../utils/projectModel')
const app = express();
const router = express.Router()
const { register } = require('../controllers/user-controller')
const cors = require('cors')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() });
const { registerMentor, login, getMentors } = require('../auth/Auth')
const { userAuth } = require('../middleware/auth-middleware.js')

//TODO: Move functions to controllers
app.use(express.json())
app.use(cors())


router.route("/register").post(registerMentor);
router.route("/login").post(login, userAuth)
router.route("/getUsers").get(getMentors, userAuth)
app.use("/mentors/auth", router)


router.route("/hof").post(register);

app.use("/users", upload.single('image'), router)

app.get("/users", async (request, response) => {
  const users = await userModel.find({});
  try {
    const formattedUsers = users.map(user => ({
      id: user._id,
      name: user.firstName + ' ' + user.lastName,
      location: user.location,
      techStacks: user.techStacks,
      image: user.image,
      title: user.title,
      description: user.description
    }));
    response.send(formattedUsers);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.post("/projects", async (request, response) => {
  const project = new projectModel(request.body);
  try {
    await project.save()
    response.send(`${project.name} saved successfully!`)
  } catch (error) {
    response.send(error);
  }
})
app.get("/", (request, response) => {
  response.send("Welcome to Xers")
});


module.exports = app