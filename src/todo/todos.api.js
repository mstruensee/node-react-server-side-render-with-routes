import "isomorphic-fetch"

//todo switch to RXJX/ajax
export const fetchTodos = () => (
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
)
