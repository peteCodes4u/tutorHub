const { Tutor } = require('../models');

const tutorData = 
[
    {
        "email": "david@test.com",
        "phonenumber": "7275551234",
        "virtual": 2,
        "facebook": "myprofile",
        "twitter": "mypage123",
        "instagram": "itsme123",
        "instrument": 4
    },
    {
        "email": "peter@test.com",
        "phonenumber": "7275552345",
        "virtual": 0,
        "facebook": "myprofile1",
        "twitter": "mypage234",
        "instagram": "itsme234",
        "instrument": 12
    },
    {
        "email": "pranith@test.com",
        "phonenumber": "7275553456",
        "virtual": 2,
        "facebook": "myprofile2",
        "twitter": "mypage345",
        "instagram": "itsme345",
        "instrument": 10
    },
    {
        "email": "joseph@test.com",
        "phonenumber": "7275554567",
        "virtual": 2,
        "facebook": "myprofile3",
        "twitter": "mypage456",
        "instagram": "itsme456",
        "instrument": 8
    },
    {
        "email": "steph@test.com",
        "phonenumber": "7275555678",
        "virtual": 1,
        "facebook": "myprofile4",
        "twitter": "mypage567",
        "instagram": "itsme567",
        "instrument": 2
    }
];

const seedUsers = () => User.bulkCreate(tutorData);

module.exports = seedUsers;