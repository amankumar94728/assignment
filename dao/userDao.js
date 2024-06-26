const User = require('../models/userModel');

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

// Define other CRUD operations similarly

module.exports = { createUser };
