import React from 'react';
import './resultTable.css';

function ResultTable(props) {
	console.log(props);
	return (
		<div className='staffSearch'>
			{props.fullList.employeeData.map((eachData) => (
				<div>{eachData}</div>
			))}
			hello
		</div>
	);
}

export default ResultTable;
