const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

router.get('/',studentController.index)
router.get('/create',studentController.create)
router.post('/store',studentController.store)
router.get('/show/:id',studentController.show)
router.get('/edit/:id',studentController.edit)
router.post('/update/:id',studentController.update)
router.get('/delete/:id',studentController.delete)

module.exports = router