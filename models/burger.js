module.exports = function(sequelize, DataTypes) {
 var burger  = sequelize.define("burgers", {
  burger_name: DataTypes.STRING,
     devoured: {
       type: DataTypes.BOOLEAN,
       defaultValue: false
     }
   }, {
     classMethods: {
       associate: function(models) {
         // associations can be defined here
         burger.hasOne(models.Temperatures, {
				foreignKey: 'burger_id'
			});
    }
 }
   });
   return burger;
 };








//
//     burger_name: DataTypes.STRING,
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     }
//
//   });
//   return burger;
// };
