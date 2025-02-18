const connection = require("./connection");
require("dotenv").config();

const getAll = async () => {
  const tasks = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

module.exports = {
  getAll,
};
