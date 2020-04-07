import React from 'react';
import '../stylesheets/App.css';
import PokeList from './PokeList';
import pokemons from '../data/pokemons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:pokemons
  }
}

  render() {
    return (
      <div className="App">
      {/*Le paso a través de props el array de datos para pintarlo al componente que pinta mi listado de componentes Pokelist.js*/}
      <PokeList dataList={this.state.data}/>
    </div>
    );
  }
}

export default App;
