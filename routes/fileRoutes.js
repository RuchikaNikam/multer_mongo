const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileController = require('../controllers/fileController');
const auth = require('../middlewares/auth');
const fileValidation = require('../middlewares/fileValidation');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ 
    storage: storage, 
    fileFilter: fileValidation.validateFileType 
});

router.post('/upload', auth.authenticate, upload.single('file'), fileController.uploadFile);
router.get('/:id', auth.authenticate, fileController.getFile);
router.put('/:id', auth.authenticate, fileController.updateFile);
router.delete('/:id', auth.authenticate, fileController.deleteFile);

module.exports = router;
