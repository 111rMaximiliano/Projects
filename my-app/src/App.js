import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

export const App = () => {
	const [time, setTime] = useState(new Date());
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	const year = time.getFullYear();

	const appDiv = document.createElement("div");
	appDiv.className = "App";
	const appHeader = document.createElement("header");
	appHeader.className = "App-header";
	const appImg = document.createElement("img");
	appImg.className = "App-logo";
	appImg.src = { logo };
	appImg.alt = "logo";
	const appCode = document.createElement("code");
	appCode.textContent = "src/App.js";
	const appP = document.createElement("p");
	appP.textContent = `'Edit' ${appCode} 'and save to reload 2.'`;
	const appA = document.createElement("a");
	appA.className = "App-link";
	appA.href = "https://reactjs.org";
	appA.target = "_blank";
	appA.rel = "noopener noreferrer";
	appA.textContent = "Learn React";
	const appDiv1 = document.createElement("div");
	appDiv1.className = "App-link";
	appDiv1.textContent = { year };
};
