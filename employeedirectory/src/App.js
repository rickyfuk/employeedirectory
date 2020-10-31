import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import SearchBar from './components/SearchBar/searchBar';

function App() {
	const [searchTarget, setSearchTarget] = useState('');

	function handleStaffSearching(event) {
		setSearchTarget(event.target.value);
	}

	return (
		<div className='App'>
			<Header />
			<SearchBar
				staffSearching={handleStaffSearching}
				searchTarget={searchTarget}
			/>
			{/* <ResultTable /> */}
		</div>
	);
}

export default App;
