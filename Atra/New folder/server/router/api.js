const router=require('express').Router();
const {createUser, getAllusers,getUserById}=require('../controller/userController')

router.post('/createUser',createUser)
// router.post('/checkPermission',checkPermission)

router.get('/getAllusers',getAllusers)
router.get('/getUserById/:id',getUserById)

// router.patch('/updateEmploye/:id',updateEmploye)

module.exports=router;
