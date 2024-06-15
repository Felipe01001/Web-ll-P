const {Catalog} = require('../models');
require('dotenv').config();

module.exports = class CatalogController {
    static async showAll(req, res) {
        try {
            const catalogs = await Catalog.findAll();
            res.status(200).json({
                data: catalogs
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async show(req, res) {
        try {
            const catalog = await Catalog.findByPk(req.params.id);
            if (!catalog) {
                return res.status(404).json({
                    message: 'Catalog not found'
                });
            }
            res.status(200).json(catalog);
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async create(req, res) {
        try {
            const { modelo, time, ano } = req.body;
            const newCatalog = await Catalog.create({
                modelo,
                time,
                ano
            });
            res.status(201).json({
                message: 'Catalog created successfully',
                data: newCatalog
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async update(req, res) {
        try {
            const catalog = await Catalog.findByPk(req.params.id);
            if (!catalog) {
                return res.status(404).json({
                    message: 'Catalog not found'
                });
            }
            const { modelo, time, ano } = req.body;
            await catalog.update({
                modelo,
                time,
                ano
            });
            res.status(200).json({
                message: 'Catalog updated successfully',
                data: catalog
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async delete(req, res) {
        try {
            const catalog = await Catalog.findByPk(req.params.id);
            if (!catalog) {
                return res.status(404).json({
                    message: 'Catalog not found'
                });
            }
            await catalog.destroy();
            res.status(200).json({
                message: 'Catalog deleted successfully'
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }
};
