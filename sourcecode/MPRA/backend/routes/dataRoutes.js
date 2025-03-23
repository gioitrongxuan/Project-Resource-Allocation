const express = require('express');
const { splitTasksController } = require('../controllers/dataProcessingController');
const router = express.Router();

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


module.exports = router;