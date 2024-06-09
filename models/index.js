const User = require("./User");
const Tutor = require("./Tutor");
const Student = require("./Student");
const Certifications = require("./Certifications");
const Instrument = require("./Instrument");
const Specialties = require("./Specialties");
const StudentFavorites = require("./StudentFavorites");
const TutorCertifications = require("./TutorCertifications");
const TutorComments = require("./TutorComments");
const TutorInstrument = require("./TutorInstrument");
const TutorPrices = require("./TutorPrices");
const TutorSocialLinks = require("./TutorSocialLinks");
const TutorSpecialties = require("./TutorSpecialties");

// Tutors belongsTo User
Tutor.belongsTo(User, {
  foreignKey: "user_id",
});

// Students belongsTo user
Student.belongsTo(User, {
  foreignKey: "user_id",
});

// Tutors have many instruments
Tutor.hasMany(Instrument, {
  foreignKey: "instrument_id",
});

// Instruments belongToMany Tutors (through TutorInstruments)
Instrument.belongsToMany(Tutor, {
  through: TutorInstrument,
  foreignKey: "instrument_id",
});

// Tutors belongToMany Instruments (through TutorInstruments)
Tutor.belongsToMany(Instrument, {
  through: TutorInstrument,
  foreignKey: "tutor_id",
});

// Tutors has many Social links
Tutor.hasMany(TutorSocialLinks, {
  foreignKey: "tutor_id",
});

// Tutors belongToMany specialties (throught TutorSpecialties)
Tutor.belongsToMany(Specialties, {
  through: TutorSpecialties,
  foreignKey: "tutor_id",
});

// specialties belong to many tutors (throught TutorSpecialties)
Specialties.belongsToMany(Tutor, {
  through: TutorSpecialties,
  foreignKey: "specialty_id",
});

// Tutors belongToMany Certifications (through TutorCertifications)
Tutor.belongsToMany(Certifications, {
  through: TutorCertifications,
  foreignKey: "tutor_id",
});

// Certifications belongToMany Tutors (throught TutorCertifications)
Certifications.belongsToMany(Tutor, {
  through: TutorCertifications,
  foreignKey: "certification_id",
});

// Tutors have many Comments
Tutor.hasMany(TutorComments, {
  foreignKey: "tutor_id",
});
// Students have many Favorites
Student.hasMany(StudentFavorites, {
  foreignKey: "tutor_id",
});

module.exports = {
  User,
  Tutor,
  Student,
  Certifications,
  Instrument,
  Specialties,
  StudentFavorites,
  TutorCertifications,
  TutorComments,
  TutorInstrument,
  TutorSocialLinks,
  TutorSpecialties,
  TutorPrices,
};
