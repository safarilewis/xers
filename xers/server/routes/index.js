const express = require('express');
const userModel = require('../utils/model')
const projectModel = require('../utils/projectModel')
const app = express();
const router = express.Router()
const { register } = require('../controllers/user-controller')

//TODO: Move functions to controllers
app.use(express.json())
router.route("/register").post(register);

app.use("/users", router)

app.get("/users", async (request, response) => {
  const users = await userModel.find({});
  try {
    response.send(users);
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