import { Link } from "react-router-dom";
import { styled } from "styled-components";
import img from "../../img/light.jpg";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15px;
	background-image: url(${img});
	background-size: cover;
	background-position: center;
`;

// MAIN BOX > logo, title, log in

export const MainBox = styled.div`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
`;

export const TitleLink = styled(Link)`
	color: white;
	text-decoration: none;
`;

export const TitleBox = styled.div`
	display: flex;
	align-items: center;
`;

export const TitleIcon = styled.img`
	margin-right: -10px;
	width: 70;
	height: 70px;
`;

export const TitleName = styled.h2`
	padding: 10px;
	font-family: "Montserrat";
	font-size: 65px;
`;

// SEARCH ICON, BAR

export const SearchBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #008ffd;
	font-size: 35px;
	align-self: center;
	/* max-height: ${(props) => (props.isExpanded ? "100%" : "0")}; */
`;

export const SearchIconPar = styled.p`
	transition: 4s linear;
	cursor: pointer;
`;

export const SearchInput = styled.input`
	/* position: absolute; */
	height: 30px;
	width: 400px;
	border-radius: 20px;
	text-align: center;
	/* max-height: ${(props) => (props.isExpanded ? "0" : "100%")}; */
	transition: 4s linear;
`;

// NAVIGATION

export const NavBox = styled.div`
	align-self: flex-end;
`;

export const NavElement = styled.li`
	display: inline-block;
	padding: 10px;
	font-weight: bold;
	font-size: 25px;
	letter-spacing: 2px;
	text-transform: uppercase;
	transition: font-size 0.3s, text-shadow 0.3s;
	&:hover {
		font-size: 27px;
		text-shadow: 3px 3px 3px #01ffff;
	}
`;

export const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	z-index: 1;
`;
