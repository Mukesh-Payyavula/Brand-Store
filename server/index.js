const express = require('express'); 
const cors = require('cors');
const userRoutes = require('./routes/userroute');
const connectDB = require('./database/db');
const cartRoutes = require('./routes/cartroute');
const productRoutes = require('./routes/productroute');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("Welcome");
});

// Use the routes
app.use('/', userRoutes);
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));  
