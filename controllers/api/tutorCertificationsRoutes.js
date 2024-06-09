const router = require("express").Router();
const { TutorCertifications } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const tutorCertificationsData = await TutorCertifications.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(tutorCertificationsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
