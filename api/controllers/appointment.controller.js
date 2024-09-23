import Appointment from '../models/appointment.model.js';
import nodemailer from 'nodemailer';

export const bookAppointment = async (req, res, next) => {
  try {
    const { providerId, date, time, email } = req.body;
    const newAppointment = new Appointment({ providerId, date, time, email });
    await newAppointment.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Appointment Confirmation',
      text: `Your appointment with provider ${providerId} on ${date} at ${time} has been confirmed.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      data: newAppointment
    });
  } catch (err) {
    next(err);
  }
};

export const getAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find().populate('providerId');
    res.status(200).json({
      success: true,
      data: appointments
    });
  } catch (err) {
    next(err);
  }
};