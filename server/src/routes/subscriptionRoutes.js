const express = require("express");
const { subscriptionBuy } = require("../controllers/subscriptionController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/subscriptionBuy", authMiddleware, subscriptionBuy)

module.exports = router;