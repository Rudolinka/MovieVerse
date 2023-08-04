import { Link } from "react-router-dom";
import { styled } from "styled-components";
import img from "../img/kurtyna.jpg";

export const ListElement = styled.li`
	display: inline-block;
	margin-right: 8px;
	padding: 5px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
	font-size: 35px;
	&:hover {
		font-size: 37px;
		text-shadow: 3px 3px 3px royalblue;
	}
`;

export const NavElement = styled.nav`
	z-index: 1;
	padding: 5px;
	align-self: flex-end;
`;

// export const NamePage = styled.h2`
// 	margin: 0;
// 	color: white;
// 	font-size: 50px;
// 	z-index: 1;
// `;

export const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	z-index: 1;
`;

export const Wrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: space-between;
	height: 300px;
	background-image: url(${img});
	background-size: cover;
	background-position: 0 50%;
	&::after,
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

export const ComebackHp = styled(Link)`
	position: absolute;
	top: 0;
	left: 0;
	font-family: "Montserrat";
	font-weight: bold;
	text-decoration: none;
	left: 40px;
	height: 60px;
	padding: 10px;
	margin: 0;
	color: white;
	font-size: 70px;
	z-index: 1;
`;

export const Search = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-end;
	flex-wrap: wrap;
	align-self: flex-end;
	padding: 15px;
	font-size: 35px;
	color: white;
	z-index: 1;
`;

export const Clapper = styled.img`
	position: relative;
	top: 150px;
	left: 70px;
	margin: 5px;
	padding: 10px;
	width: 150px;
	height: 150px;
	z-index: 1;
`;
