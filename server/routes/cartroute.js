const express = require('express');
const { addToCart, removeFromCart, updateCart } = require('../controllers/cartcontroller');

const router = express.Router();

router.post('/add', addToCart);
router.delete('/remove', removeFromCart);
router.put('/update', updateCart);

module.exports = router;
