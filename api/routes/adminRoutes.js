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

/**
* @routes PUT
* @description Edit name in name and overview 
* @access Admin
*/
router.put("/update-name", adminControllers.updatename);

/**
* @routes PUT
* @description Edit overview in name and overview 
* @access Admin
*/
router.put("/update-overview", adminControllers.updateoverview);

/**
* @routes GET
* @description Fetch comp skills
* @access Admin
*/
router.get("/get-compskills", adminControllers.fetchcompskills);

/**
* @routes POST
* @description Add computational skill 
* @access Admin
*/
router.post("/add-compskills", adminControllers.addcompskill);

/**
* @routes POST
* @description Delete computational skill 
* @access Admin
*/
router.post("/delete-compskills", adminControllers.deletecompskill);

/**
* @routes GET
* @description Fetch noncomp skills
* @access Admin
*/
router.get("/get-noncompskills", adminControllers.fetchnoncompskills);

/**
* @routes POST
* @description Add noncomputational skill 
* @access Admin
*/
router.post("/add-noncompskills", adminControllers.addnoncompskill);

/**
* @routes POST
* @description Delete noncomputational skill 
* @access Admin
*/
router.post("/delete-noncompskills", adminControllers.deletenoncompskill);

/**
* @routes GET
* @description Fetch education
* @access Admin
 */
router.get("/get-education", adminControllers.fetcheducation);

/**
* @routes PUT
* @description Rearrange education array 
* @access Admin
*/
router.put("/rearrange-education", adminControllers.rearrangeeducation);

/**
* @routes POST
* @description Add education 
* @access Admin
*/  
router.post("/add-education", adminControllers.addeducation);

/**
* @routes PUT
* @description Update education
* @access Admin
*/
router.put("/update-education", adminControllers.updateeducation)

/**
* @routes POST
* @description Delete education
* @access Admin
*/
router.post("/delete-education", adminControllers.deleteeducation);

module.exports = router;