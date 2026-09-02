import { Component } from "react";

export class TodoItem extends Component {
    state = {
        isComplited: this.props.task.task.isComplited
    }

    toggleCOmplited = (event) => {
        this.setState((prevState) => ({
            isComplited: !prevState.isComplited
        }))

        this.props.changeTodosInfo(event);
    }

    render() {
        const { task } = this.props;
        return (
            <li className="border-2 border-black flex justify-between px-16 py-8" id={task.id}>
                <input type="checkbox" checked={this.state.isComplited} onChange={this.toggleCOmplited} />
                <span className={this.state.isComplited ? "line-through" : ""}>
                    {task.task.title}
                </span>
                <button className="bg-[#13c909] text-white w-fit py-2 px-14 rounded-md" onClick={this.props.deleteTask} type="button">Delete</button>
            </li>
        )
    }
}