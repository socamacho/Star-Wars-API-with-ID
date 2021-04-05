import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Planetdetails } from "../component/planetsdetails";
import { Context } from "../store/appContext";

export const CardP = props => {
	const { store, actions } = useContext(Context); //De esta manera cargo la action del flux, al sintonizar por medio de store y actions.

	const OnClickEvent = e => {
		const PlanetName = props.name;
		if (store.favoritos.find(NombrePlaneta => NombrePlaneta === PlanetName)) {
			//Si TRUE : No agregar
		} else {
			actions.addFavorites(props.name);
			//Si FALSE: Agregar
		}
	};

	return (
		<div className="card text-center text-warning bg-dark">
			<img
				className="card-img-top"
				src="https://static.wikia.nocookie.net/starwars/images/9/98/Taris_TOR.png/revision/latest?cb=20190421041041"
				alt="Card image cap"
				width={100}
				height={100}
			/>
			<div className="card-body text-white">
				<h5 className="card-title text-warning">{props.name}</h5>
				<p className="card-text">{props.orbital}</p>
				<p className="card-text">{props.rotation}</p>
				<Link to={"/planetsdetails/" + props.index2}>
					<button className="btn btn-outline-warning">Learn more</button>
					<button type="button" className="btn btn-warning float-right">
						<i className="far fa-heart" onClick={e => OnClickEvent(e)}></i>
					</button>
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
