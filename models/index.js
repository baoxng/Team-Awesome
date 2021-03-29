const User = require('./users');
const Post = require('./post');

Post.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = { User };
module.exports = { Post };