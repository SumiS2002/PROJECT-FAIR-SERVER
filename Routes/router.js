const express = require('express')
const userController = require('../Controller/userController')
const projectController = require('../Controller/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
const router = new express.Router()

//register route

router.post('/register',userController.register)

//login route
router.post('/login',userController.login)


//addproject route
router.post("/add-project",jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//get all projects
router.get("/all-projects",jwtMiddleware,projectController.getAllProjects)
 
//user project
router.get("/user-projects",jwtMiddleware,projectController.getUserProjects)

//home project
router.get("/home-projects",projectController.getHomeProjects)

//edit project
router.put('/edit-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)


//remove
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)

//edit user
router.put('/edit-user',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)

//export router

module.exports = router