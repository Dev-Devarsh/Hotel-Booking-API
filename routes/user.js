import { Router } from "express";

const router = Router();

// Add routes
router.get('/', (req,res)=>{
    res.send('km');
});
router.get('/user', (req,res)=>{
    res.send('register');
});

export default router;
