import React from 'react';
// import ResultTableBody from '../ResultTableBody/resultTableBody';

function ResultTableHead(props) {
	console.log(props);
	return (
		<thead>
			<tr>
				{props.tableHead.map((eachData) => {
					return (
						<th
							className='col resultTableHead'
							key={eachData.name}
							onClick={() => {
								// context.handleSort(name.toLowerCase());
								props.tableSort(eachData);
							}}
						>
							{eachData.name}
							<span className='pointer'></span>
						</th>
					);
				})}
			</tr>
			{/* <ResultTableBody
				resultList={props.resultList}
				// searchTarget={props.searchTarget}
			/> */}
		</thead>
	);
}

export default ResultTableHead;
