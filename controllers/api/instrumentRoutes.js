const router = require("express").Router();
const { Instrument } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const instrumentData = await Instrument.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(instrumentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
