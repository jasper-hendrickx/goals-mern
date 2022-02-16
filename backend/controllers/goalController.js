const asyncHandler = require('express-async-handler');

// @description GET user goals
// @route       GET /api/goals
// @access      Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Here are the goals!' });
});

// @description POST user goal
// @route       POST /api/goals
// @access      Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  res.status(200).json({ message: 'New goal posted!' });
});

// @description UPDATE user goal
// @route       PUT /api/goals/:id
// @access      Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Goal ${req.params.id} updated!` });
});

// @description DELETE user goal
// @route       DELETE /api/goals/:id
// @access      Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Goal ${req.params.id} deleted!` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
