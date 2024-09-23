import User from '../models/User.js';

export const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { email, ...updateData } = req.body;
    const user = await User.findOneAndUpdate({ email }, updateData, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};