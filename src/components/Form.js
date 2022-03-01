import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = function (event) {
    console.log(event.target.value);
    setInputText(event.target.value);
  };
  const submitTodoHandler = function (event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        type="text"
        value={inputText}
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square" />
      </button>
    </form>
  );
}

export default Form;
