import express from "express"
import {getUser,createUser,loginUser,completeOffer} from "../controllers/userController.js"



const router =express.Router();

router.get('/:id',getUser);

router.post("/", createUser);

router.post("/login",loginUser);

router.patch('/:userId/completeOffer/:offerId',completeOffer);

export default router;