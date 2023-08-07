import React from "react";
import MainTemplate from "../template/MainTemplate";
import HomepagePopular from "../components/homepageComponents/HomepagePopular";
import HomepageNowPlaying from "../components/homepageComponents/HomepageNowPlaying";

const HomePage = () => {
	return (
		<div>
			<MainTemplate>
				<div>
					<HomepageNowPlaying />
				</div>
				<div>
					<HomepagePopular />
				</div>
			</MainTemplate>
		</div>
	);
};

export default HomePage;
