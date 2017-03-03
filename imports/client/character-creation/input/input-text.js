import React, { Component } from 'react';

const InputText = (props) => 

	<input type="text" name={props.name} value={props.value} onChange={props.onChange}/>
		
export default InputText;	 