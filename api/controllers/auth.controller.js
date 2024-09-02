import User from '../models/user.model.js';
import crypto from 'crypto';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

 

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const salt = crypto.randomBytes(16).toString('hex');
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');
  const newUser = new User({
    username,
    email,
    password: `${salt}:${hashedPassword}`,
  });

  try {
    await newUser.save();
    res.status(201).json({
      message: "User created successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found'));

    const [salt, storedHashedPassword] = validUser.password.split(':');
    const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');

    if (hashedPassword !== storedHashedPassword) {
      return next(errorHandler(401, 'Wrong credentials'));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: _, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
