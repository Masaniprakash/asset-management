// src/routes/assetsRoute.js
const express = require('express');
const {
    getAssets,
    getAssetById,
    addAsset,
    editAsset,
    deleteAsset
} = require('../controllers/assetsController');

const router = express.Router();

// Asset routes
router.get('/', getAssets);
router.get('/:id', getAssetById);
router.post('/add', addAsset);
router.put('/edit/:id', editAsset);
router.get('/delete/:id', deleteAsset);

module.exports = router;
