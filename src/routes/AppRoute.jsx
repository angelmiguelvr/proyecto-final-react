import { Routes, Route } from "react-router-dom";
import {Home} from "../Pages/Home";
import {Productos} from "../Pages/Productos";
import {Contacto} from "../Pages/Contacto";

export default function AppRouter (){
	return(
		<Routes>
			<Route exact path="/" element={<Home/>}/>
			<Route exact path="/productos" element={<Productos />}/>
			<Route exact path="/contacto" element={<Contacto />}/>
		</Routes>
	);
}