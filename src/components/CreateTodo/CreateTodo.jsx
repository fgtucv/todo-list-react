import { Component } from "react";

export class CreateTodo extends Component {
    render(){
        return(
            <form className="flex flex-col border-2 border-black p-4 gap-3 rounded-md" action="">
                <input className="border-2 border-grey h-20 rounded-md px-4" type="text" />
                <button className="bg-[#13c909] text-white w-fit py-2 px-14 rounded-md" onClick={this.props.addTask} type="button">Create</button>
            </form>
        )
    }
}