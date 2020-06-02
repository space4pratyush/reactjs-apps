import React, { Component} from "react";

class TodoItems extends Component{

    constructor(props){
        super(props);

        this.createTasks=this.createTasks.bind(this);

    }

    createTasks(items){
        return <li key={items.key}>{items.text}, {items.key}</li>
    }

    render(){
        var todoEntries=this.props.entries;
        var listItems=todoEntries.map(this.createTasks);

        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;