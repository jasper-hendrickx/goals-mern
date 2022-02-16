const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Here are the goals!' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'New goal posted!' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Goal ${req.params.id} updated!` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Goal ${req.params.id} deleted!` });
});

module.exports = router;
