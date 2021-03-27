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
							orbital={"Orbital period:" + item.orbital_period}
							rotation={"Rotation period:" + item.rotation_period}
							index2={index}
						/>
					);
				})}
			</div>
			<Link to="/">
				<button className="btn btn-warning">Go Home</button>
			</Link>
		</div>
	);
};
