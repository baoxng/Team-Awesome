const { User } = require('../models');
const userInfo = [{id: 1, name: "cat", email: "email@gmail.com", password: "1password"}, {id: 2, name: "dog", email: "2email@gmail.com",password: "2password"}]

const seedUsers = () => User.bulkCreate(userInfo, {individualHooks: true, returning: true,});

module.exports = seedUsers;