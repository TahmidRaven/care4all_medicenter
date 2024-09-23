import Question from '../models/question.model.js';
import { errorHandler } from '../utils/error.js';

export const addQuestion = async (req, res, next) => {
  const { question, correctAnswer, falseAnswers } = req.body;

  try {
    const newQuestion = new Question({
      question,
      correctAnswer,
      falseAnswers,
    });

    await newQuestion.save();
    res.status(201).json({
      message: "Question added successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const getRandomQuestions = async (req, res, next) => {
    try {
      const questions = await Question.aggregate([{ $sample: { size: 5 } }]);
      res.status(200).json(questions);
    } catch (error) {
      next(error);
    }
  };