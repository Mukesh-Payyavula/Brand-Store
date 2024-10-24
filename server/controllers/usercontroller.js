
const User = require('../models/usermodel');
const bcrypt = require('bcryptjs');

// Register a new user
exports.register = (req, res) => {
    const { name, email, password } = req.body; // Ensure email is included

    // Check if user already exists
    User.findOne({ name })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash the password
            return bcrypt.hash(password, 10).then(hashedPassword => {
                // Create a new user
                const user = new User({ name, email, password: hashedPassword });
                return user.save();
            });
        })
        .then(() => {
            res.status(201).json({ message: 'User registered successfully' });
        })
        .catch(error => {
            res.status(500).json({ message: 'Server error', error });
        });
};

// Login user
exports.login = (req, res) => {
    const { email, password } = req.body; // Change to use email instead of name

    // Find the user by email
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // Compare passwords
            return bcrypt.compare(password, user.password).then(isMatch => {
                if (!isMatch) {
                    return res.status(400).json({ message: 'Invalid credentials' });
                }

                res.status(200).json({ message: 'Login successful' });
            });
        })
        .catch(error => {
            res.status(500).json({ message: 'Server error', error });
        });
};

