import React from 'react';
import Card from './card';

export default function List(props) {
	return (
		<div className='list'>
			{props.title}
		  <Card text="zoolander" />
		  <Card text="prince" />
		  <Card text="mars" />

		<button>Test</button>


	);
}
