const express = require('express')
const router = express.Router()

const { authenticateUser, authorizePermissions } = require('../middleware/authentication')
const { sendMessage, getMessage } = require('../controllers/messageController')

router.route('/:id').get(authenticateUser, getMessage)
router.route('/send/:id').post(authenticateUser, sendMessage)

module.exports = router