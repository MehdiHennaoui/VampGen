import React, { Component } from 'react';

const InputSelect = (props) =>
	<div key={props.id}>
	<label>{props.nameLabel}
		<select name={props.name} value={props.value} onChange={props.onChange}>
			<option value="none"></option>
			<option value="strong">Fort</option>
			<option value="medium">Moyen</option>
			<option value="weak">Faible</option>	
		
		</select>
	</label>	
	</div>
export default InputSelect;	