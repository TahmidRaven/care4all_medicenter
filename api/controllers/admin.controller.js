import Admin from '../models/admin.model.js';
import { errorHandler } from '../utils/error.js';

// Admin signup
export const adminSignup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const newAdmin = new Admin({
    username,
    email,
    password,  // Directly saving the password without hashing
  });

  try {
    await newAdmin.save();
    res.status(201).json({
      success: true,
      message: 'Admin created successfully!',
    });
  } catch (error) {
    next(error);
  }
};

// Admin signin
export const adminSignin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validAdmin = await Admin.findOne({ email });
    if (!validAdmin || validAdmin.password !== password) {
      return next(errorHandler(401, 'Invalid credentials'));
    }

    // Optionally create a token here if needed, but keeping it simple
    res.status(200).json({
      success: true,
      message: 'Admin signed in successfully!',
      admin: {
        id: validAdmin._id,
        username: validAdmin.username,
        email: validAdmin.email,
      },
    });
  } catch (error) {
    next(error);
  }
};
