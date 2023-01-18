import React from 'react';
import Tlapalerias from '../image/Tlapalerias.png';
import "./navbar.css";

function Navbar (){
	return (
			
			<div className="contenedor">
					<img className="nav__logo" src={Tlapalerias} alt="logo"/>

				<nav className='nav'>
					
					<ul className="nav__menu">
						<li className="nav__item"><a href="#" className="menu__link"></a> Inicio</li>
						<li className="nav__item"><a href="#" className="menu__link"></a> Productos</li>
						<li className="nav__item"><a href="#" className="menu__link"></a> Contacto</li>
						<li className="nav__bars"><span class="material-symbols-outlined">menu</span></li>
						<li className="nav__car" ><span className="material-symbols-outlined">garden_cart</span></li>
					</ul>


				</nav>
			</div>
	);
}

export default Navbar;