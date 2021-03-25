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
			<div className="card-deck">
				{store.planets.map((item, index) => {
					return (
						<div key={index} className="col-md-4 mb-3">
							<CardP name={item.name} orbital={item.orbital_period} rotation={item.rotation_period} />
						</div>
					);
				})}
			</div>

			<Link to="/">
				<button className="btn btn-primary">Go Home</button>
			</Link>
		</div>
	);
};
