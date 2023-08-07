import React, { useEffect, useState } from "react";
import HomepageNowPlayingContent from "./HomepageNowPlayingContent";
import * as Styled from "../homepageComponents/Homepage.styles";

const HomepageNowPlaying = () => {
	const [nowPlaying, setNowPlaying] = useState([]);

	useEffect(() => {
		getNowPlaying();
	}, []);

	const getNowPlaying = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?api_key=0ba05d0772c0df63f36bf3843a553887"
		);
		const data = await response.json();
		setNowPlaying(data.results);
	};

	// console.log(nowPlaying);

	return (
		<Styled.MovieMap>
			{nowPlaying.map((movie) => (
				<HomepageNowPlayingContent key={movie.id} item={movie} />
			))}
		</Styled.MovieMap>
	);
};

export default HomepageNowPlaying;
