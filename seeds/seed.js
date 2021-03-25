const sequelize = require('../config/connection');
const { User } = require('../models');

const userInfo = require('./user.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userInfo, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
