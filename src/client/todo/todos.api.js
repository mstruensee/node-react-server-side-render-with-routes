
//todo switch to RXJX/ajax
export const fetchTodos = () => (
    fetch("/api/todo")
    .then(response => response.json())
)
