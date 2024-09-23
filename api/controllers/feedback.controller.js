import Feedback from '../models/feedback.model.js';

export const submitFeedback = async (req, res, next) => {
  try {
    const { providerId, rating, review, comments } = req.body;
    const newFeedback = new Feedback({ providerId, rating, review, comments });
    await newFeedback.save();

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      data: newFeedback
    });
  } catch (err) {
    next(err);
  }
};

export const getFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.find().populate('providerId');
    res.status(200).json({
      success: true,
      data: feedback
    });
  } catch (err) {
    next(err);
  }
};