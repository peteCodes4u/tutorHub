const User = require('./User');
const Tutor = require('./Tutor');
const Student = require('./Student');

Tutor.belongsTo(User, {
   foreignKey:{
    name: 'user_id',
    primaryKey: true
   },
targetKey: 'user_id'
});

Student.belongsTo(User, {
    foreignKey:{
     name: 'user_id',
     primaryKey: true
    },
 targetKey: 'user_id'
 });



module.exports = { User, Tutor, Student };