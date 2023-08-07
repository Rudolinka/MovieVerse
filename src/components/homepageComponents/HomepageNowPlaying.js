import React from "react";
import { Link } from "react-router-dom";

const HomepageMovies = ({ item }) => {
	return (
		<div>
			<h2>{item.title}</h2>
		</div>
	);
};

export default HomepageMovies;
