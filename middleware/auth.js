const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    // Basic Auth implementation
    const [type, credentials] = authHeader.split(' ');
    if (type !== 'Basic' || !credentials) {
        return res.status(401).json({ error: 'Invalid Auth' });
    }
    // Validate credentials (skip actual validation for simplicity)
    next();
};

module.exports = auth;
