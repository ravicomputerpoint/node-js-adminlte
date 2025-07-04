const express = require('express')
const router = express.Router()
const gradeController = require('../controllers/gradeController')

router.get('/', gradeController.index)
router.get('/create', gradeController.create)
router.post('/store', gradeController.store)
router.get('/show/:id', gradeController.show)
router.get('/edit/:id', gradeController.edit)
router.post('/update/:id', gradeController.update)
router.get('/delete/:id', gradeController.delete)

module.exports = router
