exports.generateNumbers = (req, res) => {
    const quantity = parseInt(req.query.quantity, 10);
    let numbers = [];
    if (quantity && quantity > 0) {
        numbers = Array.from({ length: quantity }, (_, i) => i + 1);
    }
    res.render('components/container-numbers', { numbers }); 
};