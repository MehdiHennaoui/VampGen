import React, { Component } from 'react';
import { Link } from 'react-router';

import InputSelect from './input/input-select';

export default class Attributes extends Component {
	
	constructor(props){
		
		super(props);
		
		this.state = {
			
			attribute: [{id:1, nameLabel:"Physique", name: "physical"},
						{id:2, nameLabel:"Social", name:"social"},
						{id:3, nameLabel:"Mental", name: "mental"}],
			
		}

		this.handleChange = this.handleChange.bind(this);
		
	}
			
	handleChange(event){
		
		const target = event.target;
		const name = target.name;
		this.setState({
						
						[name]: event.target.value
								
					})
		
		
	}		
		
	render() {
		
		const MultipleSelect = this.state.attribute.map(select => 

				<InputSelect nameLabel={select.nameLabel} key={select.id} name={select.name} value={this.state.value}  onChange={this.handleChange}/>
			)
		return( 
			<div>
				<h1>Caractéristiques du personnage</h1>
				{MultipleSelect}
				
			</div>		
		);

	}		

}