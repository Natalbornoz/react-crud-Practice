import React, { Component } from 'react';
import './App.css';

import AddEvent from './AddEvent';
import Event from './Event';

const events = [
  {
    name:'Concierto al aire Libre',
    description: 'Celebraremos los 5 años de la escuela de Música Juanito Peréz ',
    date: '12/04/2018',
    category: 'Tocata',
    place: 'Paralelepipedo #878, Santiago Centro',
    quoatas: 150,
    hour: '22:00',
    price: 'Gratis'

  },
  {
    name: 'La Brígida Orquesta *CAF* MalditoFen+Nadie',
    description: 'EN VIVO Como Asesinar a Felipes, La Brígida Orquesta DJ SET Maldito Fen Nadie',
    date: '12/04/2018',
    category: 'Tocata',
    place: 'Paralelepipedo #878, Santiago Centro',
    quoatas: 100,
    hour: '22:00',
    price: '4.000'
  }
];

localStorage.setItem('events', JSON.stringify(events));


class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        events: JSON.parse(localStorage.getItem('events'))
      };

      this.onAdd = this.onAdd.bind(this);
      this.onDelete = this.onDelete.bind(this);

    }
  
  componentWillMount() {
    const events = this.getEvents();

    this.setState({ events });
  }

  //Metodo para obtener productos
  getEvents() {
    return this.state.events;
  }

  //Metodo para agregar elementos min 44:24 / 49:33
  onAdd(name, description, date, category, place, quoatas, hour, price) {
    const events = this.getEvents ();

    events.push({
      name,
      description,
      date,
      category,
      place,
      quoatas,
      hour,
      price
    });

    this.setState ({ events });
    // console.log(name, price);
  }

  //Tomara un nombre como parametro
  onDelete(name) {
    const events = this.getEvents();

    const filteredEvents = events.filter(product => {
      return product.name !== name;
    });

    this.setState({ events: filteredEvents });
  }
 
  render() {
    return (
      <div className="App">
       <h1 className="titleApp"> Crear evento</h1>

       <AddEvent
        onAdd= {this.onAdd}
       />

      {
        this.state.events.map(product => {
          return (
            <Event
            key={product.name}
            // name={product.name}
            // price={product.price}
            {...product}  
            onDelete={this.onDelete}
            />
          );
        })
      }
      </div>
    );
  }
}

export default App;
