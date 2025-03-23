const express = require('express');
const { handleJsonUpload, readServerFile } = require('../controllers/fileController');
const { splitTasksController } = require('../controllers/dataProcessingController');
const { handleJsonUploadTaskInPast, readServerFileTaskInPast } = require('../controllers/taskInPastController');
const router = express.Router();

router.post('/json', handleJsonUpload);
router.get('/read-server-file/:filename', readServerFile);

router.post('/json-task-past', handleJsonUploadTaskInPast);
router.get('/read-server-file-task-past/:filename', readServerFileTaskInPast);


module.exports = router;
