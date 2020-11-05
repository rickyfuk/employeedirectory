import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/header';
import SearchBar from './components/SearchBar/searchBar';
import ResultTable from './components/ResultTable/resultTable';
import API from './utils/api';

// test
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
		filteredList: [],
		headings: [
			{
				name: 'Image',
				width: '15%',
				class: 'resultTableImage',
				order: 'ascend',
			},
			{ name: 'Name', width: '35%', class: 'resultTableName', order: 'ascend' },
			{
				name: 'Phone',
				width: '15%',
				class: 'resultTablePhone',
				order: 'ascend',
			},
			{ name: 'Email', width: '35%', class: 'resultTable', order: 'ascend' },
		],
	});

	// function

	// function 1 - handleInputChange
	// input the name enter by the user and put it into variable searchTarget
	function handleInputChange(event) {
		// console.log(event.target);
		console.log(event.target.value);
		setSearchTarget(event.target.value);
		const filteritem = event.target.value;
		const filteredListData = employeeData.fullList.filter((item) => {
			let values =
				item.name.first.toLowerCase() + ' ' + item.name.last.toLowerCase();
			console.log(filteritem, values);
			if (values.indexOf(filteritem.toLowerCase()) !== -1) {
				return item;
			}
		});

		setEmployeeData({ ...employeeData, filteredList: filteredListData });
	}

	const handleSort = (heading) => {
		console.log(heading);
		console.log(heading.order);
		// console.log(currentOrder);
		if (heading.order === 'descend') {
			heading.order = 'ascend';
		} else {
			heading.order = 'descend';
		}

		const compareFnc = (a, b) => {
			console.log(a);
			console.log(b);
			console.log(heading.order);
			console.log(heading.name);
			console.log(heading.name.toLowerCase());
			console.log(heading.name.toLowerCase() === 'name');
			const trytry = heading.name;
			console.log(a['phone']);
			console.log(a[trytry]);
			console.log(b['phone']);
			if (heading.order === 'ascend') {
				console.log('ascend is run');
				// account for missing values
				if (a[heading.name.toLowerCase()] === undefined) {
					console.log('if underfined is run for 1');
					return 1;
				} else if (b[heading.name.toLowerCase()] === undefined) {
					console.log('if underfined is run for -1');
					return -1;
				}
				// numerically
				else if (heading.name.toLowerCase() === 'name') {
					console.log('if name sort');
					console.log(b[heading.name.toLowerCase()]);
					console.log(a[heading.name.toLowerCase()]);
					return a[heading.name.toLowerCase()].first
						.toString()
						.localeCompare(b[heading.name.toLowerCase()].first.toString());
				} else if (heading.name.toLowerCase() === 'phone') {
					console.log('if phnoe sort');
					console.log(b[heading.name.toLowerCase()]);
					console.log(a[heading.name.toLowerCase()]);
					return a[heading.name.toLowerCase()] - b[heading.name.toLowerCase()];
				} else {
					console.log('if other sort');
					console.log(b[heading.name.toLowerCase()]);
					console.log(a[heading.name.toLowerCase()]);
					return a[heading.name.toLowerCase()]
						.toString()
						.localeCompare(b[heading.name.toLowerCase()].toString());
				}
			} else {
				console.log('desend is run');
				// account for missing values
				if (a[heading.name.toLowerCase()] === undefined) {
					console.log('else underfined is run for 1');
					console.log(b[heading.name.toLowerCase()]);
					console.log(a[heading.name.toLowerCase()]);
					return 1;
				} else if (b[heading.name.toLowerCase()] === undefined) {
					console.log('else underfined is run for -1');
					console.log(b[heading.name.toLowerCase()]);
					console.log(a[heading.name.toLowerCase()]);
					return -1;
				}
				// numerically
				else if (heading.name.toLowerCase() === 'Name') {
					console.log('else name sort');
					console.log(b[heading.name.toLowerCase()]);
					console.log(a[heading.name.toLowerCase()]);
					return a[heading.name.toLowerCase()].first
						.toString()
						.localeCompare(b[heading.name.toLowerCase()].first.toString());
				} else if (heading.name.toLowerCase() === 'Phone') {
					console.log('else phone sort');
					console.log(b[heading.name.toLowerCase()]);
					console.log(a[heading.name.toLowerCase()]);
					return a[heading.name.toLowerCase()] - b[heading.name.toLowerCase()];
				} else {
					console.log('else other sort');
					return a[heading.name.toLowerCase()]
						.toString()
						.localeCompare(b[heading.name.toLowerCase()].toString());
				}
			}
		};
		const sortedUsers = employeeData.filteredList.sort(compareFnc);
		console.log(sortedUsers);
		const updatedHeadings = employeeData.headings.map((elem) => {
			elem.order = elem.name === heading.name ? heading.order : elem.order;
			return elem;
		});

		setEmployeeData({
			...employeeData,
			filteredUsers: sortedUsers,
			headings: updatedHeadings,
		});
	};

	// use "useeffect" to load the data from random employee list
	useEffect(() => {
		API.getAllEmployee().then((results) => {
			console.log(results.data.results);
			// setEmployeeData({ fullList: results.data.results });
			setEmployeeData({
				...employeeData,
				fullList: results.data.results,
				filteredList: results.data.results,
			});
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
				handleSort={handleSort}
				resultList={employeeData.filteredList}
				tableHead={employeeData.headings}
			/>
		</div>
	);
}

export default App;
