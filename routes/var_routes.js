const express = require('express');
const router = express.Router({ mergeParams: true }); 
const var_con = require('../controller/var_controllr');

router.post('/', var_con.createVariant);
router.get('/', var_con.getVariants);
router.get('/:varId', var_con.getVariantById);
router.put('/:varId', var_con.updateVariant);
router.delete('/:varId', var_con.deleteVariant);

module.exports = router;
