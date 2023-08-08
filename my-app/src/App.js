import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

export const App = () => {
	// императивный, получить текущую дату
	const [time, setTime] = useState(new Date()); //декларативный
	useEffect(() => {
		const interval = setInterval(() => {
			//декларативный
			setTime(new Date()); //декларативный
		}, 1000);
		return () => clearInterval(interval); //декларативный
	}, []);
	const year = time.getFullYear(); // декларативный
	// императивный, вернуть HTML разметку
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div className="App-link">{year}</div>
			</header>
		</div>
	);
};
