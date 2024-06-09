const router = require("express").Router();
const { TutorPrices } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const tutorPricesData = await TutorPrices.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(tutorPricesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
