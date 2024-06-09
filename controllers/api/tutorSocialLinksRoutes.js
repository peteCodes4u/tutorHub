const router = require("express").Router();
const { TutorSocialLinks } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const tutorSocialLinksData = await TutorSocialLinks.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(tutorSocialLinksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
