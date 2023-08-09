import React from 'react';
import * as Styled from '../homepageComponents/Homepage.styles';
import { Link } from 'react-router-dom';
const HomepageNowPlayingContent = ({ item }) => {
	return (
		<Link to={`/movie/${item.id}`}>
			<Styled.MovieCard>
				<Styled.MoviePoster
					src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
				/>
				<Styled.MovieName>{item.title}</Styled.MovieName>
			</Styled.MovieCard>
		</Link>
	);
};

export default HomepageNowPlayingContent;
