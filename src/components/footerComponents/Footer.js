import React from "react";
import * as Styled from "./Footer.styles";
import FooterNav from "./FooterNav";
import FooterSocialMedia from "./FooterSocialMedia";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
	return (
		<Styled.FooterWrapper>
			<h2></h2>
			<FooterNav />
			<FooterSocialMedia />
			<div>
				<Styled.Creators>
					<Styled.CreatorsCopyright>
						<BiCopyright />
					</Styled.CreatorsCopyright>
					Rudolinka, DomanOne, Krzysiek742
				</Styled.Creators>
			</div>
		</Styled.FooterWrapper>
	);
};

export default Footer;
