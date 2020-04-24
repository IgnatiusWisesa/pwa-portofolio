const express = require('express')
const router = express.Router()
const { adminControllers } = require('../controllers');

/**
* @routes GET
* @description Fetch name in name and overview 
* @access Admin
 */
router.get("/get-name", adminControllers.fetchname);

/**
* @routes GET
* @description Fetch overview in name and overview 
* @access Admin
 */
router.get("/get-overview", adminControllers.fetchoverview);

module.exports = router;