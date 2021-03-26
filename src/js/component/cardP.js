import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardP = props => {
	return (
		<div className="card">
			<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.orbital}</p>
				<p className="card-text">{props.rotation}</p>
				<Link to={"/planetsdetails/" + props.index2}>
					<button className="btn btn-primary">Learn more</button>
				</Link>
			</div>
		</div>
	);
};

CardP.propTypes = {
	//Card en mayuscula por ser el componente
	name: PropTypes.string,
	orbital: PropTypes.string,
	rotation: PropTypes.string,
	index2: PropTypes.number
};
