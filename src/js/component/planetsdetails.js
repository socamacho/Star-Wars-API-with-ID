import React, { Fragment, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Component } from "react";
import { Context } from "../store/appContext";

export const Planetdetails = () => {
	const { store, actions } = useContext(Context);
	const { index2 } = useParams();

	return (
		<div className="container">
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img
							src="https://cdn.wallpapersafari.com/58/65/GOS7d8.jpg"
							alt="..."
							width={400}
							height={300}
						/>
					</div>
					<div className="col-md-8 bg-warning">
						<div className="card-body">
							<h5 className="card-title">{store.planets[index2].name}</h5>
							<p className="card-text text-dark">
								Cras vel mauris finibus, consequat augue vel, fringilla sapien. Praesent et odio elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
								ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
								inceptos himenaeos. Etiam fringilla egestas metus ut tincidunt. Vestibulum bibendum elit
								a mi hendrerit, sed efficitur purus ornare. Ut ultricies rhoncus finibus. In cursus eget
								orci vitae tristique. Integer ac varius urna.
							</p>
						</div>
					</div>
				</div>
			</div>
			<table className="table text-white">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Rotation_period</th>
						<th scope="col">Orbital_period</th>
						<th scope="col">Diameter</th>
						<th scope="col">Climate</th>
						<th scope="col">Gravity</th>
						<th scope="col">Terrain</th>
						<th scope="col">Surface_water</th>
						<th scope="col">Population</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">{store.planets[index2].name}</th>
						<td>{store.planets[index2].rotation_period}</td>
						<td>{store.planets[index2].orbital_period}</td>
						<td>{store.planets[index2].diameter}</td>
						<td>{store.planets[index2].climate}</td>
						<td>{store.planets[index2].gravity}</td>
						<td>{store.planets[index2].terrain}</td>
						<td>{store.planets[index2].surface_water}</td>
						<td>{store.planets[index2].population}</td>
					</tr>
				</tbody>
			</table>

			<div>
				<Link to="/planets">
					<div className="d-flex justify-content-center">
						<button className="btn btn-outline-warning">Back to Planets Menu</button>
					</div>
				</Link>
			</div>
		</div>
	);
};
