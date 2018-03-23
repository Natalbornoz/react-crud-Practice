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
        <div className="formEvent">

            <div className="row">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="col-lg-12">
                            <span className="formName">{name}</span>
                        </div>
                        <div className="col-lg-12">
                            <span className="formDescription">{description}</span>  
                        </div>
                    </div>
                    <hr/>
                    <div className="col-lg-4">
                            <span className="formQuoatas">Cupos :{quoatas}</span>
                    </div>
                </div>
                    
                  
                    <hr/>
                    {`  |  `}
                    <span className="formDate">Fecha :{date}</span>
                    {`  |  `}
                    <span className="formCategory">{category}</span>
                    {`  |  `}
                    <span className="formPlace">{place}</span>
                    {`  |  `}
                    
                    {`  |  `}
                    <span className="formHour">Hora :{hour}</span>
                    {`  |  `}
                    <span className="formPrice">Precio :{price}</span>
                    {`  |  `}
                    <div className="delete row">
                        <button onClick={this.onDelete}>Delete</button>
                    </div>
                    
            </div>
          
        </div>         
        );
    }
}

export default Event;


{/* <span className="formName">{name}</span>
{ `  |  ` }
<span className="formDescription">{description}</span>
{ `  |  ` }
<span className="formDate">{date}</span>
{ `  |  ` }
<span className="formCategory">{category}</span>
{ `  |  ` }
<span className="formPlace">{place}</span>
{ `  |  ` }
<span className="formQuoatas">{quoatas}</span>
{ `  |  ` }
<span className="formHour">{hour}</span>
{ `  |  ` }
<span className="formPrice">{price}</span>
{ `  |  ` }
<button onClick={this.onDelete}>Delete</button>
            </div > */}