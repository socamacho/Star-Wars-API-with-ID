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
			<div className="card-deck">
				{store.peoples.map((item, index) => {
					return (
						<div key={index} className="col-md-4 mb-3">
							<Card
								name={"Name:" + item.name}
								hair={"Hair color:" + item.hair_color}
								eyes={"Hair eyes:" + item.eyes_color}
							/>
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
