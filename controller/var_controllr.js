const Product = require('../model/productmodel');


exports.createVariant = async (req, res) => {
    try {
        const productId = req.params.prId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        product.variants.push(req.body);
        await product.save();
        res.status(201).json(product.variants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.getVariants = async (req, res) => {
    try {
        const productId = req.params.prId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product.variants);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getVariantById = async (req, res) => {
    try {
        const productId = req.params.prId;
        const variantId = req.params.varId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const variant = product.variants.id(variantId);
        if (!variant) {
            return res.status(404).json({ error: 'Variant not found' });
        }
        res.json(variant);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.updateVariant = async (req, res) => {
    try {
        const productId = req.params.prId;
        const variantId = req.params.varId;
        const updates = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const variant = product.variants.id(variantId);
        if (!variant) {
            return res.status(404).json({ error: 'Variant not found' });
        }
        Object.assign(variant, updates);
        await product.save();
        res.json(variant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.deleteVariant = async (req, res) => {
    try {
        const productId = req.params.prId;
        const variantId = req.params.varId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const variant = product.variants.id(variantId);
        if (!variant) {
            return res.status(404).json({ error: 'Variant not found' });
        }
        variant.deleteOne();
        await product.save();
        res.json({ message: 'Variant deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
