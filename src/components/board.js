import React from 'react';
import List from './list';

export default function Board(props) {
	return (
		<div class="board">
				{props.master}
  			<List title="SuperStar" />
  			<List title="Bizmarkee"/>
  			<List title="MovieMaker" />
		</div>

		);
}
