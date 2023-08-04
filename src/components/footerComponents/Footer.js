import React from "react";
import * as Styled from "./Footer.styles";
import FooterNav from "./FooterNav";
import FooterSocialMedia from "./FooterSocialMedia";
// import { BiCopyright } from "react-icons/bi";
import logo from "../../img/klaps.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Styled.FooterContainer>
			<Link to="/">
				<Styled.FooterLogoBox>
					<Styled.FooterLogo src={logo} />
					<Styled.FooterHeadName>MovieVerse</Styled.FooterHeadName>
				</Styled.FooterLogoBox>
			</Link>
			<Styled.FooterWrapper>
				<FooterNav />
				<FooterSocialMedia />
				<Styled.CreatorBox>
					<Styled.Creators>
						{/* <Styled.CreatorsCopyright> */}
						{/* <BiCopyright /> */}
						{/* </Styled.CreatorsCopyright> */}© Rudolinka, DomanOne,
						Krzysiek742
					</Styled.Creators>
				</Styled.CreatorBox>
			</Styled.FooterWrapper>
		</Styled.FooterContainer>
	);
};

export default Footer;
