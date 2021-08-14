const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Health check
router.get('/', async (req,res) => {
    const t = 1;
    res.send('Server is running');
});

//Get all appointments.
router.get('/appointments', async (req,res) => {
    const allUsers = await prisma.appointment.findMany();
    res.send(allUsers);
});

module.exports = router;