import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ widht: "18rem;" }}>
			<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.hair}</p>
				<p className="card-text">{props.eyes}</p>
				<a href="#" className="btn btn-primary">
					Learn more
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	//Card en mayuscula por ser el componente
	name: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string
};
