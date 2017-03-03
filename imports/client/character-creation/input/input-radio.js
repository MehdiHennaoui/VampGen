import React, { Component } from 'react';

const InputRadio = (props) =>
	<div key={props.id}>
	<label>{props.labelName}</label><input type="radio" name={props.name} value={props.value}/>
	</div>

export default InputRadio;	