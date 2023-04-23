import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { CalculatorContext } from './context/CalculatorContext';

function App() {
	// const [ termObj, setTermObj ] = useState([]);

	return (
		<CalculatorContext.Provider>
			<Header />
			<MainContainer />
		</CalculatorContext.Provider>
	);
}

export default App;
