const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const db = require('./utils/db');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/worko', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    db.connect();
});
