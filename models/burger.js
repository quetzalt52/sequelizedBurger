module.exports = function(sequelize, DataTypes) {
  var burger =  = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    devoured : {
      type: DataTypes.BOOLEAN,
      defaultValue: "false"
    }
  });
  return burger;

};
