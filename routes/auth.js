import { Router } from "express";
const router = Router();

// Add routes
router.get('/', (req,res)=>{
    res.send('km');
});
router.get('/register', (req,res)=>{
    res.send('register');
});

export default router;
