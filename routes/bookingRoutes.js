const express = require("express");
const sendBookingEmail = require("../utils/sendBookingEmail");
const router = express.Router();

router.post("/book", async (req, res) => {
  try {
    const bookingData = req.body;

    // ✅ Send to Admin
    await sendBookingEmail(bookingData, "bookings@gotogotravelsolutions.com", true);

    // ✅ Send to User
    await sendBookingEmail(bookingData, bookingData.userEmail, false);

    res.status(200).json({ success: true, message: "Emails sent" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

module.exports = router;
