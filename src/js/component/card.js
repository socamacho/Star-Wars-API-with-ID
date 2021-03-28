import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Characterdetails } from "../component/charactersdetails";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context); //De esta manera cargo la action del flux, al sintonizar por medio de store y actions.

	const OnClickEvent = e => {
		actions.setStoreValorFavs();
	};

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
					<i className="far fa-heart" onClick={e => OnClickEvent(e)}></i>
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
