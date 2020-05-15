const express = require('express')
const router = express.Router()
const { authControllers } = require('../controllers');

/**
 * @routes POST
 * @description Super Admin register Admin
 * @access Super Admin
 */
router.post('/admin-register', authControllers.adminRegister)

/**
 * @routes POST
 * @description Admin login action
 * @access Admin
 */
router.post('/admin-login', authControllers.adminLogin)

module.exports = router