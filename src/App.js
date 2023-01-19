import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.scss';
import {Footer} from "./components/Footer/Footer";
import AppRouter from "./routes/AppRoute";


function App() {
	return (
		<>
			<Navbar/>
			<AppRouter/>
			<Footer/>
		</>
	);
}

export default App;
