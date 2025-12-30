import express from 'express'
import { add, subtract, multiply, divide } from '../controllers/calculator.controller.js'
const calculatorRouter = express.Router();


calculatorRouter.get('/add', add);
calculatorRouter.get('/subtract', subtract);
calculatorRouter.get('/multiply', multiply);
calculatorRouter.get('/divide', divide);

export default calculatorRouter 