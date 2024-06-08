require("dotenv").config({
  path: "../.env",
});
const sequelize = require("../config/connection");
const { User } = require("../models");
const { Tutor } = require("../models");

const userData = require("./userData.json");
const tutorData = require("./tutorData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

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
