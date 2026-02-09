const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const diagnosisConclusionRoutes = require('./routes/diagnosis_conclusion.routes');
//const Joi = require('joi');



const app = express();

app.use(express.json());
app.use(cors());


app.use("/api", authRoutes);
app.use("/api/diagnosis_conclusion", diagnosisConclusionRoutes);


app.listen('3000', () => console.log(`Server started`));




