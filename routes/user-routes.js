import express from 'express';
import {
    getAllUser,
    singup
} from '../controllers/user-controller';

const router = express.Router();
router.get("/", getAllUser);
router.post("/singup", singup);

export default router;