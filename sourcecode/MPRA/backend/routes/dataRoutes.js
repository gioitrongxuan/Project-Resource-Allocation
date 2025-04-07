const express = require('express');
const { splitTasksController ,findPreceedingTasksController} = require('../controllers/dataProcessingController');
const router = express.Router();
const { processCPM } = require('../services/processCPM');

router.post('/split-tasks', async (req, res) => {
    try {
        const tasks = req.body.tasks;
        const result = await splitTasksController(tasks);
        console.log(result);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/find-preceeding-tasks', async (req, res) => {
    try {
        const tasks = req.body;
        const result = await findPreceedingTasksController(tasks);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post("/cpm", async (req, res) => {
    try {
      const { tasks } = req.body;
      const result = await processCPM(tasks);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
module.exports = router;