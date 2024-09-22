import Admin from '../models/admin.model.js';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const adminSignup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const newAdmin = new Admin({
    username,
    email,
    password, // No hashing
  });

  try {
    await newAdmin.save();
    res.status(201).json({
      success: true,
      message: "Admin created successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const adminSignin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validAdmin = await Admin.findOne({ email });
    if (!validAdmin) return res.status(404).json({ success: false, message: 'Admin not found' });

    if (password !== validAdmin.password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: validAdmin._id }, process.env.JWT_SECRET);
    res.status(200).json({ success: true, token });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
