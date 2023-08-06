import { Link } from "react-router-dom";
import { styled } from "styled-components";
import img from "../img/tape2.jpg";

export const ListElement = styled.li``;

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

export const NavLink = styled(Link)``;

export const Wrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: space-between;
	height: 350px;
	background-image: url(${img});
	background-size: cover;
  background-position: center;
	&::after,
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 130, 0.3);
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
