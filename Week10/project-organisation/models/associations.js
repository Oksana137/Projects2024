import User from "./User.js";
import Post from "./Post.js";

User.hasMany(Post, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
});

Post.belongsTo(User, {
  foreignKey: { allowNull: false, name: "userId" },
  onDelete: "CASCADE",
});

User.sync();
Post.sync();
