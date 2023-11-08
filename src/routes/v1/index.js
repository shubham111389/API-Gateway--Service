const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();
const userRouter = require('./user-routes');


router.get('/info', InfoController.info);
router.use('/signup', userRouter)


module.exports = router;