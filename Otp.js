const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OTP = sequelize.define('OTP', {
  email: DataTypes.STRING,
  code: DataTypes.STRING,
});

module.exports = OTP;
