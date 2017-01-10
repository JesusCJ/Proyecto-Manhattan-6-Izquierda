import React, { Component } from 'react';
import './App.css';
import Category from './Category.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ul>
        	<Category name='' items={['Entrar','Registrarme','Quienes somos']} icon="plus"/>
    	
        </ul>

        <ul1>
         	<Category name='' items={['Personalizar busqueda']} icon="cog"/>
        </ul1>

      </div>
    );
  }
}

export default App;
