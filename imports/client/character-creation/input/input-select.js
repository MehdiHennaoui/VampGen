import React, { Component } from 'react';

const InputSelect = () =>

	<select name={props.name} value={props.value} onChange={props.onChange}/>
		<option value="camarilla">camarilla</option>
		<option value="sabbat">sabbat</option>
		<option value="inde"></option>	
	</select>