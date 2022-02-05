import React from "react";
import OneTodo from "./OneTodo";

const ToDoCompleteList = ({ todoList, setTodoList, filterTodoList }) => {
    return (
        <div class="todo-container ">
            <ul class="todo-list ">
                {filterTodoList.map((todo) => (
                    <OneTodo
                        liText={todo.text}
                        key={todo.id}
                        todoObject={todo}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoCompleteList;
