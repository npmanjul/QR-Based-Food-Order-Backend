const { Schema } = require("mongoose");

const validate = (Schema) => async (req, res, next) => {
    try {
        const parseBody=await Schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const extraDetails=err.errors[0].message;
        const message="Fill this input properly"
        const status=422;

        const error={
            status,
            message,
            extraDetails
        };
        next(error)
    }
};

module.exports=validate;