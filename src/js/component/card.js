import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Characterdetails } from "../component/charactersdetails";

export const Card = props => {
	return (
		<div className="card text-center bg-dark" style={{ width: "8rem;" }}>
			<img
				className="card-img-top"
				src="https://cdn6.dibujos.net/images/listas/los-mejores-personajes-de-star-wars.jpg"
				alt="Card image cap"
				width={200}
				height={200}
			/>
			<div className="card-body text-white">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-tex">{props.hair}</p>
				<p className="card-text">{props.eyes}</p>
				<Link to={"/charactersdetails/" + props.index1}>
					<button className="btn btn-warning ">Learn more</button>
				</Link>
				<button type="button" className="btn btn-warning float-right">
					<i className="far fa-heart"></i>
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	//Card en mayuscula por ser el componente
	name: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string,
	index1: PropTypes.number
};
