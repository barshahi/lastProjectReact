import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  
  console.log("dispatch ....",dispatch);
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  
  console.log("props ....",props);
  //console.log("todos is ",props.Todos);
  
  const [todo, setTodo] = useState("");
  
    const add = () => {
    
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
      });
      setTodo("");
    
  };
  

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <button className="add-btn"  onClick={() => add()}>
        Add Todo
      </button>
      <br />

        
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);