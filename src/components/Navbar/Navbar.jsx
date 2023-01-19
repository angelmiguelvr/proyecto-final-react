import React, {useState} from 'react';
import Tlapalerias from '../../image/Tlapalerias.png';
import "./navbar.scss";
import {Link} from "react-router-dom";

function Navbar (){
	const [menu, setMenu] = useState(false);

	function mostrarMenu() {
		setMenu(item => !item)
	}

	return (
			<header className="header">
				<div className="header__container container">
					<Link to={"/"}>
						<img className="header__logo" src={Tlapalerias} alt="logo"/>
					</Link>

					<nav className="header__nav">
						<ul className={`header__menu header__menu--principal hidden-mobil ${menu ? 'is-active' : ''}`}>
							<li className="header__close">
								<span className="header__link material-symbols-outlined" onClick={mostrarMenu}>close</span>
							</li>
							<li>
								<Link to={"/"} className="header__link">Inicio</Link>
							</li>
							<li>
								<Link to={"productos"} className="header__link">Productos</Link>
							</li>
							<li>
								<Link to={"contacto"} className="header__link">Contacto</Link>
							</li>
						</ul>

						<ul className="header__menu">
							<li className="hidden-desktop">
								<span className="header__link material-symbols-outlined" onClick={mostrarMenu}>menu</span>
							</li>

							<li>
								<span className="header__link material-symbols-outlined">garden_cart</span>
							</li>
						</ul>
					</nav>
				</div>
			</header>
	);
}

export default Navbar;