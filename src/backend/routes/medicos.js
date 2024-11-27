import express from 'express';
import { getMedicos } from '../controllers/medicosController.js';


const router = express.Router();

router.get("/getMedicos", getMedicos)

export default router;