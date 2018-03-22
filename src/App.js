import React, { Component } from 'react';
import './App.css';

import AddProduct from './AddProduct';
import ProductItem from './ProductItem';

const products = [
  {
    name:'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));


class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        products: JSON.parse(localStorage.getItem('products'))
      };

      this.onAdd = this.onAdd.bind(this);
      this.onDelete = this.onDelete.bind(this);

    }
  
  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });
  }

  //Metodo para obtener productos
  getProducts() {
    return this.state.products;
  }

  //Metodo para agregar elementos min 44:24 / 49:33
  onAdd(name, price) {
    const products = this.getProducts ();

    products.push({
      name,
      price
    });

    this.setState ({ products });
    // console.log(name, price);
  }

  //Tomara un nombre como parametro
  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({ products: filteredProducts });
  }
 
  render() {
    return (
      <div className="App">
       <h1>Products Manager</h1>

       <AddProduct
        onAdd= {this.onAdd}
       />

      {
        this.state.products.map(product => {
          return (
            <ProductItem
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
