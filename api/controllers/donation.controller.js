import Donation from '../models/donation.model.js';

export const submitDonation = async (req, res, next) => {
  try {
    const { type, name, email, details } = req.body;
    const newDonation = new Donation({ type, name, email, details });
    await newDonation.save();

    res.status(201).json({
      success: true,
      message: 'Donation submitted successfully',
      data: newDonation
    });
  } catch (err) {
    next(err);
  }
};

export const getDonations = async (req, res, next) => {
  try {
    const donations = await Donation.find();
    res.status(200).json({
      success: true,
      data: donations
    });
  } catch (err) {
    next(err);
  }
};