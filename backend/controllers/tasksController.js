const tasksModel = require("../src/models/tasksModel");

const getAll = async (req, res) => {
  const tasks = await tasksModel.getAll();

  return res.status(200).json({ message: "controller está tudo certo!" });
};

module.exports = {
  getAll,
};
