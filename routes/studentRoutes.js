const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

router.get('/',studentController.dashboard)
router.get('/students',studentController.index)
router.get('/students/create',studentController.create)
router.post('/students/store',studentController.store)
router.get('/students/show/:id',studentController.show)
router.get('/students/edit/:id',studentController.edit)
router.post('/students/update/:id',studentController.update)
router.get('/students/delete/:id',studentController.delete)

module.exports = router