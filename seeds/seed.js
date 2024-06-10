require("dotenv").config({
  path: '../.env'
})
const sequelize = require('../config/connection');
const { User, Tutor, Student, Instrument } = require('../models');

const userData = require('./userData.json');
const tutorData = require('./tutorData.json');
const studentData = require('./studentData.json');
const instrumentData = require('./instrumentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Instrument.bulkCreate(instrumentData, {
    returning: true,
  });

  await Tutor.bulkCreate(tutorData, {
    returning: true,
  });

  await Student.bulkCreate(studentData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
