const express = require('express');
const router = express.Router();
const Product = require('../model/productmodel');

router.get('/',async (req,res)=>{
    try {
        
        const query = req.query.q.toLowerCase();
        const results = await Product.find({
          $or: [
            { 'name': { $regex: query, $options: 'i' } },
            { 'description': { $regex: query, $options: 'i' } },
            { 'variants.name': { $regex: query, $options: 'i' } },
          ],
        });
        res.json(results);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

module.exports = router;
