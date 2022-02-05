import React from "react";

const Form = ({
    inputText,
    setInputText,
    todoList,
    setTodoList,
    setStatus,
    filterTodoList,
}) => {
    const inputHandler = (e) => {
        setInputText(e.target.value);
    };
    const todoListHandler = (e) => {
        e.preventDefault();
        if (inputText == false) {
            const dv = document.getElementById("warn");
            dv.style.display = "block";
            setTimeout(() => {
                dv.style.display = "none";
            }, 2000);
        } else {
            setTodoList([
                ...todoList,
                {
                    text: inputText,
                    completed: false,
                    id: Math.random() * 1000 + 1,
                },
            ]);
        }
        setInputText("");
    };
    //update status
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <frameElement>
            <h3 className={`warn`} id="warn">
                Enter some string
            </h3>
            <form className="displayFlex">
                <input
                    value={inputText}
                    onChange={inputHandler}
                    type="text"
                    className="todo-input "
                    placeholder="Enter your todo ✔"
                />

                <button
                    className="btn btn-add"
                    type="submit"
                    onClick={todoListHandler}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select
                        onChange={statusHandler}
                        name="todos"
                        className="filter-todo"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </frameElement>
    );
};

export default Form;
