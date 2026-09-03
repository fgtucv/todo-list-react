import { TodoInfo } from "./components/TodoInfo/TodoInfo.jsx";
import { CreateTodo } from "./components/CreateTodo/CreateTodo.jsx";
import { TodoFilter } from "./components/TodoFilter/TodoFilter.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { Component } from "react";
import { TodoData } from "./data/TodoData.js";

export class App extends Component {
  state = {
    complitedTask: TodoData.complitedtask,
    task: TodoData.task,
    tasks: TodoData.tasks,
    preFiltredTasks: TodoData.tasks
  }

  changeTodosInfo = (event) => {
    const changed = event.target.checked;

    if (changed) {
      this.setState((prevState) => ({
        complitedTask: prevState.complitedTask + 1
      }));
    } else if (!changed) {
      this.setState((prevState) => ({
        complitedTask: prevState.complitedTask - 1
      }));
    }
  }

  deleteTask = (event) => {
    const taskId = Number(event.target.closest("li").id);

    const newTasks = this.state.tasks.filter((task) => task.id !== taskId);

    this.setState((prevState) => ({
      task: prevState.task - 1,
      tasks: newTasks,
    }));
  }

  addTask = (event) => {
    const newTastTitle = event.target.previousElementSibling.value;

    const newTask = {
      id: this.state.tasks.at(-1).id + 1,
      task: {
        title: newTastTitle,
        isComplited: false
      }
    }

    this.setState((prevState) => ({
      task: prevState.task + 1,
      tasks: [...prevState.tasks, newTask]
    }));
  }

  filtredTasks = (event) => {
    const filterValue = event.target.value;

      const filtredTasks = this.state.preFiltredTasks.filter((task) => task.task.title.toLowerCase().includes(filterValue.toLowerCase()));

      this.setState({
        tasks: filtredTasks
      });
  }

  render() {
    return (
      <div className="App flex justify-center flex-col max-w-[600px] mx-auto py-5 gap-8">
        <TodoInfo task={this.state.task} complitedTask={this.state.complitedTask} />
        <CreateTodo addTask={this.addTask} />
        <TodoFilter filtredTasks={this.filtredTasks} />
        <TodoList deleteTask={this.deleteTask} changeTodosInfo={this.changeTodosInfo} tasks={this.state.tasks} />
      </div>
    )
  }
}