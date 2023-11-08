const express = require('express');
const { AuthRequestMiddlewares } = require('../../middlewares');

const { InfoController } = require('../../controllers');

const router = express.Router();
const userRouter = require('./user-routes');

router.get('/info',AuthRequestMiddlewares.checkAuth, InfoController.info);

router.use('/user', userRouter)



module.exports = router;