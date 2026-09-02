import { Component } from "react";
import { TodoItem } from "../TodoItem/TodoItem.jsx"

export class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map((task) => (
                    < TodoItem deleteTask = { this.props.deleteTask } changeTodosInfo = { this.props.changeTodosInfo } key = { task.id } task = { task } />
                ))}
            </ul>
        )
    }
}