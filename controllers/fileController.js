const File = require('../models/fileModel');
const fs = require('fs');
const path = require('path');

exports.uploadFile = async (req, res) => {
    try {
        const { originalname, path, mimetype, size } = req.file;
        const newFile = new File({ originalName: originalname, path, mimetype, size });
        await newFile.save();
        res.status(201).json(newFile);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) return res.status(404).json({ message: 'File not found' });
        res.status(200).json(file);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) return res.status(404).json({ message: 'File not found' });
        
        file.originalName = req.body.originalName || file.originalName;
        await file.save();
        res.status(200).json(file);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) return res.status(404).json({ message: 'File not found' });
        
        fs.unlinkSync(path.join(__dirname, '../', file.path));
        await file.remove();
        res.status(200).json({ message: 'File deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
