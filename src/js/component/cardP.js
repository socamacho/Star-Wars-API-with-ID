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
		<div className="card text-center bg-dark">
			<img
				className="card-img-top"
				src="https://imgix.bustle.com/uploads/shutterstock/2020/4/6/7a3eef2c-6ee8-464c-9bf6-acd251085e52-shutterstock-1029243295.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
				alt="Card image cap"
				width={200}
				height={200}
			/>
			<div className="card-body text-white">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.orbital}</p>
				<p className="card-text">{props.rotation}</p>
				<Link to={"/planetsdetails/" + props.index2}>
					<button className="btn btn-warning">Learn more</button>
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
