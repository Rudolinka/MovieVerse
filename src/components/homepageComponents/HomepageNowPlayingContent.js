import React from "react";
import * as Styled from "../homepageComponents/Homepage.styles";
const HomepageNowPlayingContent = ({ item }) => {
	return (
		<Styled.MovieCard>
			<Styled.MoviePoster
				src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
			/>
			<Styled.MovieName>{item.title}</Styled.MovieName>
		</Styled.MovieCard>
	);
};

export default HomepageNowPlayingContent;
