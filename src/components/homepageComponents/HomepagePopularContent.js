import React from "react";
import { Link } from "react-router-dom";

const HomepagePopularContent = ({ item }) => {
	return (
		<Link to={`/movie/${item.id}`}>
			<img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
			<h3>{item.title}</h3>
		</Link>
	);
};

export default HomepagePopularContent;
