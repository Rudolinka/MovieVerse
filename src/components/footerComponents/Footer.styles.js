import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #07395a;
`;

export const litElement = styled.li`
	display: inline-block;
	padding: 10px;
	text-decoration: none;
	text-transform: uppercase;
	color: white;
	lit-style-type: none;
`;

export const Creators = styled.h3`
	margin: 10px 0;
	font-family: sans-serif;
	color: white;
	font-size: 12px;
`;

export const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	font-weight: bold;
	&:hover {
		color: fuchsia;
		font-size: 15px;
	}
`;

export const SocialMedia = styled.div`
	margin: 10px 0;
	text-decoration: none;
	color: white;
	cursor: pointer;
`;

export const SocialMediaIcon = styled(Link)`
	font-size: 25px;
	color: white;
	padding: 15px;
	&:hover {
		color: fuchsia;
	}
`;

export const CreatorsCopyright = styled.span`
	font-size: 20px;
	margin-right: 5px;
`;
