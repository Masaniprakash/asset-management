// controllers/assetCategoryController.js
const { AssetCategory } = require('../models/index.js');

// Controller functions for handling asset category-related routes

const getAssetCategories = async (req, res) => {
    try {
        const assetCategories = await AssetCategory.findAll();
        res.status(200).send({ assetCategories });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAssetCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const assetCategory = await AssetCategory.findByPk(id);
        if (!assetCategory) {
            return res.status(404).send('Asset category not found');
        }
        res.status(200).send({ assetCategory });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const addAssetCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const newAssetCategory = await AssetCategory.create({ name });
        res.status(201).send('Asset category created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const editAssetCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const assetCategory = await AssetCategory.findByPk(id);
        if (!assetCategory) {
            return res.status(404).send('Asset category not found');
        }
        await assetCategory.update({ name });
        res.status(200).send('Asset category updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteAssetCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const assetCategory = await AssetCategory.findByPk(id);
        if (!assetCategory) {
            return res.status(404).send('Asset category not found');
        }
        await assetCategory.destroy();
        res.status(200).send('Asset category deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAssetCategories,
    getAssetCategoryById,
    addAssetCategory,
    editAssetCategory,
    deleteAssetCategory,
};
