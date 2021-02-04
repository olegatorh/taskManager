import './App.css';
import TodoList from "./components/TodoList";
import Form from "./components/FormControl";
import {useState, useEffect} from "react";

function App() {

    const [inputText, setInputText] = useState("")

    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        const filterHandler = () => {
            switch (status) {
                case "completed":
                    setFilteredTodos(todos.filter(todo => todo.completed === true))
                    break
                case "uncompleted":
                    setFilteredTodos(todos.filter(todo => todo.completed === false))
                    break

                default:
                    setFilteredTodos(todos)
                    break
            }
        }
        filterHandler()
        saveLocalTodos()
    }, [todos, status])

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(todoLocal)
        }
    }
    return (
        <div className="App">
            <Form
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                inputText={inputText}
                setStatus={setStatus}
            />
            <TodoList
                setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
