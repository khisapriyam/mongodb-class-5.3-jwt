
//auth middleware

const authCheck = (req, res, next ) => {
    console.log("user is okay");
    next();
}


module.exports = {
    authCheck
}