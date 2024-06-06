const errormiddleware = (err,next,res,req)=>{
    const status = err.status || 500;
    const message = err.message || "Backend error";
    const extradetails = err.extradetails || "Error from backend";

    return res.status(status).json({message,extradetails});
};

module.exports = errormiddleware;