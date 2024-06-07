const User = require('./User');
const Tutor = require('./Tutor');
const Student = require('./Student');
const Certifications = require('./Certifications');
const Comments = require('./Comments');
const Favorites = require('./Favorites');
const Instrument = require('./Instrument');
const SocialLinks = require('./SocialLinks');
const Specialties = require('./Specialties');
const StudentFavorites = require('./StudentFavorites');
const TutorCertifications = require('./TutorCertifications');
const TutorComments = require('./TutorComments');
const TutorInstrument = require('./TutorInstrument');
const TutorSocialLinks = require('./TutorSocialLinks');
const TutorSpecialties = require('./TutorSpecialties');
 


// Tutors belongsTo User
Tutor.belongsTo(User, {
    foreignKey: 'user_id',
});

// Students belongsTo user
Student.belongsTo(User, {
    foreignKey: 'user_id',
});

// Tutors have many instruments
Tutor.hasMany(Instrument, {
    foreignKey: 'instrument_id',
});

// Instruments belongToMany Tutors (through TutorInstruments)
Instrument.belongsToMany(Tutor, {
    through: TutorInstrument,
    foreignKey: 'instrument_id'
});

// Tutors belongToMany Instruments (through TutorInstruments) 
Tutor.belongsToMany(Instrument, {
    through: TutorInstrument,
    foreignKey: 'tutor_id',
})

// Tutors have many SocialLinks
// Tutors have many Specialties
// Tutors have many Certifications
// Tutors have many Comments
// Students have many Favorites

module.exports = { 
    User,
    Tutor,
    Student,
    Certifications,
    Comments,
    Favorites,
    Instrument,
    SocialLinks,
    Specialties,
    StudentFavorites,
    TutorCertifications,
    TutorComments,
    TutorInstrument,
    TutorSocialLinks,
    TutorSpecialties, 
};
