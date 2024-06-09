const router = require("express").Router();
const { Student } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const studentData = await Student.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
