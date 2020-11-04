import React from 'react';
import './resultTable.css';
import ResultTableHead from './ResultTableHead/resultTableHead';
import ResultTableBody from './ResultTableBody/resultTableBody';

function ResultTable(props) {
	console.log(props);

	// // function for filter out the input from the user
	// const handleSearchChange = (event) => {
	// 	const filter = event.target.value;
	// 	const filteredList = developerState.users.filter((item) => {
	// 		let values = item.name.first.toLowerCase();
	// 		return values.indexOf(filter.toLowerCase()) !== -1;
	// 	});

	// 	setDeveloperState({
	// 		...developerState,
	// 		filteredUsers: filteredList,
	// 	});
	// };

	return (
		<div className='resultTable mt-2'>
			<table className='table'>
				<ResultTableHead
					tableHead={props.tableHead}
					tableSort={props.handleSort}
					// resultList={props.resultList}
				/>
				<ResultTableBody
					resultList={props.resultList}
					// searchTarget={props.searchTarget}
				/>
			</table>
		</div>
	);
}

export default ResultTable;
