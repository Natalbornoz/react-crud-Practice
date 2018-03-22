import React, { Component } from 'react';


class Event  extends Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }


    onDelete(){
        const { onDelete, name } = this.props;

        onDelete(name);
    }

    render() {
        const {name, description, date, category, place, quoatas, hour, price} = this.props;
        return (
        <div>
            <span>{name}</span>
            {`  |  `}
            <span>{description}</span>
            {`  |  `}
            <span>{date}</span>
            {`  |  `}
            <span>{category}</span>
            {`  |  `}
            <span>{place}</span>
            {`  |  `}
            <span>{quoatas}</span>
            {`  |  `}
            <span>{hour}</span>
            {`  |  `}
            <span>{price}</span>
            {`  |  `}
            <button onClick={this.onDelete}>Delete</button>
        </div>         
        );
    }
}

export default Event;
