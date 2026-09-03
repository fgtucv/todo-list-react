import { Component } from "react";

export class TodoFilter extends Component {
    render(){
        return(
            <div className="flex justify-center gap-4 items-center">
                <span>Фільтр по імені</span>
                <input className="border-2 border-black rounded-md px-4 py-2" type="text" onChange={this.props.filtredTasks} />
            </div>
        )
    }
}