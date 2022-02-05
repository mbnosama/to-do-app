import React from "react";

const OneTodo = ({ liText, todoList, setTodoList, todoObject }) => {
    //event
    const deleteHandler = () => {
        setTodoList(todoList.filter((el) => el.id !== todoObject.id));
    };
    const completeHandler = () => {
        setTodoList(
            todoList.map((item) => {
                if (item.id === todoObject.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };
    return (
        <div
            className={`todo displayFlex ${
                todoObject.completed ? "completed" : ""
            }`}
        >
            <li className={`todo-item `}>{liText}</li>
            <div className="btns">
                <button className="btn btn-completed" onClick={completeHandler}>
                    <i className="fas fa-check"></i>
                </button>
                <button className="btn  btn-deleted" onClick={deleteHandler}>
                    <i className="fas fa-trash "></i>
                </button>
            </div>
        </div>
    );
};

export default OneTodo;
