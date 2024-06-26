const userDao = require('../dao/userDao');

const createUser = async (userData) => {
    // Add business logic if necessary
    return await userDao.createUser(userData);
};

// Define other service functions similarly

module.exports = { createUser };
