import React, { useEffect, useState } from 'react';
import MainTemplate from '../template/MainTemplate';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
	const params = useParams();

	const [movie, setMovie] = useState([]);
	useEffect(() => {
		getMovie();
	}, []);
	const getMovie = async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=0ba05d0772c0df63f36bf3843a553887`
		);
		const data = await response.json();
		setMovie(data);
	};

	console.log(movie);

	return (
		<div>
			<MainTemplate>
				<h2>{movie.title}</h2>
				<h2>{movie.original_language}</h2>
				<p>{movie.release_date}</p>
				<p>{movie.overview}</p>
				<p>{movie.backdrop_path}</p>
				<p>{movie.poster_path}</p>
				<img src={`https://image.tmdb.org/t/p/w300/${movie.homepage}`}/>
				<p>{movie.original_language}</p>
				<p>{movie.original_language}</p>
				<p>{movie.original_language}</p>
			</MainTemplate>
		</div>
	);
};




export default MoviePage;
