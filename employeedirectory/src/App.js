import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/header';
import SearchBar from './components/SearchBar/searchBar';
import ResultTable from './components/ResultTable/resultTable';
import API from './utils/api';

function App() {
	// variable (State)

	// variable 1
	// set the variable searchTarget by useState
	// - default value as ""
	// - use setSearchTarget function to change the searchTarget value
	const [searchTarget, setSearchTarget] = useState('');
	// variable 2
	// set the variable employeeData by useState
	// the employeeData is the data from the API call and render to component resultTable
	// - default value as ""
	// - use setEmployeeData function to change the employeeData value
	const [employeeData, setEmployeeData] = useState({
		fullList: [],
	});

	// function

	// function 1 - handleInputChange
	// input the name enter by the user and put it into variable searchTarget
	function handleInputChange(event) {
		// console.log(event.target);
		console.log(event.target.value);
		setSearchTarget(event.target.value);
	}

	// use "useeffect" to load the data from random employee list
	useEffect(() => {
		API.getAllEmployee().then((results) => {
			console.log(results.data.results);
			// setEmployeeData({ fullList: results.data.results });
			setEmployeeData({ ...employeeData, fullList: results.data.results });
		});
	}, []);

	// use "useeffect" for console logging as the API call is async
	useEffect(() => {
		console.log(employeeData);
	}, [employeeData]);

	return (
		<div className='App'>
			<Header />
			<SearchBar
				handleInputChange={handleInputChange}
				searchTarget={searchTarget}
			/>
			<ResultTable
				resultList={employeeData.fullList}
				searchTarget={searchTarget}
			/>
		</div>
	);
}

export default App;
