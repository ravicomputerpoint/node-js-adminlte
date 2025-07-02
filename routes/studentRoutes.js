const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
const gradeController = require('../controllers/gradeController')

//Routes for students
router.get('/',studentController.dashboard)
router.get('/students',studentController.index)
router.get('/students/create',studentController.create)
router.post('/students/store',studentController.store)
router.get('/students/show/:id',studentController.show)
router.get('/students/edit/:id',studentController.edit)
router.post('/students/update/:id',studentController.update)
router.get('/students/delete/:id',studentController.delete)

//Routes for grades
router.get('/grades',gradeController.index)
router.get('/grades/create',gradeController.create)
router.post('/grades/store',gradeController.store)
router.get('/grades/show/:id',gradeController.show)
router.get('/grades/edit/:id',gradeController.edit)
router.post('/grades/update/:id',gradeController.update)
router.get('/grades/delete/:id',gradeController.delete)


module.exports = router