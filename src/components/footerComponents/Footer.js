import React from "react";
import * as Styled from "./Footer.styles";
import FooterNav from "./FooterNav";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterCreators from "./FooterCreators";
import FooterLogo from "./FooterLogo";

const Footer = () => {
	return (
		<Styled.FooterContainer>
			<FooterLogo /> {/* logo and title - import */}
			<Styled.FooterWrapper>
				<FooterNav /> {/* navigation - import */}
				<FooterSocialMedia /> {/* social media - import*/}
				<FooterCreators /> {/* creators - import*/}
			</Styled.FooterWrapper>
		</Styled.FooterContainer>
	);
};

export default Footer;
