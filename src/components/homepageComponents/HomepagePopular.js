import React, { useEffect, useState } from "react";
import HomepagePopularContent from "./HomepagePopularContent";

const HomepagePopular = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=0ba05d0772c0df63f36bf3843a553887"
		);
		const data = await response.json();
		setPopular(data.results);
	};

	console.log(popular);

	return (
		<div>
			<div>
				{popular.map((popular) => (
					<HomepagePopularContent key={popular.id} item={popular} />
				))}
			</div>
		</div>
	);
};

export default HomepagePopular;
