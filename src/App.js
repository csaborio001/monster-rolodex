import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component{

	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		}
	}

	componentDidMount() { // Accesible because this is class.
		fetch('http://jsonplaceholder.typicode.com/users') // Get the data source. 
		.then( response => response.json() ) // Convert response to JSON.
		.then( users => this.setState({ monsters: users })) 
	}

	handleChange = e => {
			this.setState({searchField : (e.target.value)});
	}

	render() {
		/*
		* Pull props off an object and set them to constants.
		* Equivalent to writing:
		* const monsters = this.state.monsters;
		* const searchField = this.state.searchField;
		*/
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
 			return (
				<div className="App">
					<h1>Monster Rolodex</h1>
					<SearchBox placeholder="Search Monsters"
							   handleChange={this.handleChange}>
					</SearchBox>
					<CardList monsters={filteredMonsters}></CardList>
			</div>
		); 
	}
}

export default App;
