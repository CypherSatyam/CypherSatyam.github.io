const validator = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        console.log(err)
        const status = 422;
        const extradetails = err.errors;
        const message = "Fill the proper details";

        const error = {
            status,
            message,
            extradetails,
        }
        next(error);

    }
}
module.exports = validator;