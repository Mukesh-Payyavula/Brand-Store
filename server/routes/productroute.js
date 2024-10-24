const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts } = require('../controllers/productcontroller');

router.post('/', addProduct);
router.get('/all', getAllProducts);

module.exports = router;
