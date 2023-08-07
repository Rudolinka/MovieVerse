import React from "react";
import MainTemplate from "../template/MainTemplate";
import HomepagePopular from "../components/homepageComponents/HomepagePopular";
import HomepageNowPlaying from "../components/homepageComponents/HomepageNowPlaying";
import * as Styled from "../components/homepageComponents/Homepage.styles";

const HomePage = () => {
	return (
		<MainTemplate>
			<Styled.HomePageWidth>
				<Styled.HomePageFlex>
					<HomepageNowPlaying />
				</Styled.HomePageFlex>
				<div>
					<HomepagePopular />
				</div>
			</Styled.HomePageWidth>
		</MainTemplate>
	);
};

export default HomePage;
