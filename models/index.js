const User = require('./User');
const Tutor = require('./Tutor');

Tutor.belongsTo(User, {
   foreignKey:{
    name: 'user_id',
    primaryKey: true
   },
targetKey: 'user_id'
});



module.exports = { User, Tutor };