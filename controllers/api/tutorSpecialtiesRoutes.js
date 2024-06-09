const router = require("express").Router();
const { TutorSpecialties } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const tutorSpecialtiesData = await TutorSpecialties.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(tutorSpecialtiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
