const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @description GET user goals
// @route       GET /api/goals
// @access      Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @description POST user goal
// @route       POST /api/goals
// @access      Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @description UPDATE user goal
// @route       PUT /api/goals/:id
// @access      Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @description DELETE user goal
// @route       DELETE /api/goals/:id
// @access      Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: `Goal ${req.params.id} deleted!` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
