const { Model, DataTypes } = require("sequelize");

class Creator extends Model {
  static initModel(sequelize) {
    Creator.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
        },
        lastname: {
          type: DataTypes.STRING,
        },
        aboutMe: {
          type: DataTypes.TEXT,
        },
        profilePic: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.VARCHAR,
        },
        location: {
          type: DataTypes.VARCHAR,
        },
        password: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "creator",
      },
    );
    return Creator;
  }
}

module.exports = Creator;
