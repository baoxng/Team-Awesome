const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userInfo = require('./user.json');
const postInfo = require('./diaryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userInfo, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postInfo);

  process.exit(0);
};

seedDatabase();
