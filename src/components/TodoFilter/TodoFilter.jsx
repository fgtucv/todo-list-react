import { Component } from "react";

export class TodoFilter extends Component {
    render(){
        return(
            <div className="flex justify-center gap-4">
                <span>Фільтр по імені</span>
                <input className="border-2 border-black rounded-md" type="text" onChange={this.props.filtredTasks} />
            </div>
        )
    }
}