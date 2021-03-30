import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characterdetails = () => {
	const { store, actions } = useContext(Context);
	const { index1 } = useParams();

	return (
		<div className="card mb-3" style="max-width: 540px;">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src="..." alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{store.peoples[index1].name}</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
