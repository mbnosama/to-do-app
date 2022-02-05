import React, { useEffect, useState } from "react";
import "./App.css";
//import Components
import Form from "./components/Form";
import ToDoCompleteList from "./components/ToDoCompleteList";

import ignore from "./static/images/ignore.png";

function App() {
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [status, setStatus] = useState("All");
    const [filterTodoList, setFilterTodo] = useState([]);

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilterTodo(
                    todoList.filter((todo) => todo.completed === true)
                );
                break;
            case "uncompleted":
                setFilterTodo(
                    todoList.filter((todo) => todo.completed === false)
                );
                break;
            default:
                setFilterTodo(todoList);
                break;
        }
    };
    todoList.sort((a, b) => a.completed - b.completed);
    //use effect
    useEffect(() => {
        getLocalTodo();
    }, []);
    useEffect(() => {
        filterHandler();
        saveToLocal();
    }, [todoList, status]);

    // save to localStorage
    const saveToLocal = () => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    };

    const getLocalTodo = () => {
        if (localStorage.getItem("todoList") === null) {
            localStorage.setItem("todoList", JSON.stringify([]));
        } else {
            let localTodoList = JSON.parse(localStorage.getItem("todoList"));
            setTodoList(localTodoList);
        }
    };

    return (
        <div className="App app displayFlex">
            <header>
                <h1 className="head-title">Hello, World!</h1>
                <img src={ignore} alt="ignore-icon" />
            </header>

            {/* form Component */}
            <Form
                setInputText={setInputText}
                inputText={inputText}
                todoList={todoList}
                setTodoList={setTodoList}
                setStatus={setStatus}
            />

            {/* ToDoCompleteList Component */}
            <ToDoCompleteList
                todoList={todoList}
                filterTodoList={filterTodoList}
                setTodoList={setTodoList}
            />
        </div>
    );
}

export default App;
