import express from "express";
import cors from 'cors'


import calculatorRouter from "./routes/calculator.route.js";
import notesRouter from "./routes/notes.routes.js";
import loginRouter from "./routes/login.route.js";

const app = express();
app.use(express.json())
app.use(cors())

// app.use(calculatorRouter)
app.use('/calculator', calculatorRouter);
app.use('/notes', notesRouter);
app.use('/noteslogin', loginRouter);

app.listen(8000, () => {
    console.log("app is listenging");
})