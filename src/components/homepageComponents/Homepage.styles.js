import { styled } from "styled-components";

export const HomePageWidth = styled.div`
	margin: 0 auto;
	padding: 10px;
	max-width: 1400px;
	height: 100%;
	background-color: #000d38;
`;

export const HomePageFlex = styled.div``;

export const MovieCard = styled.div``;

export const MovieName = styled.h2`
	width: 70%;
	font-size: 15px;
	font-weight: 500;
	color: white;
`;

export const MoviePoster = styled.img`
	width: 100%;
`;

export const MovieMap = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 15px;
`;
