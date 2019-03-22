import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShopingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store'
import {Container} from 'reactstrap';
import ItemModel from './components/ItemModal'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
         <AppNavbar/>
         <Container>
           <ItemModel/>
           <ShoppingList/>
         </Container> 
      </div>
      </Provider>
    );
  }
}

export default App;
