const router = require("express").Router();
const userRoutes = require("./userRoutes");

// Created variables to require the routes
const registrationRoutes = require("./registrationRoutes");
const tutorRegistrationRoutes = require("./tutorRegistrationRoutes");
const tutorRoutes = require("./tutorRoutes");
const instrumentRoutes = require("./instrumentRoutes");
const specialtiesRoutes = require("./specialtiesRoutes");
const studentRoutes = require("./studentRoutes");
const studentFavoritesRoutes = require("./studentFavoritesRoutes");
const tutorCertificationsRoutes = require("./tutorCertificationsRoutes");
const tutorCommentsRoutes = require("./tutorCommentsRoutes");
const tutorInstrumentsRoutes = require("./tutorInstrumentsRoutes");
const tutorSocialLinksRoutes = require("./tutorSocialLinksRoutes");
const tutorSpecialtiesRoutes = require("./tutorSpecialtiesRoutes");

// Used router.use to use the routes
router.use("/users", userRoutes);
router.use("/registration", registrationRoutes);
router.use("/tutorRegistration", tutorRegistrationRoutes);
router.use("/tutors", tutorRoutes);
router.use("/instruments", instrumentRoutes);
router.use("/specialties", specialtiesRoutes);
router.use("/students", studentRoutes);
router.use("/studentFavorites", studentFavoritesRoutes);
router.use("/tutorCertifications", tutorCertificationsRoutes);
router.use("/tutorComments", tutorCommentsRoutes);
router.use("/tutorInstruments", tutorInstrumentsRoutes);
router.use("/tutorSocialLinks", tutorSocialLinksRoutes);
router.use("/tutorSpecialties", tutorSpecialtiesRoutes);

module.exports = router;
