const { Product } = require('../models/product')
const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
  const product = await Product.find();

  if (!product) {
    res.status(500).json({ success: false });
  }
  res.send(product);
});

module.exports = router;
