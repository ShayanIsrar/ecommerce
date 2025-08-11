const userModel = require("../../models/userModel");

const userDetailsController = async (req, res) => {
  try {
    console.log("userId", req.userId);

    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "user details",
    });

    console.log("user", user);
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userDetailsController;
