require("dotenv").config({
  path: "../.env",
});

const sequelize = require("../config/connection");
const {
  Certifications,
  Instrument,
  Specialties,
  Student,
  StudentFavorites,
  Tutor,
  TutorCertifications,
  TutorComments,
  TutorInstrument,
  TutorSocialLinks,
  TutorSpecialties,
  User,
} = require("../models");

const certsData = require("./certificationsData.json");
const instrumentData = require("./instrumentData.json");
const specialtiesData = require("./specialtiesData.json");
const studentData = require("./studentData.json");
const studentFavorites = require("./studentFavoritesData.json");
const tutorData = require("./tutorData.json");
const tutorCertificationsData = require("./tutorCertificationsData.json");
const tutorCommentsData = require("./tutorCommentsData.json");
const tutorInstrumentData = require("./tutorInstrumentsData.json");
const tutorSocialLinksData = require("./tutorSocialLinksData.json");
const tutorSpecialtiesData = require("./tutorSpecialtiesData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Specialties.bulkCreate(specialtiesData, {
      individualHooks: true,
      returning: true,
    });

    await Student.bulkCreate(studentData, {
      individualHooks: true,
      returning: true,
    });

    await StudentFavorites.bulkCreate(studentFavorites, {
      individualHooks: true,
      returning: true,
    });

    await TutorCertifications.bulkCreate(tutorCertificationsData, {
      individualHooks: true,
      returning: true,
    });

    await TutorComments.bulkCreate(tutorCommentsData, {
      individualHooks: true,
      returning: true,
    });

    await TutorInstrument.bulkCreate(tutorInstrumentData, {
      individualHooks: true,
      returning: true,
    });

    await TutorSocialLinks.bulkCreate(tutorSocialLinksData, {
      individualHooks: true,
      returning: true,
    });

    await TutorSpecialties.bulkCreate(tutorSpecialtiesData, {
      individualHooks: true,
      returning: true,
    });

    await Instrument.bulkCreate(instrumentData, {
      individualHooks: true,
      returning: true,
    });

    await Certifications.bulkCreate(certsData, {
      individualHooks: true,
      returning: true,
    });

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await Tutor.bulkCreate(tutorData, {
      individualHooks: true,
      returning: true,
    });

    process.exit(0);
  } catch (error) {
    console.error("Error in this data", error);
    process.exit(1);
  }
};

seedDatabase();
