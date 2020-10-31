import React from 'react';
import './searchBar.css';

function SearchBar(props) {
	return (
		<div className='staffSearch'>
			<div className='staffSearchTitle'>
				<h4>Search Employee</h4>
			</div>
			<div className='input-group mb-3'>
				<input
					type='text'
					className='form-control'
					placeholder='Enter an employee name'
					// the attribute "value" for saving the user input
					value={props.searchTarget}
					// the attribute "onChange" is an event listening where kicks the handleInputChange function whenever the input is change
					onChange={props.handleInputChange}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
