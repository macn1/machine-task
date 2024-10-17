const express = require('express')

const router = express.Router()


const{createUser,loginUser,verifytoken} = require('../controller/userController')


router.post('/signup',createUser)
router.post('/login',loginUser)

router.get('/verify', verifytoken);

module.exports = router