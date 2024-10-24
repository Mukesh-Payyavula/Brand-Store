const Cart = require('../models/cartmodel');
const Product = require('../models/productmodel');

// Add item to cart
const addToCart = async (req, res) => {
    const { productId } = req.body;
  
    try {
      if (!productId) {
        return res.status(400).json({ message: "Product ID is required" });
      }
  
      let cart = await Cart.findOne();
  
      if (!cart) {
        cart = new Cart({ items: [{ productId, qty: 1 }] });
      } else {
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
  
        if (itemIndex > -1) {
          cart.items[itemIndex].qty += 1; // Increase quantity
        } else {
          cart.items.push({ productId, qty: 1 }); // Add new product
        }
      }
  
      await cart.save();
      res.status(200).json({ message: "Product added to cart", cart });
    } catch (err) {
      console.error("Error adding to cart:", err); // Improved error logging
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };
  

// Remove item from cart
const removeFromCart = async (req, res) => {
  const { productId } = req.body;

  try {
    const cart = await Cart.findOne();

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();
    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update item quantity in cart
const updateCart = async (req, res) => {
  const { productId, qty } = req.body;

  try {
    const cart = await Cart.findOne();

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (itemIndex > -1) {
      if (qty <= 0) {
        cart.items.splice(itemIndex, 1); // Remove item if quantity is zero or less
      } else {
        cart.items[itemIndex].qty = qty; // Update quantity
      }
      await cart.save();
      res.status(200).json({ message: "Cart updated", cart });
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  updateCart,
};
