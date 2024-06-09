require("dotenv").config({
  path: '../.env'
})
const sequelize = require('../config/connection');
const { User, Tutor } = require('../models');

const userData = require('./userData.json');
const tutorData = require('./tutorData.json')

const seedDatabase = async () => {
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
};

seedDatabase();
