import React, { Component } from 'react';
import { Link } from 'react-router';


import InputText from './input/input-text';



export default class Description extends Component {
		
		constructor(){

			super();

			this.state= {
				
					input:[{id: 1, label : "Nom", name : "player", value: ""},
					{id: 2, label : "Nom du joueur", name : "player", value: ""},
					{id: 3, label: "Nature", name: "nature", value: ""},
					{id: 4, label: "Attitude", name: "demeanor", value: ""},
					{id: 5, label : "Concept", name: "concept", value: ""}],
					showErrors: false,
					

				}
			
			this.handleChange = this.handleChange.bind(this);
			
		}
		
		handleChange(event){
			
			this.setState({
							
							value: event.target.value

						});

		}

	


		
		render(){
				
				const multipleInput = this.state.input.map(input => (
					<div key={input.id}>
						
						<label>{input.label}</label>
						<InputText   name={input.name} value={this.state.input.value} onChange={this.handleChange}/>  
					
					</div>))
						
					
				return (
						<div>
							
							<h1>Etape 1</h1>
						
							<form>
							
								{multipleInput}
								<button type="submit" value="Suivant">
														
									<Link to="/clan" >Suivant</Link>
								
								</button>
							</form>
						
						</div>
						);

			}

} 

	