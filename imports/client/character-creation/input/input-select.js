import React, { Component } from 'react';

const InputSelect = () =>

	<select name={props.name} value={props.value} onChange={props.onChange}>
		
		<option value="camarilla">Camarilla</option>
		<option value="sabbat">Sabbat</option>
		<option value="inde">Independant</option>	
	
	</select>

export default InputSelect;	