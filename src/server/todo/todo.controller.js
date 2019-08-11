import React from "react"
import { BaseController } from "../config/base.controller"
import { TodoService } from "./todo.service"

export class TodoController extends BaseController {
    constructor({ app }) {
        super({ app })
        this.todoService = new TodoService()
    }

    get routes() {
        return [
            {
                method: "get",
                path: "/api/todo",
                function: this.todo,
            },
        ]
    }

    todo(req, res) {
        this.todoService.fetchTodo()
        .then(response => res.send(response))
    }
}
