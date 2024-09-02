import User from '../models/user.model.js';
import crypto from 'crypto';
 

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const salt = crypto.randomBytes(16).toString('hex');
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');
  const newUser = new User({ username, email, password: hashedPassword });

  try {

    await newUser.save();
    res.status(201).json({
      message: "User created successfully!",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }


} 