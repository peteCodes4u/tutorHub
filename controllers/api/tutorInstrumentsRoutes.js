const router = require("express").Router();
const { TutorInstrument } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const tutorInstrumentsData = await TutorInstrument.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(tutorInstrumentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
