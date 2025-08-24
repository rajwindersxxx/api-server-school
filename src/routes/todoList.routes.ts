import express from "express";
import { todoListController } from "../controller/todoList.controller";
const todoListRoute = express();

todoListRoute
  .route("/")
  .post(todoListController.createList)
  .get(todoListController.getAllList);

todoListRoute
  .route("/:id")
  .patch(todoListController.updateList)
  .delete(todoListController.deleteList)
  .get(todoListController.getTodoDetails);
export default todoListRoute;
