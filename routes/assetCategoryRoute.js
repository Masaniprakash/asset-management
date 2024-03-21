// src/routes/assetCategoryRoute.js
const express = require('express');
const {
    getAssetCategories,
    getAssetCategoryById,
    addAssetCategory,
    editAssetCategory,
    deleteAssetCategory
} = require('../controllers/assetCategoryController');

const router = express.Router();

// Asset Category routes
router.get('/', getAssetCategories);
router.get('/:id', getAssetCategoryById);
router.post('/add', addAssetCategory);
router.put('/edit/:id', editAssetCategory);
router.get('/delete/:id', deleteAssetCategory);

module.exports = router;
