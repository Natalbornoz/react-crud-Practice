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
            <form onSubmit = {this.onSubmit}>
               <h3>Add Event</h3> 
               <h5>¿ Cuál es el nombre del Evento ?</h5>
               <input placeholder="Nombre" ref={nameInput => this.nameInput = nameInput} />
               <h5>¿ De qué va a tratar ?</h5>
                <input placeholder="Cuéntanos de que tratará" ref={descriptionInput => this.descriptionInput = descriptionInput} />  
                <h5>Indica la fecha</h5>
                <input placeholder="Cuál será la fecha" ref={dateInput => this.dateInput = dateInput} />
                <h5>Elige su categoría</h5>
                <input placeholder="Escribe el nombre de la categoría" ref={categoryInput => this.categoryInput = categoryInput} />
                <h5>Indica el lugar</h5>
                <input placeholder="Ej. El Huerto #3690, Maipú" ref={placeInput => this.placeInput = placeInput} />
                <h5>Nº de cupos</h5>
                <input placeholder="0" ref={quoatasInput => this.quoatasInput = quoatasInput} />
                <h5>Horario</h5>
                <input placeholder="Ej. 19.30" ref={hourInput => this.hourInput = hourInput} />
                <h5>Precio</h5>
                <span>$</span><input placeholder="Ej. 5000" ref={priceInput => this.priceInput = priceInput} />

                <button>Crear evento</button>
               <hr />
            </form>
        );
    }
}

export default AddEvent;
