import express from 'express';
import { Product } from '../Callbacks/Callback.js'

const router = express.Router();

router.get('/products',Product);

export default router;