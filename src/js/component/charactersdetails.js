import React from "react";
import { Link } from "react-router-dom";
export const Characterdetails = () => {
	return (
		<div>
			<Link to="/characters">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
