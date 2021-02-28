import React, { Component } from 'react';
import './App.css';
import Layout from './Components/layout/Layout';
import BugerBuilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {
  render() {
    return (
      <div  >
        <Layout>
          <BugerBuilder/>
        </Layout>
      </div>
    );
  }
}


export default App;
