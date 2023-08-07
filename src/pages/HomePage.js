import React from "react";
import MainTemplate from "../template/MainTemplate";
import { useEffect } from "react";
import { useState } from "react";
import HomepageMovies from "../components/homepageComponents/HomepageNowPlaying";

const HomePage = () => {
	const [nowPlaying, setNowPlaying] = useState([]);
	const [popular, setPopular] = useState([]);
	

	useEffect(() => {
		getNowPlaying();
	}, []);

	useEffect(() => {
		getPopular();
	}, []);

	const getNowPlaying = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?api_key=0ba05d0772c0df63f36bf3843a553887"
		);
		const data = await response.json();
		setNowPlaying(data.results);
	};
	const getPopular = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=0ba05d0772c0df63f36bf3843a553887"
		);
		const data = await response.json();
		setPopular(data.results);
	};

	console.log(nowPlaying);



	return (
		<div>
			<MainTemplate>
				<div>
					{nowPlaying.map((movie) => (
						<HomepageMovies key={movie.id} item={movie} />
					))}
				</div>
				<div>
					<div>
						{popular.map((popular) => (
							<HomepageMovies key={popular.id} item={popular} />
						))}
					</div>
				</div>
			</MainTemplate>
		</div>
	);
};

export default HomePage;
