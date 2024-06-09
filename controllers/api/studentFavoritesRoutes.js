const router = require("express").Router();
const { StudentFavorites } = require("../../models");

// api/tutors endpoint
router.get("/", async (req, res) => {
  try {
    const studentFavoritesData = await StudentFavorites.findAll({
      include: [{ all: true }],
    });
    res.status(200).json(studentFavoritesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
