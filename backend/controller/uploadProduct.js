async function UploadProductController(req, res) {
  try {
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
