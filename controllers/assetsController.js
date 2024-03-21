// controllers/assetsController.js
const { Asset } = require('../models/index.js');

// Controller functions for handling asset-related routes

const getAssets = async (req, res) => {
    try {
        const assets = await Asset.findAll();
        res.status(200).send({ assets });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAssetById = async (req, res) => {
    const { id } = req.params;
    try {
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).send('Asset not found');
        }
        res.status(200).send({ asset });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


const addAsset = async (req, res) => {
    const { name } = req.body;
    try {
        const newAsset = await Asset.create({ name });
        res.status(201).send('Asset created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteAsset = async (req, res) => {
    const { id } = req.params;
    try {
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).send('Asset not found');
        }
        await asset.destroy();
        res.status(200).send('Asset deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const editAsset = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).send('Asset not found');
        }
        await asset.update({ name });
        res.status(200).send('Asset updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAssets,
    getAssetById,
    addAsset,
    deleteAsset,
    editAsset
};
