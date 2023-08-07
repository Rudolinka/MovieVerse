import React from "react";

const HomepageNowPlayingContent = ({ item }) => {
	return (
		<div>
			<img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
			<h2>{item.title}</h2>
		</div>
	);
};

export default HomepageNowPlayingContent;
