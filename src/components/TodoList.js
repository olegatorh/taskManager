import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className={"todo-container"}>
            <ul className={"todo-list"}>
                {filteredTodos.map((todo) => (
                    <Todo
                        todos={todos}
                        key={todo.id}
                        text={todo.text}
                        setTodos={setTodos}
                        todo={todo}
                    />
                    ))}
            </ul>

        </div>
    )
}

export default TodoList