import express from 'express'
import { login, signup } from '../controllers/login.controller.js';

const loginRouter = express.Router();

loginRouter.put('/signup', signup);
loginRouter.post('/login', login);

export default loginRouter 