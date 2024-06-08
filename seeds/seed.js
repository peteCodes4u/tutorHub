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

const userData = require("./userData.json");
const tutorData = require("./tutorData.json");
const instrumentsData = require("./instrumentData.json");
const certsData = require("./certificationsData.json");
const certsData = require("./certificationsData.json");
const certsData = require("./certificationsData.json");
const certsData = require("./certificationsData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Instrument.bulkCreate(instrumentsData, {
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
