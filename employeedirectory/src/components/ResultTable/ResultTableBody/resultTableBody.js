import React from 'react';

function ResultTableBody(props) {
	// console.log(props);
	// function formatDate(date) {
	// 	const dateArray = date.split('-');
	// 	const year = dateArray[0];
	// 	const month = dateArray[1];
	// 	const dayArray = dateArray[2].split('T');
	// 	const day = dayArray[0];
	// 	const formattedDate = [month, day, year].join('-');
	// 	return formattedDate;
	// }

	return (
		<tbody>
			{/* {props.searchTarget} */}
			{props.resultList.map((eachData) => {
				return (
					<tr key={eachData.login.uuid}>
						<td data-th='Image' className='align-middle resultTableBody'>
							<img
								src={eachData.picture.medium}
								alt={
									'profile image for ' +
									eachData.name.first +
									' ' +
									eachData.name.last
								}
								className='img-responsive'
							/>
						</td>
						<td
							data-th='Name'
							className='name-cell align-middle resultTableBody'
						>
							{eachData.name.first} {eachData.name.last}
						</td>
						<td data-th='Phone' className='align-middle resultTableBody'>
							{eachData.phone}
						</td>
						<td data-th='Email' className='align-middle resultTableBody'>
							<a href={'mailto:' + eachData.email} target='__blank'>
								{eachData.email}
							</a>
						</td>
						{/* <td data-th='DOB' className='align-middle'>
							{formatDate(eachData.dob.date)}
						</td> */}
					</tr>
				);
			})}
		</tbody>
	);
}

export default ResultTableBody;
