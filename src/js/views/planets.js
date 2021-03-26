import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CardP } from "../component/cardP";

export const Planets = () => {
	const { store } = useContext(Context);
	console.log("data", store.planets);

	return (
		<div className="container text-center mt-5">
			<h1>Planets</h1>
			<div className="scrolling-wrapper">
				{store.planets.map((item, index) => {
					return (
						<CardP
							key={index}
							name={item.name}
							orbital={item.orbital_period}
							rotation={item.rotation_period}
						/>
					);
				})}
			</div>

			<Link to="/">
				<button className="btn btn-primary">Go Home</button>
			</Link>
		</div>
	);
};
