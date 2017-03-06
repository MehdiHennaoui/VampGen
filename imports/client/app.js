import React, { Component } from 'react';
import { Link } from 'react-router';

class CreateCharacter extends Component{ 

	render(){
		
		return (
			<button>
				<Link to="/description">Créer Personnage</Link>
			</button>
			);
		
		};

}

export default class App extends Component {

	render(){

		return (
				<div>
					<h1>Création de personnages pour Vampires la mascarade</h1>
					<CreateCharacter/>
				</div>
			)

	}

} 