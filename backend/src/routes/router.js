const express = require("express");

const router = express.Router();

const tasksController = require("../controllers/tasksController");
const tasksMiddlewares = require("../middlewares/tasksMiddlewares");

router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksMiddlewares.validateBody, tasksController.createTask);

module.exports = router;
