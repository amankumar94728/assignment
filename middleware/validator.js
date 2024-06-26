const Joi = require('joi');

const validateUser = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        age: Joi.number().required(),
        city: Joi.string().required(),
        zipCode: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = { validateUser };
