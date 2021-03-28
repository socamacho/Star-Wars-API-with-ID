import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context); //Nota: Codigo utilizado para sintonizar las acciones ocurridas en el store.
	const handleOnclick = () => {
		actions.addFavorites(); //verificar si funciona esta funcion
	};

	const DeleteFavorite = index => {
		actions.removeFavorites(index);
	};

	return (
		<nav className="navbar navbar-light mb-3">
			<img
				width={100}
				height={100}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
				alt="Star Wars"
				className="rounded-lg"
			/>
			<Link to="/">
				<span className="navbar-brand mb-0 h1" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites <span className="badge badge-warning">{store.favoritos.length}</span>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favoritos.map((item, index) => {
							//Nota: En item se muestra el valor que yo estoy trabajando.
							return (
								<a className="dropdown-item" href="#" key={index}>
									{item}

									<button
										type="button"
										className="btn btn-dark"
										onClick={e => {
											DeleteFavorite(index);
										}}>
										<i className="fas fa-trash"></i>
									</button>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
