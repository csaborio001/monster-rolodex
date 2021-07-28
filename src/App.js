import './App.css';
import {Component} from "react";
import {CardList} from './components/card-list/card-list.component';
import {SearchField} from "./components/search-field/search-field.component";

class App extends Component {

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then( users => {
      this.setState(
          {monsters: users}
      )
    });
  }

  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: '',
      monsterSearchPlaceholder: 'Search Monsters'
    };
  }

  render() {
    /** Filters the monsters */
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter ( monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    /** Renders the App */
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchField
            placeholderText={this.state.monsterSearchPlaceholder}
            handleChange={
              (e) => this.setState( {searchField:e.target.value})
            }
        >
        </SearchField>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
  );
  }
}

export default App;
