import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import crypto from 'crypto';

export const test = (req, res) => {
  res.json({
    message: 'yay! api connection successful',
  });
};

// Update user
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can update only your account!'));
  }
  
  try {
    // Hash the password if it's being updated
    if (req.body.password) {
      const salt = crypto.randomBytes(16).toString('hex');
      const hashedPassword = crypto.scryptSync(req.body.password, salt, 64).toString('hex');
      req.body.password = `${salt}:${hashedPassword}`;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

// Delete user
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can delete only your account!'));
  }
  
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...');
  } catch (error) {
    next(error);
  }
};
