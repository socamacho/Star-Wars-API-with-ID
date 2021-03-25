import React from "react";
import PropTypes from "prop-types";

export const CardP = props => {
	return (
		<div className="card" style={{ widht: "18rem;" }}>
			<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.orbital}</p>
				<p className="card-text">{props.rotation}</p>
				<a href="#" className="btn btn-primary">
					Learn more
				</a>
			</div>
		</div>
	);
};

CardP.propTypes = {
	//Card en mayuscula por ser el componente
	name: PropTypes.string,
	orbital: PropTypes.string,
	rotation: PropTypes.string
};
