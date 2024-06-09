const router = require("express").Router();
const { TutorComments } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const tutorCommentsData = await TutorComments.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(tutorCommentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
