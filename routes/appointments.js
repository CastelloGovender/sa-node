const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Health check
router.get('/', async (req,res) => {
    res.send('Server is running');
    const t = 1;
});

//Get all appointments.
router.get('/appointments', async (req,res) => {
    const allUsers = await prisma.appointment.findMany();
    res.send(allUsers);
});

// create app
router.post('/appointments', async (req,res) => {
    const appName = req.params.get('appName')
    const allUsers = await prisma.appointment.create(appName);
    res.json(allUsers);
});

//signup and sign in
const userCtrl = require('../controllers/users')
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;