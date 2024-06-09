const router = require("express").Router();
const { Specialties } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const specialtiesData = await Specialties.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(specialtiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
