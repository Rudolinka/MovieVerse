import { Link } from "react-router-dom";
import { styled } from "styled-components";
import img from "../img/kurtyna.jpg";

export const ListElement = styled.li`
	display: inline-block;
	padding: 5px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
	&:hover {
		font-size: 17px;
		text-shadow: 3px 3px 3px fuchsia;
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
	font-family: "Montserrat";
	font-weight: bold;
	text-decoration: none;
	height: 60px;
	padding: 10px;
	margin: 0;
	color: white;
	font-size: 70px;
	z-index: 1;
`;

export const Search = styled.div`
	display: inline-block;
	align-self: center;
	padding: 15px;
	font-size: 35px;
	color: white;
	z-index: 1;
`;