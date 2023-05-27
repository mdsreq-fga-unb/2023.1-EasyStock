const create = (req, res) => {
    const product = req.body;

    res.json(product);
}

module.exports = { create }