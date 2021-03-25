import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
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
				<Link to="/demo">
					<button className="btn btn-primary">
						Favorites <span className="badge badge-light">0</span>
						<i className="fad fa-chevron-down"></i>
					</button>
				</Link>
			</div>
		</nav>
	);
};
