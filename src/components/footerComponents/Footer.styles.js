import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #0032a2;
`;

// LOGO, TITLE

export const FooterLogoBox = styled.div`
	position: absolute;
	top: 40%;
	left: 5%;
	padding: 5px 20px 0 20px;
	transform: translate(-5%, -40%);
`;
export const FooterLogo = styled.img`
	height: 120px;
	width: 120px;
	margin: 20px 20px 0 20px;
`;

export const FooterHeadName = styled.h2`
	color: white;
	text-align: center;
`;

// WRAPPER > NAV, SOCIAL MEDIA, CREATORS

export const FooterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 30px 0 30px;
`;

// FOOTER NAVIGATION

export const FooterNav = styled.div`
	margin: 5px 0 30px 0;
`;

export const NavElement = styled.li`
	display: inline-block;
	padding: 10px;
	text-decoration: none;
	text-transform: uppercase;
	color: white;
	list-style-type: none;
`;

export const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	font-weight: bold;
	font-size: 20px;
	&:hover {
		color: #01ffff;
	}
`;

// SOCIAL MEDIA

export const SocialMedia = styled.div`
	display: flex;
	align-items: center;
	margin: 10px;
	text-decoration: none;
	color: white;
`;

export const SocialMediaIcon = styled(Link)`
	font-size: 25px;
	color: white;
	padding: 15px;
	cursor: pointer;
	&:hover {
		color: #01ffff;
	}
`;

// CREATORS

export const CreatorBox = styled.div`
	margin-top: 30px;
`;

export const Creators = styled.h3`
	margin: 10px 0;
	font-family: sans-serif;
	color: white;
	font-size: 12px;
	text-align: center;
`;

export const CreatorsCopyright = styled.span`
	font-size: 15px;
	margin-right: 5px;
`;
