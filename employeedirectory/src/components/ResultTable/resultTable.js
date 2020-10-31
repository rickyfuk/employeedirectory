import React from 'react';
import './resultTable.css';

function ResultTable(props) {
	return (
		<div className='staffSearch'>
			{props.fullList.map((fullList) => (
				<div>{fullList}</div>
			))}
		</div>
	);
}

export default ResultTable;
