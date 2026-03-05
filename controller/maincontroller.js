const user = require("../model/user");
const address = require("../model/address");
const category = require("../model/Category");
const product = require("../model/product");
const order = require("../model/order");
const payment = require("../model/payment");
const wishlist = require("../model/wishlist");
const cart = require("../model/cart");
const coupon = require("../model/coupon");
const review = require("../model/review");

exports.getAllData = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const types = req.query.type; // optional

    // જો query ના હોય તો બધું data લાવો
    if (!types) {

      const [users, addresses, categories, products, orders, payments, wishlists, carts, coupons, reviews] = await Promise.all([
        user.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        address.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        category.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        product.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        order.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        payment.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        wishlist.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        cart.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        coupon.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        review.find().sort({ createdAt: -1 }).skip(skip).limit(limit)
      ]);

      return res.status(200).json({
        status: "success",
        page,
        limit,
        data: {
          users,
          addresses,
          categories,
          products,
          orders,
          payments,
          wishlists,
          carts,
          coupons,
          reviews
        }
      });
    }

    // specific type
    const typeArray = types.split(",");
    let result = {};

    if (typeArray.includes("users")) {
      result.users = await user.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    if (typeArray.includes("addresses")) {
      result.addresses = await address.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    if (typeArray.includes("categories")) {
      result.categories = await category.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    if (typeArray.includes("products")) {
      result.products = await product.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    if (typeArray.includes("orders")) {
      result.orders = await order.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    if (typeArray.includes("payments")) {
      result.payments = await payment.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    if (typeArray.includes("wishlists")) {
      result.wishlists = await wishlist.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    if (typeArray.includes("carts")) {
      result.carts = await cart.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    if (typeArray.includes("coupons")) {
      result.coupons = await coupon.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    if (typeArray.includes("reviews")) {
      result.reviews = await review.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }

    res.status(200).json({
      status: "success",
      page,
      limit,
      data: result
    });

  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message
    });
  }
};