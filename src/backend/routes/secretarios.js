import express from 'express';
import { getSecretarios } from '../controllers/secretariosController.js';


const router = express.Router();

router.get("/getSecretarios", getSecretarios)

export default router;