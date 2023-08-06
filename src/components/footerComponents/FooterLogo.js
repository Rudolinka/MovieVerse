import React from "react";
import * as Styled from "./Footer.styles";
import logo from "../../img/klaps.png";
import { Link } from "react-router-dom";

const FooterLogo = () => {
	return (
		<Link to="/">
			<Styled.FooterLogoBox>
				<Styled.FooterLogo src={logo} />
				<Styled.FooterHeadName>MovieVerse</Styled.FooterHeadName>
			</Styled.FooterLogoBox>
		</Link>
	);
};

export default FooterLogo;
