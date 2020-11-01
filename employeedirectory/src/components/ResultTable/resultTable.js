import React from 'react';
import './resultTable.css';
import ResultDataContext from '../../utils/resultTableData';

function ResultTable(props) {
	console.log(props);
	return (
		<div className='resultTable mt-2'>
			<table className='table' />
			<tr>
				<th>Company</th>
				<th>Contact</th>
				<th>Country</th>
			</tr>
			<tr>
				<td>Alfreds Futterkiste</td>
				<td>Maria Anders</td>
				<td>Germany</td>
			</tr>
			{props.searchTarget}
			{props.resultList.length > 0 &&
				props.resultList.map((eachData) => <div>{eachData.gender}</div>)}
		</div>
	);
}

export default ResultTable;
