import React, { Component } from 'react';


class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.descriptionInput.value, this.dateInput.value, this.categoryInput.value, this.placeInput.value, this.quoatasInput.value, this.hourInput.value, this.priceInput.value);

        this.nameInput.value= '';
        this.descriptionInput.value = '';
        this.dateInput.value = '';
        this.categoryInput.value = ''; 
        this.placeInput.value = ''; 
        this.quoatasInput.value = '';
        this.hourInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        return (
            <form className="row" onSubmit = {this.onSubmit}>
               <h3>Añade tu evento</h3> 
               <h5>¿ Cuál es el nombre del Evento ?</h5>
               <input placeholder="Nombre" ref={nameInput => this.nameInput = nameInput} />
               <h5>¿ De qué va a tratar ?</h5>
                <input placeholder="Agrega una breve descripción" ref={descriptionInput => this.descriptionInput = descriptionInput} />  
                <h5>Indica la fecha</h5>
                <input placeholder="Ej.12/12/2018" ref={dateInput => this.dateInput = dateInput} />
                <h5>Elige su categoría</h5>
                <input placeholder="Tocata / Festival / Taller" ref={categoryInput => this.categoryInput = categoryInput} />
                <h5>Indica el lugar</h5>
                <input placeholder="Ej. El Huerto #3690, Maipú" ref={placeInput => this.placeInput = placeInput} />
                <div className="row">
                    <h5 className="cupo col-lg-6">Nº de cupos :</h5>
                    <input className="cupoInput col-lg-6" placeholder="0" ref={quoatasInput => this.quoatasInput = quoatasInput} />
                </div>
                
                <div className="row">
                    <h5 className="hora col-lg-6">Horario :</h5>
                    <input className="horaInput col-lg-6" placeholder="Ej. 19:30" ref={hourInput => this.hourInput = hourInput} />
                </div>
                
                <div className="row">
                    <h5 className="precio col-lg-6">Precio :</h5>
                    <span className="precioInput col-lg-6">$</span><input placeholder="Ej. 5000" ref={priceInput => this.priceInput = priceInput} />
                </div>    
                
                

                <button>Crear evento</button>
               <hr />
            </form>
        );
    }
}

export default AddEvent;
