import React from "react";
import MainTemplate from "../template/MainTemplate";
import { useEffect } from "react";
import { useState } from "react";
import HomepageMovies from "../components/HomepageMovies";

const HomePage = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovies();
	}, []);

	const getMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/discover/movie?api_key=0ba05d0772c0df63f36bf3843a553887"
		);
		const data = await response.json();
		setMovies(data.results);
	};

	console.log(movies);

	return (
		<div>
			<MainTemplate>
				<div>
					{movies.map((movie) => (
						<HomepageMovies key={movie.id} item={movie} />
					))}
				</div>
			</MainTemplate>
		</div>
	);
};

export default HomePage;
