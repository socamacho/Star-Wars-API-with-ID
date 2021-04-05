import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characterdetails = () => {
	const { store, actions } = useContext(Context);
	const { index1 } = useParams();

	return (
		<div className="container">
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4 bg-dark">
						<img
							src="https://fivethirtyeight.com/wp-content/uploads/2014/07/499502015tc035_star_wars_ex.jpg?w=575"
							alt="..."
							width={400}
							height={300}
						/>
					</div>
					<div className="col-md-8 bg-warning">
						<div className="card-body">
							<h5 className="card-title">{store.peoples[index1].name}</h5>
							<p className="card-text text-dark">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar ante molestie
								venenatis feugiat. Aliquam quis nibh libero. In lacus odio, facilisis sed tortor in,
								lacinia consectetur velit. Nam finibus leo hendrerit urna sollicitudin, ut rutrum purus
								molestie. Praesent a purus turpis. Cras sed luctus neque. Maecenas augue enim,
								vestibulum id dui ut, interdum viverra est. Quisque erat ex, sodales ut magna in, tempor
								vehicula nulla. Nunc pretium sapien nec aliquam consequat. Nulla facilisi. Fusce ante
								est, porttitor eu hendrerit vel, mattis vitae felis. In hac habitasse platea dictumst.
								Proin tempus eros et enim tristique, in ullamcorper quam porta. Vivamus accumsan dictum
								nisi, et ultricies velit maximus a.
							</p>
						</div>
					</div>
				</div>
			</div>
			<table className="table text-white">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Height</th>
						<th scope="col">Mass</th>
						<th scope="col">Hair color</th>
						<th scope="col">Skin color</th>
						<th scope="col">Eye color</th>
						<th scope="col">Birth year</th>
						<th scope="col">Gender</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">{store.peoples[index1].name}</th>
						<td>{store.peoples[index1].height}</td>
						<td>{store.peoples[index1].mass}</td>
						<td>{store.peoples[index1].hair_color}</td>
						<td>{store.peoples[index1].skin_color}</td>
						<td>{store.peoples[index1].eye_color}</td>
						<td>{store.peoples[index1].birth_year}</td>
						<td>{store.peoples[index1].gender}</td>
					</tr>
				</tbody>
			</table>
			<div>
				<Link to="/characters">
					<div className="d-flex justify-content-center">
						<button className="btn btn-outline-warning">Back to Characters Menu</button>
					</div>
				</Link>
			</div>
		</div>
	);
};
