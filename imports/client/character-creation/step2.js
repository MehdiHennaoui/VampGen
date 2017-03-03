import React, { Component } from 'react';
import { Link } from 'react-router';

import InputRadio from './input/input-radio';
import InputSelect from './input/input-select';

export default class Step2 extends Component {

	constructor() {
		
		super();

		this.state = {
			
			name: "clan",
			
			clan:[{id:1, label:"Brujahs", value:"Brujahs",},
					{id:2, label:"Gangrels", value:"Gangraels",}, 
					{id:3, label:"Malkaviens", value:"Malkaviens",}, 
					{id:4, label:"Nosferatus", value:"Nosferatus",}, 
					{id:5, label:"Toreadors", value:"Toreadors",}, 
					{id:6, label:"Tremeres", value:"Tremeres",},
					{id:7, label:"Ventrues", value:"Ventrues",},
					{id:8, label:"Lasombras", value:"Lasombras",},
					{id:9, label:"Tzimisces", value:"Tzimisces",},
					{id:10, label:"Assamites", value:"Assamites",}, 
					{id:11, label:"Disciples de Seth", value:"Followers of Set",}, 
					{id:12, label:"Giovanni", value:"Giovanni",},
					{id:13, label:"Ravnos", value:"Ravnos",}],
			
			selectedOption: "Brujahs",	
			
		}
			this.handleOptionChange = this.handleOptionChange.bind(this);
			this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	
	
	handleOptionChange(event){ 
								
		
		this.setState({
														
			selectedOption: event.target.value
																												
		});
	
	}

	


	
	handleFormSubmit(formSubmitEvent) {

		formSubmitEvent.preventDefault();

		

	}
	

	


	render(){
		
		const multipleInputRadio = this.state.clan.map(clan => { 
			
			return(
				
				<InputRadio key={clan.id} labelName={clan.label} name={this.state.name} value={clan.value} />
			
			)

		});
		
		return (
					<div> 
						<form onSubmit={this.handleFormSubmit}>
							<div onChange={this.handleOptionChange}>
							{multipleInputRadio}
							</div>
							<input type="submit"/>
						</form>
					</div>

					);
	}

}



