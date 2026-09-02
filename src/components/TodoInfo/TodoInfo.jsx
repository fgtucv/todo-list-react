import { Component } from "react";

export class TodoInfo extends Component {
    render() {
        const { task, complitedTask } = this.props;
        return (
            <div className="flex flex-col gap-1">
                <span>Всього завдань: {task}</span>
                <span>Виконано: {complitedTask}</span>
            </div>
        )
    }
}