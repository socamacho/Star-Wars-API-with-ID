import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

export const Characters = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);

	return (
		<div className="container text-center mt-5">
			<h1>Characters</h1>
			<div className="scrolling-wrapper">
				{store.peoples.map((item, index) => {
					return (
						<Card
							key={index}
							name={item.name}
							hair={"Hair color:   " + item.hair_color}
							eyes={"Eyes color:    " + item.eyes_color}
							index1={index}
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
