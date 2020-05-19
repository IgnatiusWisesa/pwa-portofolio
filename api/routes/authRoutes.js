const express = require('express')
const router = express.Router()
const { authControllers } = require('../controllers');
const { verifyToken } = require('./../helper/tokens')

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

/**
 * @routes POST
 * @description Verify admin access
 * @access Admin
 */
router.post('/admin-verify', verifyToken, authControllers.adminVerify)

module.exports = router