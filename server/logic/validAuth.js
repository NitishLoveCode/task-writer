const validAuth = async (req, res) => {
    res.status(200).json({access:"valid"})
};
module.exports = validAuth
