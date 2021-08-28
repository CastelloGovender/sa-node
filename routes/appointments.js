const express = require("express");
const router = express.Router();
const {
    PrismaClient
} = require('@prisma/client');
const { json } = require("express");

const prisma = new PrismaClient()

// Health check
router.get('/', async (req, res) => {
    res.send('Server is running');
    const t = 1;
});

//Get all appointments.
router.get('/appointments', async (req, res) => {
    const allUsers = await prisma.appointment.findMany();
    res.send(allUsers);
});

router.post('/createappointment', async (req, res) => {

    const startDate = new Date(req.query.appointmentStartDate);
    const endDate = new Date(req.query.appointmentEndDate);

    const existStartDate = await prisma.appointment.findFirst({
        where: {
            appointmentStartDate: startDate,
        },
    });   
   
    if(existStartDate == null){
        const insertAppointment = await prisma.appointment.create({
            data: {
                email: req.query.email,
                firstName: req.query.firstName,
                lastName: req.query.lastName,
                cellphone: req.query.cellphone,
                petName: req.query.petName,
                petType: req.query.petType,
                vistReason: req.query.vistReason,
                appointmentEndDate: startDate,
                appointmentStartDate: endDate
            }            
        });
        console.log("Inserted Appointment");
        res.json(insertAppointment);
    }
    else{
        console.log("Appointment Conflicts!");
    } 

});

module.exports = router;