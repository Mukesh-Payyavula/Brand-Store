const Product = require('../models/productmodel');

// In your addProduct function
const addProduct = async (req, res) => {
    try {
        const { title, description, price, category, rating } = req.body;

        // Validate the input
        if (!title || !description || !category || price === undefined || !rating) {
            return res.status(400).json({ message: "Title, description, category, price, and rating are required." });
        }

        const product = new Product({
            title,
            description,
            // Assuming you're now handling image URLs differently
            image: req.body.image || null, // Use a URL passed in the body
            price,
            category,
            rating
        });

        const createdProduct = await product.save();
        return res.status(201).json({
            message: "Product added successfully",
            product: createdProduct,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};

// Function to get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find(); 
        return res.status(200).json({
            totalProducts: products.length,
            products,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    addProduct,
    getAllProducts,
};
