const express = require('express');
const router = express.Router();
const pr_con = require('../controller/pr_controller');

router.post('/', pr_con.createProduct);
router.get('/', pr_con.getProducts);
router.get('/:id', pr_con.getProductById);
router.put('/:id', pr_con.updateProduct);
router.delete('/:id', pr_con.deleteProduct);
router.get('/search', pr_con.searchProducts);

module.exports = router;
