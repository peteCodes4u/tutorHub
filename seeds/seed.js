require("dotenv").config({
  path: '../.env'
})
const sequelize = require('../config/connection');
const { User, Tutor, Student } = require('../models');

const userData = require('./userData.json');
const tutorData = require('./tutorData.json');
const studentData = require('./studentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
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
