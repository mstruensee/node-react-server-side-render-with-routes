import fetch from "node-fetch"

export class TodoService {
     fetchTodo = () => (
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
    )
}
