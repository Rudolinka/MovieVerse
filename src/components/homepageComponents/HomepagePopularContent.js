import React from "react";

const HomepagePopularContent = ({ item }) => {
	return (
		<div>
			<img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
			<h3>{item.title}</h3>
		</div>
	);
};

export default HomepagePopularContent;
