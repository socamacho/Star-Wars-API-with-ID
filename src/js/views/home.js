import React, { useState, useEffect } from "react";
import "../../styles/home.scss";

import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>STAR WARS</h1>
		<span>
			<Link to="/planets">
				<img
					width={300}
					height={200}
					src="https://miro.medium.com/max/1920/1*encF5EeouyEH8YTANng4Aw.png"
					className="rounded-pill"
					alt="Planets"
				/>
			</Link>
		</span>
		<span>
			<Link to="/characters">
				<img
					width={300}
					height={200}
					src="https://api.time.com/wp-content/uploads/2017/12/star-wars-quiz.jpg"
					className="rounded-pill"
					alt="Characters"
				/>
			</Link>
		</span>
	</div>
);
