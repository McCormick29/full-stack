import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { requestTaskCreation } from "../store/mutations";

export const TaskList = ({ tasks, name, id, createNewTask }) => (
  <div>
    <h3>{name}</h3>
    <div>
      {tasks.map((task) => (
        <Link to={`/task/${task.id}`} key={task.id}>
          <div>{task.name}</div>
        </Link>
      ))}
    </div>
    <button onClick={() => createNewTask(id)}>Add New</button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let groupdID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupdID,
    tasks: state.tasks.filter((task) => task.group === groupdID),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log("Creating a new task...", id);
      dispatch(requestTaskCreation(id));
    },
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
