const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();
const userRoutes = require('./')

//Create new appointment.
router.get('/seed', async (req,res) => {
  let date = new Date(Date.now());

  await prisma.appointment.create({
    data: {
      email: 'bob@email.com',
      firstName: 'Bob',
      lastName: 'Darrel',
      cellphone: "0111111111",
      petName: 'DR Fluffls',
      petType: 'Cat',
      vistReason: 'I would like a normal checkup for my cat',
      appointmentStartDate: new Date(date.setDate(date.getDate()-10)).toISOString(),
      appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
    }
  });

    await prisma.appointment.create({
      data: {
        email: 'steve@email.com',
        firstName: 'Steve',
        lastName: 'Darrel',
        cellphone: "0835612921",
        petName: 'JoJo',
        petType: 'Dog',
        vistReason: 'Normal checkup',
        appointmentStartDate: new Date(date.setDate(date.getDate()-10)).toISOString(),
        appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
      }
    });

    await prisma.appointment.create({
      data: {
        email: 'dave@email.com',
        firstName: 'Dave',
        lastName: 'Darrel',
        cellphone: "0773273727",
        petName: 'Dave',
        petType: 'Cat',
        vistReason: 'I would like a normal checkup for my cat',
        appointmentStartDate: new Date(date.setDate(date.getDate()-10)).toISOString(),
        appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
      }
    });

    await prisma.appointment.create({
      data: {
        email: 'joe@newjoe.com',
        firstName: 'Joe',
        lastName: 'Joe',
        cellphone: "0855272618",
        petName: 'Dave',
        petType: 'Lizard',
        vistReason: 'Scale buildup',
        appointmentStartDate: new Date(date.setDate(date.getDate()-1)).toISOString(),
        appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
      },
    });

    await prisma.appointment.create({
      data: {
        email: 'dave@newjoe.com',
        firstName: 'David',
        lastName: 'Legrange',
        cellphone: "0855272673",
        petName: 'LeGreg',
        petType: 'Lizard',
        vistReason: 'Normal checkup',
        appointmentStartDate: new Date(date.setDate(date.getDate()-1)).toISOString(),
        appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
      },
    });

    await prisma.appointment.create({
      data: {
        email: 'oldjoe@newjoe.com',
        firstName: 'Joe Senior',
        lastName: 'Gregdefer',
        cellphone: "0855272619",
        petName: 'Steve',
        petType: 'Dog',
        vistReason: 'Ear swelling',
        appointmentStartDate: new Date(date.setDate(date.getDate()-1)).toISOString(),
        appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
      },
    });

    await prisma.appointment.create({
      data: {
        email: 'charles@gmail.com',
        firstName: 'Charley',
        lastName: 'Hanley',
        cellphone: "0885672618",
        petName: 'Nate',
        petType: 'Cat',
        vistReason: 'Rash on neck',
        appointmentStartDate: new Date(date.setDate(date.getDate()-1)).toISOString(),
        appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
      },
    });

    await prisma.appointment.create({
      data: {
        email: 'liam@gmail.com',
        firstName: 'Liam',
        lastName: 'Tems',
        cellphone: "0755272618",
        petName: 'Joe',
        petType: 'Dog',
        vistReason: 'Normal checkup',
        appointmentStartDate: new Date(date.setDate(date.getDate()-1)).toISOString(),
        appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
      },
    });

    await prisma.appointment.create({
      data: {
        email: 'joe2@gmail.com',
        firstName: 'Nate',
        lastName: 'Train',
        cellphone: "0855273618",
        petName: 'Dr Skate',
        petType: 'Budgie',
        vistReason: 'Normal checkup',
        appointmentStartDate: new Date(date.setDate(date.getDate()-1)).toISOString(),
        appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
      },
    });

    await prisma.appointment.create({
      data: {
        email: 'dave34@newjoe.com',
        firstName: 'Dave',
        lastName: 'Train',
        cellphone: "0875272618",
        petName: 'Nate',
        petType: 'Budgie',
        vistReason: 'Normal checkup',
        appointmentStartDate: new Date(date.setDate(date.getDate()-1)).toISOString(),
        appointmentEndDate: new Date(date.setHours(date.getHours()-1)).toISOString()
      },
    });

    res.send('Seed database');
});

module.exports = router;