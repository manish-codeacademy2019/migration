module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {});
  // User.associate = function (models) {
  //   // associations can be defined here
  // };
  User.generate = (id, name) => User.create({ id, name });
  User.findAllUsers = () => User.findAll();
  User.findUserById = id => User.findById(id);
  return User;
};
